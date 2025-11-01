import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Gallery | Our Work - Stuart Conrad",
  description:
    "Browse our gallery of completed roofing, siding, gutter, and painting projects in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. See our quality workmanship.",
  alternates: {
    canonical: "https://scroofin.vercel.app/gallery",
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

