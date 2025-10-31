import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Droplets, Shield, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Gutter Services - Stuart Conrad Roofing | Installation, Repair & Guards",
  description:
    "Professional gutter installation, repair, and gutter guard services in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Protect your home's foundation.",
}

export default function GuttersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Gutter Services"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional <span className="text-primary">Gutter Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Protect your home's foundation with expert gutter installation, repair, and maintenance
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Gutter Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your gutters play a crucial role in protecting your home from water damage. Properly functioning gutters
                direct rainwater away from your foundation, preventing costly structural damage, basement flooding, and
                landscape erosion.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Stuart Conrad Roofing Services offers comprehensive gutter services including installation, repair,
                cleaning, and gutter guard systems. Our experienced team ensures your gutters work efficiently to
                protect your home year-round.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Our Gutter Services</h3>
              <ul className="space-y-4">
                {[
                  "New Gutter Installation",
                  "Gutter Repair and Replacement",
                  "Gutter Guard Installation",
                  "Downspout Installation and Repair",
                  "Gutter Cleaning and Maintenance",
                  "Custom Gutter Solutions",
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

      {/* Gutter Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Gutter Systems We Install</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quality materials designed to last and protect your home
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Seamless Aluminum Gutters",
                description:
                  "Custom-fabricated on-site for a perfect fit with no leaks. Available in multiple colors to match your home.",
                features: ["No Seams or Leaks", "Custom Colors", "Rust Resistant", "Lightweight & Durable"],
              },
              {
                title: "Copper Gutters",
                description:
                  "Premium option that adds elegance and value to your home. Develops beautiful patina over time.",
                features: ["Elegant Appearance", "Extremely Durable", "Low Maintenance", "Increases Home Value"],
              },
              {
                title: "Vinyl Gutters",
                description:
                  "Affordable and easy to maintain option that won't rust or corrode. Great for budget-conscious homeowners.",
                features: ["Budget Friendly", "Won't Rust", "Easy Installation", "Low Maintenance"],
              },
            ].map((type, index) => (
              <Card key={index} className="glass p-6">
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gutter Guards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Leaf className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Gutter Guard Systems</h2>
              <p className="text-lg text-muted-foreground">
                Eliminate gutter cleaning and protect your gutters from clogs with professional gutter guard
                installation
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Benefits of Gutter Guards</h3>
                <ul className="space-y-3">
                  {[
                    "No more dangerous ladder climbing",
                    "Prevent clogs from leaves and debris",
                    "Reduce maintenance and cleaning",
                    "Prevent ice dams in winter",
                    "Extend gutter lifespan",
                    "Prevent pest infestations",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Guard Types Available</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-1">Micro-Mesh Guards</h4>
                    <p className="text-sm text-muted-foreground">
                      Fine mesh blocks even small debris while allowing water flow
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Screen Guards</h4>
                    <p className="text-sm text-muted-foreground">
                      Durable screens that keep out leaves and large debris
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Reverse Curve Guards</h4>
                    <p className="text-sm text-muted-foreground">Water flows around curve while debris falls off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gutters Matter */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Proper Gutters Matter</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect your home's most important investment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Foundation Protection",
                description: "Prevent water from pooling around your foundation",
              },
              {
                icon: Droplets,
                title: "Prevent Flooding",
                description: "Keep basements and crawl spaces dry",
              },
              {
                icon: Shield,
                title: "Landscape Protection",
                description: "Prevent soil erosion and protect landscaping",
              },
              {
                icon: Shield,
                title: "Siding Protection",
                description: "Prevent water damage to exterior walls",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Protect Your Home with Quality Gutters</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't wait for water damage to occur. Contact us today for a free gutter inspection and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
