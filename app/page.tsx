import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { GoogleReviews } from "@/components/google-reviews"
import { ServiceAreas } from "@/components/service-areas"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema-markup"

export const metadata = {
  title: "Stuart Conrad Roofing Services | Cincinnati, Northern KY, Eastern IN",
  description:
    "Professional roofing, siding, gutter, and painting services in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. GAF certified with 30+ years experience. Free quotes.",
  keywords:
    "roofing Cincinnati, roof repair, roof installation, gutter services, house siding, painting services, Northern Kentucky roofing, Eastern Indiana roofing",
  openGraph: {
    title: "Stuart Conrad Roofing Services | Tri-State Area Roofing Experts",
    description:
      "30+ years of professional roofing services in Cincinnati, Northern Kentucky, and Eastern Indiana. GAF certified contractors.",
    url: "https://stuartconradroofing.com",
    siteName: "Stuart Conrad Roofing Services",
    images: [
      {
        url: "https://stuartconradroofing.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stuart Conrad Roofing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stuart Conrad Roofing Services | Tri-State Area Roofing Experts",
    description: "30+ years of professional roofing services. GAF certified contractors serving OH, KY, and IN.",
    images: ["https://stuartconradroofing.com/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <>
      <SchemaMarkup type="organization" />
      <SchemaMarkup type="localBusiness" />
      <main className="min-h-screen">
        <Navigation />
        <Hero />
        <Services />
        <WhyChooseUs />
        <GoogleReviews />
        <ServiceAreas />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
