"use client"

import { useState, useEffect } from "react"
import type React from "react"
import dynamic from "next/dynamic"
import type { ImageProps } from "next/image"

interface ClientImageProps extends Omit<ImageProps, "src"> {
  src: string
}

// Dynamically import Image component with SSR disabled
const NextImage = dynamic(() => import("next/image").then((mod) => ({ default: mod.default })), {
  ssr: false,
})

/**
 * Client-only Image component to prevent hydration mismatches
 * with Next.js 16 + Turbopack
 */
export function ClientImage({ src, alt, fill, className, ...props }: ClientImageProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show placeholder during SSR to prevent layout shift
  if (!mounted) {
    const placeholderStyle: React.CSSProperties = fill
      ? {
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }
      : {}

    return (
      <div
        className={className}
        style={placeholderStyle}
        aria-hidden="true"
        suppressHydrationWarning
      />
    )
  }

  return <NextImage src={src} alt={alt || ""} fill={fill} className={className} {...props} />
}

