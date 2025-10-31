import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://stuartconradroofing.com"),
  title: {
    default: "Stuart Conrad Roofing Services | Cincinnati, Northern KY, Eastern IN",
    template: "%s | Stuart Conrad Roofing Services",
  },
  description:
    "Professional roofing, siding, gutter, and painting services in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. GAF certified with 30+ years experience. Free quotes available.",
  keywords: [
    "roofing Cincinnati",
    "roof repair Cincinnati",
    "roof installation",
    "Northern Kentucky roofing",
    "Eastern Indiana roofing",
    "gutter services",
    "house siding",
    "painting services",
    "GAF certified roofer",
    "emergency roof repair",
  ],
  authors: [{ name: "Stuart Conrad Roofing Services" }],
  creator: "Stuart Conrad Roofing Services",
  publisher: "Stuart Conrad Roofing Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stuartconradroofing.com",
    siteName: "Stuart Conrad Roofing Services",
    title: "Stuart Conrad Roofing Services | Tri-State Area Roofing Experts",
    description:
      "30+ years of professional roofing services in Cincinnati, Northern Kentucky, and Eastern Indiana. GAF certified contractors offering roof installation, repairs, gutters, siding, and painting.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stuart Conrad Roofing Services - Professional Roofing Contractor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stuart Conrad Roofing Services | Tri-State Area Roofing Experts",
    description: "30+ years of professional roofing services. GAF certified contractors serving OH, KY, and IN.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
