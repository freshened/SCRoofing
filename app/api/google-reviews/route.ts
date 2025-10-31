import { NextResponse } from "next/server"

interface GoogleReview {
  author_name: string
  rating: number
  relative_time_description: string
  text: string
  time: number
}

interface GooglePlaceDetails {
  result: {
    rating: number
    user_ratings_total: number
    reviews: GoogleReview[]
    url?: string
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
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews,url&key=${apiKey}`,
      {
        next: { revalidate: 3600 },
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

    return NextResponse.json({
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
    })
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    )
  }
}

