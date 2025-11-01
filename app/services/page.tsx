import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Home, Wrench, Droplets, Paintbrush, PanelTop, Package } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Our Services - Stuart Conrad Roofing | Roofing, Siding, Gutters & More",
  description:
    "Complete roofing and home improvement services in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Roof installation, repairs, gutters, painting, siding, and box cutter services.",
  openGraph: {
    title: "Roofing & Home Improvement Services | Stuart Conrad Roofing",
    description:
      "Professional roofing, siding, gutter, painting, and home improvement services throughout the Tri-State area.",
    url: "https://stuartconradroofing.com/services",
    siteName: "Stuart Conrad Roofing Services",
    images: [
      {
        url: "https://stuartconradroofing.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
}

const services = [
  {
    icon: Home,
    title: "Roof Installation",
    slug: "roof-installation",
    description:
      "Complete roof replacement with premium materials and expert installation. GAF certified contractors ensuring quality workmanship.",
    features: ["Asphalt Shingles", "Metal Roofing", "Flat Roofing", "Lifetime Warranties"],
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    slug: "roof-repairs",
    description:
      "Fast, reliable roof repair services for leaks, storm damage, and wear. Emergency repairs available to protect your home.",
    features: ["Leak Repairs", "Storm Damage", "Shingle Replacement", "Emergency Service"],
  },
  {
    icon: Droplets,
    title: "Gutter Services",
    slug: "gutters",
    description:
      "Professional gutter installation, repair, and cleaning to protect your home's foundation and prevent water damage.",
    features: ["Gutter Installation", "Gutter Repair", "Gutter Guards", "Downspout Solutions"],
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    slug: "painting",
    description:
      "Interior and exterior painting services to refresh and protect your home with quality paints and expert application.",
    features: ["Exterior Painting", "Interior Painting", "Deck Staining", "Color Consultation"],
  },
  {
    icon: PanelTop,
    title: "House Siding",
    slug: "siding",
    description:
      "Enhance your home's curb appeal and energy efficiency with professional siding installation and repair services.",
    features: ["Vinyl Siding", "Fiber Cement", "Siding Repair", "Trim & Soffit"],
  },
  {
    icon: Package,
    title: "Box Cutter Services",
    slug: "box-cutters",
    description:
      "Specialized box cutter installation and maintenance services for commercial and residential applications.",
    features: ["Installation", "Maintenance", "Repairs", "Custom Solutions"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Services background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Comprehensive roofing and home improvement solutions for the Tri-State area
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass p-8 hover:scale-105 transition-transform group">
                <service.icon className="h-16 w-16 text-primary mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full">
                  <Link href={`/services/${service.slug}`}>Learn More</Link>
                </Button>
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
            Contact us today for a free quote and consultation. We're here to help with all your home improvement needs.
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
