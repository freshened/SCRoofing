"use client"

import { useState, useEffect } from "react"

interface BusinessPeriod {
  open: {
    day: number
    time: string
  }
  close?: {
    day: number
    time: string
  }
}

interface BusinessHours {
  isOpen: boolean
  status: "open" | "closed"
  nextTime: string | null
  periods: BusinessPeriod[] | null
}

function calculateNextTime(
  isOpen: boolean,
  periods: BusinessPeriod[] | null
): string | null {
  if (!periods || periods.length === 0) {
    return null
  }

  const now = new Date()
  const currentDay = now.getDay()
  const currentHour = now.getHours()
  const currentMinute = now.getMinutes()
  const currentTimeInMinutes = currentHour * 60 + currentMinute

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  if (isOpen) {
    const todayPeriod = periods.find((p) => p.open.day === currentDay)
    if (todayPeriod?.close?.time) {
      const closeTime = todayPeriod.close.time
      const hours = parseInt(closeTime.substring(0, 2))
      const minutes = parseInt(closeTime.substring(2, 4))
      const ampm = hours >= 12 ? "PM" : "AM"
      const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
      return `${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
    }
  } else {
    let nextOpenPeriod: BusinessPeriod | null = null
    let actualDaysToAdd = 0

    const todayPeriod = periods.find((p) => p.open.day === currentDay)
    if (todayPeriod?.open?.time) {
      const openTime = todayPeriod.open.time
      const openHours = parseInt(openTime.substring(0, 2))
      const openMinutes = parseInt(openTime.substring(2, 4))
      const openTimeInMinutes = openHours * 60 + openMinutes

      if (openTimeInMinutes > currentTimeInMinutes) {
        nextOpenPeriod = todayPeriod
        actualDaysToAdd = 0
      }
    }

    if (!nextOpenPeriod) {
      for (let i = 1; i <= 7; i++) {
        const checkDay = (currentDay + i) % 7
        const period = periods.find((p) => p.open.day === checkDay)

        if (period?.open?.time) {
          nextOpenPeriod = period
          actualDaysToAdd = i
          break
        }
      }
    }

    if (nextOpenPeriod?.open?.time) {
      const openTime = nextOpenPeriod.open.time
      const hours = parseInt(openTime.substring(0, 2))
      const minutes = parseInt(openTime.substring(2, 4))
      const ampm = hours >= 12 ? "PM" : "AM"
      const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours
      const openDay = nextOpenPeriod.open.day
      const dayName = dayNames[openDay] || "Monday"

      if (actualDaysToAdd === 0) {
        const openTimeInMinutes = hours * 60 + minutes
        const timeUntilOpen = openTimeInMinutes - currentTimeInMinutes
        const hoursUntilOpen = Math.floor(timeUntilOpen / 60)
        const minutesUntilOpen = timeUntilOpen % 60

        if (hoursUntilOpen > 0) {
          return `in ${hoursUntilOpen} hour${hoursUntilOpen === 1 ? "" : "s"} at ${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
        } else if (minutesUntilOpen > 0) {
          return `in ${minutesUntilOpen} minute${minutesUntilOpen === 1 ? "" : "s"} at ${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
        } else {
          return `at ${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
        }
      } else if (actualDaysToAdd === 1) {
        return `tomorrow at ${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
      } else {
        return `${dayName} at ${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`
      }
    }
  }

  return null
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
    
    if (cachedData && (now - cacheTimestamp) < CACHE_DURATION && cachedData.businessHours?.periods) {
      const updatedData = { ...cachedData }
      if (cachedData.businessHours && cachedData.businessHours.periods) {
        updatedData.businessHours = {
          ...cachedData.businessHours,
          nextTime: calculateNextTime(
            cachedData.businessHours.isOpen,
            cachedData.businessHours.periods
          ),
        }
      }
      setData(updatedData)
      setIsLoading(false)
    } else {
      async function fetchData() {
        try {
          setIsLoading(true)
          const response = await fetch("/api/google-reviews")
          
          if (!response.ok) {
            throw new Error("Failed to fetch data")
          }

          const result = await response.json()
          
          const businessHours = result.businessHours
          if (businessHours && !businessHours.periods) {
            console.warn("Business hours periods not found in API response")
          }
          const nextTime = businessHours && businessHours.periods
            ? calculateNextTime(businessHours.isOpen, businessHours.periods)
            : null
          
          if (businessHours && businessHours.periods && !nextTime) {
            console.log("calculateNextTime returned null", {
              isOpen: businessHours.isOpen,
              periods: businessHours.periods,
              currentTime: new Date().toLocaleTimeString()
            })
          }

          const googleData: GoogleData = {
            reviews: result.reviews || [],
            rating: result.rating || 5,
            totalReviews: result.totalReviews || 82,
            googleUrl: result.googleUrl || "https://www.google.com/search?q=stuart+conrad+roofing#lrd=0x0:0x0,1",
            businessHours: businessHours
              ? {
                  ...businessHours,
                  nextTime,
                }
              : null,
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
            const updatedCachedData = { ...cachedData }
            if (cachedData.businessHours) {
              updatedCachedData.businessHours = {
                ...cachedData.businessHours,
                nextTime: calculateNextTime(
                  cachedData.businessHours.isOpen,
                  cachedData.businessHours.periods
                ),
              }
            }
            setData(updatedCachedData)
          }
        } finally {
          setIsLoading(false)
        }
      }

      fetchData()
    }
  }, [])

  useEffect(() => {
    if (!data?.businessHours?.periods) {
      return
    }

    const interval = setInterval(() => {
      setData((currentData) => {
        if (!currentData?.businessHours) {
          return currentData
        }

        return {
          ...currentData,
          businessHours: {
            ...currentData.businessHours,
            nextTime: calculateNextTime(
              currentData.businessHours.isOpen,
              currentData.businessHours.periods
            ),
          },
        }
      })
    }, 60000)

    return () => clearInterval(interval)
  }, [data?.businessHours?.periods])

  return { data, isLoading, error }
}
