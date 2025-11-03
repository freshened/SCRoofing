import { NextResponse } from "next/server"

interface GoogleReview {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface OpeningHours {
  open_now?: boolean
  weekday_text?: string[]
  periods?: Array<{
    open: {
      day: number
      time: string
    }
    close: {
      day: number
      time: string
    }
  }>
}

interface Photo {
  height: number
  html_attributions: string[]
  photo_reference: string
  width: number
}

interface GooglePlaceDetails {
  result: {
    rating: number
    user_ratings_total: number
    reviews: GoogleReview[]
    url?: string
    opening_hours?: OpeningHours
    photos?: Photo[]
  }
  status: string
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Google Places API not configured" },
      { status: 503 }
    )
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews,url,opening_hours,photos&key=${apiKey}`,
      {
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      throw new Error(`Google Places API error: ${response.statusText}`)
    }

    const data: GooglePlaceDetails = await response.json()

    if (data.status !== "OK") {
      throw new Error(`Google Places API returned status: ${data.status}`)
    }

    const reviews = data.result.reviews || []
    const rating = data.result.rating || 0
    const totalReviews = data.result.user_ratings_total || 0
    const googleUrl = data.result.url || `https://www.google.com/maps/place/?q=place_id:${placeId}`
    const openingHours = data.result.opening_hours
    const photos = data.result.photos || []

    let isOpen = false
    let status: "open" | "closed" = "closed"

    if (openingHours) {
      isOpen = openingHours.open_now || false
      status = isOpen ? "open" : "closed"
    }

    const photosWithUrls = photos.slice(0, 10).map((photo) => ({
      photoReference: photo.photo_reference,
      width: photo.width,
      height: photo.height,
      url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photo.photo_reference}&key=${apiKey}`,
      thumbnailUrl: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${apiKey}`,
    }))

    return NextResponse.json(
      {
        reviews: reviews.map((review) => ({
          name: review.author_name,
          rating: review.rating,
          date: review.relative_time_description,
          text: review.text,
          time: review.time,
        })),
        rating,
        totalReviews,
        googleUrl,
        businessHours: {
          isOpen,
          status,
          periods: openingHours?.periods || null,
        },
        photos: photosWithUrls,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
          "Content-Type": "application/json",
        },
      }
    )
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    )
  }
}

