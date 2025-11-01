import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Free Quotes - Stuart Conrad",
  description:
    "Contact Stuart Conrad Roofing Services for a free quote. Serving Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Call (513) 380-0592 or request a quote online.",
  alternates: {
    canonical: "https://stuartconradroofing.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

