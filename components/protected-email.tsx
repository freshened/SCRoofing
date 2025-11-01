"use client"

import { useState, useEffect } from "react"
import { decodeEmail } from "@/lib/email-utils"

interface ProtectedEmailProps {
  encoded: string
  className?: string
}

export function ProtectedEmail({ encoded, className }: ProtectedEmailProps) {
  const [email, setEmail] = useState<string>(() => {
    // Try to decode immediately on client side
    if (typeof window !== "undefined" && encoded) {
      try {
        return decodeEmail(encoded)
      } catch {
        return ""
      }
    }
    return ""
  })

  useEffect(() => {
    // Ensure email is decoded after mount
    if (!email && encoded) {
      try {
        const decoded = decodeEmail(encoded)
        if (decoded && decoded.trim()) {
          setEmail(decoded)
        }
      } catch (error) {
        console.error("Failed to decode email in useEffect:", error)
      }
    }
  }, [encoded, email])

  // Show email link once we have it
  if (email) {
    return (
      <a href={`mailto:${email}`} className={className}>
        {email}
      </a>
    )
  }

  // Show invisible placeholder during loading (prevents layout shift)
  return (
    <span className={className} style={{ visibility: "hidden" }} aria-hidden="true">
      {" "}
    </span>
  )
}

