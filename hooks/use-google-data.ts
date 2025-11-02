"use client"

import { useState, useEffect } from "react"

interface BusinessHours {
  isOpen: boolean
  status: "open" | "closed"
  nextTime: string | null
}

interface Review {
  name: string
  rating: number
  date: string
  text: string
  time?: number
}

interface GooglePhoto {
  photoReference: string
  width: number
  height: number
  url: string
  thumbnailUrl: string
}

interface GoogleData {
  reviews: Review[]
  rating: number
  totalReviews: number
  googleUrl: string
  businessHours: BusinessHours | null
  photos: GooglePhoto[]
}

let cachedData: GoogleData | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 1 * 60 * 1000

export function useGoogleData() {
  const [data, setData] = useState<GoogleData | null>(cachedData)
  const [isLoading, setIsLoading] = useState(!cachedData)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const now = Date.now()
    
    if (cachedData && (now - cacheTimestamp) < CACHE_DURATION) {
      setData(cachedData)
      setIsLoading(false)
      return
    }

    async function fetchData() {
      try {
        setIsLoading(true)
        const response = await fetch("/api/google-reviews")
        
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }

        const result = await response.json()
        
        const googleData: GoogleData = {
          reviews: result.reviews || [],
          rating: result.rating || 5,
          totalReviews: result.totalReviews || 82,
          googleUrl: result.googleUrl || "https://www.google.com/search?q=stuart+conrad+roofing#lrd=0x0:0x0,1",
          businessHours: result.businessHours || null,
          photos: result.photos || [],
        }

        cachedData = googleData
        cacheTimestamp = now
        setData(googleData)
        setError(null)
      } catch (err) {
        console.error("Error loading Google data:", err)
        setError("Unable to load data")
        if (cachedData) {
          setData(cachedData)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return { data, isLoading, error }
}
