import Image from "next/image"
import { cn } from "@/lib/utils"

interface GAFBadgeProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeClasses = {
  xs: "w-6 h-6",
  sm: "w-12 h-12",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-40 h-40",
}

export function GAFBadge({ size = "md", className }: GAFBadgeProps) {
  return (
    <div className={cn("relative flex-shrink-0", sizeClasses[size], className)}>
      <Image
        src="/GAFbadge.png"
        alt="GAF Master Elite Certified Contractor Badge"
        width={200}
        height={200}
        className="object-contain w-full h-full drop-shadow-sm"
        quality={95}
      />
    </div>
  )
}

