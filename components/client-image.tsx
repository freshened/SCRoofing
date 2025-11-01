"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Image, { ImageProps } from "next/image"

interface ClientImageProps extends Omit<ImageProps, "src"> {
  src: string
}

/**
 * Client-only Image component to prevent hydration mismatches
 * with Next.js 16 + Turbopack
 */
export function ClientImage({ src, alt, ...props }: ClientImageProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    // This prevents hydration mismatch by not rendering Image during SSR
    const fill = props.fill
    const style: React.CSSProperties = fill
      ? {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }
      : {}
    
    return (
      <div
        className={props.className}
        style={style}
        aria-hidden="true"
      />
    )
  }

  return <Image src={src} alt={alt || ""} {...props} />
}

