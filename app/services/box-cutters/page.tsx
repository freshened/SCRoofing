import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Package, Wrench, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Box Cutter Services | Install & Maintenance - Stuart Conrad",
  description:
    "Professional box cutter installation and maintenance services in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Commercial and residential solutions.",
  alternates: {
    canonical: "https://scroofin.vercel.app/services/box-cutters",
  },
}

export default function BoxCuttersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Box Cutter Services"
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
              Professional <span className="text-primary">Box Cutter Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Expert installation, maintenance, and repair for commercial and residential applications
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Box Cutter Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Stuart Conrad Roofing Services provides comprehensive box cutter installation and maintenance services
                for both commercial and residential properties. Our experienced team understands the unique requirements
                of box cutter systems and delivers reliable, professional service.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you need new installation, routine maintenance, or emergency repairs, we have the expertise and
                equipment to handle projects of any size. We work efficiently to minimize disruption while ensuring
                quality results.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Our Box Cutter Services</h3>
              <ul className="space-y-4">
                {[
                  "New Box Cutter Installation",
                  "System Maintenance",
                  "Repair Services",
                  "Custom Solutions",
                  "Emergency Service Available",
                  "Commercial & Residential",
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

      {/* Service Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Box Cutter Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From installation to ongoing maintenance, we handle it all
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Package,
                title: "Installation",
                description:
                  "Professional installation of new box cutter systems with proper setup and configuration for optimal performance.",
                features: ["Site Assessment", "Custom Configuration", "Quality Materials", "Expert Installation"],
              },
              {
                icon: Wrench,
                title: "Maintenance",
                description:
                  "Regular maintenance services to keep your box cutter systems running smoothly and prevent costly breakdowns.",
                features: [
                  "Routine Inspections",
                  "Preventive Maintenance",
                  "Performance Optimization",
                  "Extended Lifespan",
                ],
              },
              {
                icon: Shield,
                title: "Repairs",
                description:
                  "Fast, reliable repair services to get your box cutter systems back up and running with minimal downtime.",
                features: ["Quick Response", "Expert Diagnosis", "Quality Parts", "Warranty Available"],
              },
            ].map((service, index) => (
              <Card key={index} className="glass p-8">
                <service.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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

      {/* Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Box cutter services for various property types
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Commercial Properties",
                description:
                  "Comprehensive box cutter solutions for warehouses, retail spaces, office buildings, and industrial facilities.",
                features: [
                  "Large-scale installations",
                  "Scheduled maintenance programs",
                  "Minimal business disruption",
                  "Emergency service available",
                ],
              },
              {
                title: "Residential Properties",
                description:
                  "Professional box cutter services for homes, apartments, and residential complexes with attention to detail.",
                features: [
                  "Custom home solutions",
                  "Flexible scheduling",
                  "Clean and efficient work",
                  "Homeowner education",
                ],
              },
            ].map((app, index) => (
              <Card key={index} className="glass p-8">
                <h3 className="text-2xl font-bold mb-4">{app.title}</h3>
                <p className="text-muted-foreground mb-6">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Box Cutter Services?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Experienced Team",
                description: "Skilled professionals with specialized training",
              },
              {
                icon: CheckCircle2,
                title: "Quality Work",
                description: "Attention to detail and commitment to excellence",
              },
              {
                icon: Wrench,
                title: "Reliable Service",
                description: "On-time service and dependable results",
              },
              {
                icon: Package,
                title: "Custom Solutions",
                description: "Tailored services to meet your specific needs",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Box Cutter Services?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote. We're ready to help with all your box cutter needs.
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
