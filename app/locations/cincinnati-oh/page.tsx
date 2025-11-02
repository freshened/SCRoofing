import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleReviews } from "@/components/google-reviews"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, CheckCircle2, Phone, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { GAFBadge } from "@/components/gaf-badge"

export const metadata = {
  title: "Roofing Cincinnati, OH | Stuart Conrad",
  description:
    "Professional roofing, siding, gutter, and painting services in Greater Cincinnati, OH. Serving Mason, West Chester, Loveland, Blue Ash, and surrounding areas. Free quotes.",
  alternates: {
    canonical: "https://scroofin.vercel.app/locations/cincinnati-oh",
  },
}

export default function CincinnatiPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Cincinnati Roofing Services"
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
              Roofing Services in <span className="text-primary">Greater Cincinnati, OH</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Your trusted local roofing contractor serving Cincinnati and surrounding communities for over 30 years
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Cincinnati's Premier Roofing Contractor</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over three decades, Stuart Conrad Roofing Services has been the trusted choice for homeowners
                throughout Greater Cincinnati. We understand the unique challenges that Ohio weather presents to your
                roof, from harsh winters with freezing temperatures and ice accumulation to humid summers with intense storms. Cincinnati's climate requires roofing systems that can withstand temperature fluctuations, heavy rainfall, and occasional severe weather events, and we're equipped with the knowledge and materials to handle it all.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                As a GAF Master Elite certified contractor, we bring the highest level of expertise to every project,
                whether it's a complete roof replacement, emergency repair, or new gutter installation. Our local team
                is committed to protecting Cincinnati homes with quality workmanship and exceptional service. We've built our reputation by serving communities from Mason to West Chester, Loveland to Blue Ash, understanding the distinct character and needs of each neighborhood.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Cincinnati homeowners trust us because we're local, licensed, and experienced with the specific building codes and architectural styles found throughout the region. From historic homes in Hyde Park to modern developments in West Chester, we provide solutions that respect your home's character while ensuring maximum protection and energy efficiency.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Services in Cincinnati</h3>
              <ul className="space-y-4">
                {[
                  "Roof Installation & Replacement",
                  "Emergency Roof Repairs",
                  "Storm Damage Restoration",
                  "Gutter Installation & Repair",
                  "House Siding Installation",
                  "Exterior & Interior Painting",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Served */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Cincinnati Communities We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proudly serving homeowners throughout Greater Cincinnati and surrounding areas
            </p>
          </div>
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Cincinnati",
                "Mason",
                "West Chester",
                "Loveland",
                "Blue Ash",
                "Montgomery",
                "Sharonville",
                "Fairfield",
                "Hamilton",
                "Milford",
                "Anderson Township",
                "Delhi Township",
                "Green Township",
                "Sycamore Township",
                "Madeira",
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Cincinnati Homeowners Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "30+ Years Local",
                description: "Decades of experience serving Cincinnati homes",
              },
              {
                title: "GAF Certified",
                description: "Master Elite contractor with top certifications",
                badge: true as const,
              },
              {
                icon: Phone,
                title: "Fast Response",
                description: "Same-day emergency service available",
              },
              {
                icon: Star,
                title: "Local Team",
                description: "Your neighbors, committed to quality",
              },
            ].map((item, index) => (
              <Card key={index} className="glass p-6 text-center">
                {"badge" in item && item.badge ? (
                  <div className="flex justify-center mb-4">
                    <GAFBadge size="md" />
                  </div>
                ) : "icon" in item && item.icon ? (
                  <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                ) : null}
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Cincinnati Home?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free quote today. We're proud to serve homeowners throughout Greater Cincinnati.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
