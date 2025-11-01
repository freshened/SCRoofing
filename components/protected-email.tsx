"use client"

import { useEffect, useState } from "react"
import { decodeEmail } from "@/lib/email-utils"

interface ProtectedEmailProps {
  encoded: string
  className?: string
}

export function ProtectedEmail({ encoded, className }: ProtectedEmailProps) {
  const [email, setEmail] = useState<string>("")

  useEffect(() => {
    try {
      const decoded = decodeEmail(encoded)
      setEmail(decoded)
    } catch {
      setEmail("")
    }
  }, [encoded])

  if (!email) {
    return null
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {email}
    </a>
  )
}

