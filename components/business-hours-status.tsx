"use client"

import { Clock } from "lucide-react"
import { useEffect, useState } from "react"

interface BusinessHours {
  isOpen: boolean
  status: "open" | "closed"
  nextTime: string | null
}

export function BusinessHoursStatus() {
  const [businessHours, setBusinessHours] = useState<BusinessHours | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchBusinessHours() {
      try {
        const response = await fetch("/api/google-reviews")
        
        if (response.ok) {
          const data = await response.json()
          if (data.businessHours) {
            setBusinessHours(data.businessHours)
          }
        }
      } catch (err) {
        console.error("Error loading business hours:", err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBusinessHours()
  }, [])

  if (isLoading || !businessHours) {
    return null
  }

  return (
    <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2.5 border border-white/20">
      <Clock className="h-4 w-4 text-primary" />
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <div className={`h-2 w-2 rounded-full ${businessHours.status === "open" ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
          <span className="text-sm font-semibold text-foreground">
            {businessHours.status === "open" ? "Open" : "Closed"}
          </span>
        </div>
        {businessHours.nextTime && (
          <>
            <span className="text-sm text-foreground/60">•</span>
            <span className="text-sm text-foreground/80">
              {businessHours.status === "open" 
                ? `Closes at ${businessHours.nextTime}` 
                : `Opens ${businessHours.nextTime}`}
            </span>
          </>
        )}
      </div>
    </div>
  )
}
