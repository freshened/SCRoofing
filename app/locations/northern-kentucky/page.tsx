import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GoogleReviews } from "@/components/google-reviews"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, CheckCircle2, Phone, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Roofing Northern Kentucky | Stuart Conrad",
  description:
    "Professional roofing, siding, gutter, and painting services in Northern Kentucky. Serving Covington, Florence, Independence, Fort Thomas, and surrounding areas. Free quotes.",
  alternates: {
    canonical: "https://stuartconradroofing.com/locations/northern-kentucky",
  },
}

export default function NorthernKentuckyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Northern Kentucky Roofing Services"
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
              Roofing Services in <span className="text-primary">Northern Kentucky</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Expert roofing and home improvement services for Northern Kentucky homeowners
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Northern Kentucky's Trusted Roofing Experts</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stuart Conrad Roofing Services has been protecting Northern Kentucky homes for over 30 years. We
                understand the unique weather patterns and architectural styles of the region, from historic homes in
                Covington to modern developments in Florence. Northern Kentucky's climate experiences seasonal extremes, with cold, wet winters and hot, humid summers that can take a toll on roofing systems, siding, and gutters.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our team of GAF certified professionals is dedicated to providing Northern Kentucky homeowners with
                superior roofing, siding, gutter, and painting services. We combine quality materials with expert
                craftsmanship to ensure your home is protected for years to come. We're fully licensed in Kentucky and familiar with local building codes, ensuring all work meets or exceeds state requirements.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From the charming riverfront communities of Covington and Newport to the growing suburbs of Florence and Independence, we've built strong relationships with homeowners throughout Northern Kentucky. Whether you're maintaining a historic home's character or enhancing a newer property's value, we provide solutions tailored to your specific needs and budget.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Services in Northern Kentucky</h3>
              <ul className="space-y-4">
                {[
                  "Complete Roof Replacement",
                  "Roof Repair & Maintenance",
                  "Storm Damage Restoration",
                  "Seamless Gutter Systems",
                  "Vinyl & Fiber Cement Siding",
                  "Professional Painting Services",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Northern Kentucky Communities We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Serving homeowners throughout Northern Kentucky's vibrant communities
            </p>
          </div>
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Covington",
                "Florence",
                "Independence",
                "Fort Thomas",
                "Newport",
                "Erlanger",
                "Fort Wright",
                "Villa Hills",
                "Edgewood",
                "Elsmere",
                "Fort Mitchell",
                "Highland Heights",
                "Park Hills",
                "Bellevue",
                "Dayton",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Northern Kentucky Trusts Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Star,
                title: "Local Expertise",
                description: "Deep understanding of Northern Kentucky homes",
              },
              {
                icon: CheckCircle2,
                title: "Licensed in KY",
                description: "Fully licensed and insured in Kentucky",
              },
              {
                icon: Phone,
                title: "Emergency Service",
                description: "Available when you need us most",
              },
              {
                icon: Star,
                title: "Quality Guaranteed",
                description: "Workmanship you can count on",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Protect Your Northern Kentucky Home?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. We're proud to serve Northern Kentucky homeowners.
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
