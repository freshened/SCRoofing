"use client"

import Image from "next/image"
import type { ImageProps } from "next/image"

interface ClientImageProps extends Omit<ImageProps, "src"> {
  src: string
}

/**
 * Client-only Image component to prevent hydration mismatches
 * Renders Image component with suppressHydrationWarning to handle
 * server/client differences in Next.js Image optimization
 */
export function ClientImage({ src, alt, fill, className, style, ...props }: ClientImageProps) {
  return (
    <div suppressHydrationWarning style={fill ? { position: "absolute", inset: 0 } : undefined}>
      <Image
        src={src}
        alt={alt || ""}
        fill={fill}
        className={className}
        style={style}
        {...props}
      />
    </div>
  )
}

