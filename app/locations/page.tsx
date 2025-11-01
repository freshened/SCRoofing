import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Service Areas | Cincinnati, KY, IN - Stuart Conrad",
  description:
    "Serving Greater Cincinnati OH, Northern Kentucky, and Eastern Indiana with professional roofing, siding, gutter, and painting services. Find your local service area.",
  alternates: {
    canonical: "https://scroofin.vercel.app/locations",
  },
}

const locations = [
  {
    name: "Greater Cincinnati, OH",
    slug: "cincinnati-oh",
    description:
      "Serving all of Greater Cincinnati and surrounding communities with comprehensive roofing and home improvement services.",
    areas: ["Cincinnati", "Mason", "West Chester", "Loveland", "Blue Ash", "Montgomery", "Sharonville", "Fairfield"],
  },
  {
    name: "Northern Kentucky",
    slug: "northern-kentucky",
    description: "Providing expert roofing, siding, and gutter services throughout Northern Kentucky's communities.",
    areas: [
      "Covington",
      "Florence",
      "Independence",
      "Fort Thomas",
      "Newport",
      "Erlanger",
      "Fort Wright",
      "Villa Hills",
    ],
  },
  {
    name: "Eastern Indiana",
    slug: "eastern-indiana",
    description: "Quality roofing and home improvement solutions for Eastern Indiana residents and businesses.",
    areas: ["Lawrenceburg", "Aurora", "Dillsboro", "Rising Sun", "Greendale", "Hidden Valley", "Bright", "Milan"],
  },
]

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Service Areas"
            fill
            className="object-cover opacity-20"
            loading="lazy"
            sizes="100vw"
            quality={50}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Serving the <span className="text-primary">Tri-State Area</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-4">
              Professional roofing and home improvement services across Greater Cincinnati, Northern Kentucky, and
              Eastern Indiana
            </p>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Stuart Conrad Roofing Services has been proudly serving the Tri-State area for over 30 years, providing comprehensive roofing, siding, gutter, and painting services to homeowners and businesses throughout Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Our deep understanding of regional weather patterns, building codes, and architectural styles allows us to deliver solutions perfectly tailored to your area's unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="glass p-8 hover:scale-105 transition-transform">
                <MapPin className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
                <p className="text-muted-foreground mb-6">{location.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-sm">Communities We Serve:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.areas.map((area, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/locations/${location.slug}`}>Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose a Local Contractor?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the unique needs of Tri-State area homes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Local Expertise",
                description: "We know the local climate, building codes, and architectural styles",
              },
              {
                icon: Clock,
                title: "Fast Response",
                description: "Quick response times for emergencies and consultations",
              },
              {
                icon: Phone,
                title: "Personal Service",
                description: "Direct communication with local team members",
              },
              {
                icon: MapPin,
                title: "Community Focused",
                description: "Proud to serve our neighbors and local communities",
              },
            ].map((item, index) => (
              <Card key={index} className="glass p-6 text-center">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. We're proud to serve homeowners throughout the Tri-State area.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
