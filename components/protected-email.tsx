"use client"

import { useState, useEffect } from "react"
import { decodeEmail } from "@/lib/email-utils"

interface ProtectedEmailProps {
  encoded: string
  className?: string
}

export function ProtectedEmail({ encoded, className }: ProtectedEmailProps) {
  const [email, setEmail] = useState<string>("")

  useEffect(() => {
    if (encoded) {
      try {
        const decoded = decodeEmail(encoded)
        if (decoded && decoded.trim()) {
          setEmail(decoded)
        }
      } catch (error) {
        console.error("Failed to decode email in useEffect:", error)
      }
    }
  }, [encoded])

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

