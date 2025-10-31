import { Home, Wrench, Droplets, Paintbrush, PanelTop, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Roof Installation",
    slug: "roof-installation",
    description:
      "Expert installation of shingle and metal roofing systems with GAF System Plus 50-year transferrable warranties.",
    color: "text-primary",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    slug: "roof-repairs",
    description: "Emergency and routine roof repairs to prevent leaks and extend the lifespan of your roof.",
    color: "text-secondary",
  },
  {
    icon: Droplets,
    title: "Gutter Services",
    slug: "gutters",
    description: "Complete gutter installation, repair, and maintenance to protect your home from water damage.",
    color: "text-primary",
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    slug: "painting",
    description: "Professional interior and exterior painting to refresh and protect your property.",
    color: "text-secondary",
  },
  {
    icon: PanelTop,
    title: "House Siding",
    slug: "siding",
    description: "Quality siding installation and repair to enhance curb appeal and energy efficiency.",
    color: "text-primary",
  },
  {
    icon: Package,
    title: "Box Cutter Services",
    slug: "box-cutters",
    description: "Specialized box cutter services for all your roofing and construction needs.",
    color: "text-secondary",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Comprehensive Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From roof installations to painting and siding, we provide complete exterior solutions for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Link key={index} href={`/services/${service.slug}`} className="block">
                <Card className="glass-card border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="inline-flex p-4 rounded-2xl bg-background/50">
                        <Icon className={`h-8 w-8 ${service.color}`} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
