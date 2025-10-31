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

interface GooglePlaceDetails {
  result: {
    rating: number
    user_ratings_total: number
    reviews: GoogleReview[]
    url?: string
    opening_hours?: OpeningHours
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
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews,url,opening_hours&key=${apiKey}`,
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
    const openingHours = data.result.opening_hours

    let isOpen = false
    let nextTime: string | null = null
    let status: "open" | "closed" = "closed"

    if (openingHours) {
      isOpen = openingHours.open_now || false
      status = isOpen ? "open" : "closed"

      if (openingHours.periods && openingHours.periods.length > 0) {
        const now = new Date()
        const currentDay = now.getDay()

        if (isOpen && openingHours.periods) {
          const todayPeriod = openingHours.periods.find((p) => p.open.day === currentDay)
          if (todayPeriod?.close?.time) {
            const closeTime = todayPeriod.close.time
            const hours = parseInt(closeTime.substring(0, 2))
            const minutes = parseInt(closeTime.substring(2, 4))
            const ampm = hours >= 12 ? "PM" : "AM"
            const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
            nextTime = `${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
          }
        } else {
          let nextOpenPeriod = null
          let daysToAdd = 0

          for (let i = 0; i < 7; i++) {
            const checkDay = (currentDay + i) % 7
            const period = openingHours.periods.find((p) => p.open.day === checkDay)
            if (period?.open?.time) {
              nextOpenPeriod = period
              daysToAdd = i
              break
            }
          }

          if (nextOpenPeriod?.open?.time) {
            const openTime = nextOpenPeriod.open.time
            const hours = parseInt(openTime.substring(0, 2))
            const minutes = parseInt(openTime.substring(2, 4))
            const ampm = hours >= 12 ? "PM" : "AM"
            const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
            if (daysToAdd === 0) {
              nextTime = `today at ${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
            } else if (daysToAdd === 1) {
              nextTime = `tomorrow at ${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
            } else {
              const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
              const openDay = nextOpenPeriod.open.day
              const dayName = dayNames[openDay] || "Monday"
              nextTime = `${dayName} at ${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
            }
          }
        }
      }
    }

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
      businessHours: {
        isOpen,
        status,
        nextTime,
      },
    })
  } catch (error) {
    console.error("Error fetching Google reviews:", error)
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    )
  }
}

