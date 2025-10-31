import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleReviews } from "@/components/google-reviews"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, CheckCircle2, Phone, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Roofing Services in Eastern Indiana - Stuart Conrad Roofing",
  description:
    "Professional roofing, siding, gutter, and painting services in Eastern Indiana. Serving Lawrenceburg, Aurora, Dillsboro, and surrounding areas. Free quotes available.",
}

export default function EasternIndianaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Eastern Indiana Roofing Services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Roofing Services in <span className="text-primary">Eastern Indiana</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Quality roofing and home improvement solutions for Eastern Indiana residents
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Eastern Indiana's Roofing Professionals</h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over 30 years, Stuart Conrad Roofing Services has been the go-to roofing contractor for Eastern
                Indiana homeowners. We bring big-city expertise with small-town service to communities throughout the
                region.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're in Lawrenceburg, Aurora, or any of the surrounding communities, our team is ready to
                provide expert roofing, siding, gutter, and painting services. We're committed to protecting your home
                with quality materials and professional installation.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Services in Eastern Indiana</h3>
              <ul className="space-y-4">
                {[
                  "Residential Roof Installation",
                  "Emergency Roof Repairs",
                  "Gutter Installation & Guards",
                  "Siding Replacement",
                  "Exterior Painting",
                  "Storm Damage Restoration",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eastern Indiana Communities We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proudly serving homeowners throughout Eastern Indiana
            </p>
          </div>
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Lawrenceburg",
                "Aurora",
                "Dillsboro",
                "Rising Sun",
                "Greendale",
                "Hidden Valley",
                "Bright",
                "Milan",
                "Moores Hill",
                "Sunman",
                "Versailles",
                "Batesville",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Eastern Indiana Chooses Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "Community Focused",
                description: "Proud to serve our Eastern Indiana neighbors",
              },
              {
                icon: CheckCircle2,
                title: "Licensed in IN",
                description: "Fully licensed and insured in Indiana",
              },
              {
                icon: Phone,
                title: "Reliable Service",
                description: "Dependable service you can trust",
              },
              {
                icon: Star,
                title: "Fair Pricing",
                description: "Honest quotes with no hidden fees",
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

      <GoogleReviews />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Eastern Indiana Home?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free quote today. We're proud to serve Eastern Indiana homeowners.
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
