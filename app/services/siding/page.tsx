import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, PanelTop, Shield, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "House Siding | Vinyl & Fiber Cement - Stuart Conrad",
  description:
    "Professional house siding installation and repair in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Vinyl, fiber cement, and more. Boost curb appeal and energy efficiency.",
  alternates: {
    canonical: "https://scroofin.vercel.app/services/siding",
  },
}

export default function SidingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="House Siding"
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
              Professional <span className="text-primary">House Siding</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Enhance your home's beauty, protection, and energy efficiency with quality siding
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Home's Exterior</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your home's siding is more than just aesthetics—it's your first line of defense against the elements.
                Quality siding protects your home from weather damage, improves energy efficiency, and dramatically
                enhances curb appeal and property value.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Stuart Conrad Roofing Services offers professional siding installation and repair services using premium
                materials from trusted manufacturers. Whether you're building new, replacing old siding, or repairing
                damage, we have the expertise to deliver exceptional results.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Our Siding Services</h3>
              <ul className="space-y-4">
                {[
                  "New Siding Installation",
                  "Siding Replacement",
                  "Siding Repair",
                  "Trim and Soffit Installation",
                  "Fascia Repair and Replacement",
                  "Insulated Siding Options",
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

      {/* Siding Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siding Materials We Install</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from a variety of premium siding materials to match your style and budget
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vinyl Siding",
                description:
                  "The most popular choice for its durability, low maintenance, and affordability. Available in countless colors and styles.",
                features: ["Low Maintenance", "Affordable", "Wide Color Selection", "Durable & Long-lasting"],
              },
              {
                title: "Fiber Cement",
                description:
                  "Premium option that mimics wood without the maintenance. Extremely durable and fire-resistant.",
                features: ["Fire Resistant", "Pest Proof", "Minimal Maintenance", "50+ Year Lifespan"],
              },
              {
                title: "Wood Siding",
                description:
                  "Classic beauty and natural appeal. Perfect for traditional and historic homes seeking authentic character.",
                features: ["Natural Beauty", "Customizable", "Eco-Friendly", "Timeless Appeal"],
              },
              {
                title: "Engineered Wood",
                description:
                  "Combines the look of real wood with enhanced durability and resistance to moisture and pests.",
                features: ["Wood Appearance", "More Durable", "Moisture Resistant", "Cost Effective"],
              },
              {
                title: "Metal Siding",
                description:
                  "Modern, sleek appearance with exceptional durability. Low maintenance and energy efficient.",
                features: ["Modern Look", "Fire Resistant", "Low Maintenance", "Energy Efficient"],
              },
              {
                title: "Insulated Siding",
                description:
                  "Enhanced energy efficiency with built-in insulation. Reduces energy costs and improves comfort.",
                features: ["Energy Savings", "Noise Reduction", "Added Durability", "Comfort Improvement"],
              },
            ].map((type, index) => (
              <Card key={index} className="glass p-6">
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{type.description}</p>
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

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of New Siding</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Invest in your home's protection, efficiency, and value
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Weather Protection",
                description: "Shield your home from rain, wind, and extreme temperatures",
              },
              {
                icon: Zap,
                title: "Energy Efficiency",
                description: "Reduce heating and cooling costs with insulated options",
              },
              {
                icon: PanelTop,
                title: "Curb Appeal",
                description: "Dramatically improve your home's appearance and value",
              },
              {
                icon: CheckCircle2,
                title: "Low Maintenance",
                description: "Modern siding requires minimal upkeep compared to paint",
              },
            ].map((benefit, index) => (
              <Card key={index} className="glass p-6 text-center">
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Installation Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional installation for lasting performance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss materials, colors, and project scope",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Remove old siding and inspect structure",
              },
              {
                step: "03",
                title: "Installation",
                description: "Expert installation with attention to detail",
              },
              {
                step: "04",
                title: "Finishing",
                description: "Trim, soffit, and final inspection",
              },
            ].map((item, index) => (
              <Card key={index} className="glass p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Home's Exterior?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free siding consultation and quote today. We'll help you choose the perfect siding for your home.
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
