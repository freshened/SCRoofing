import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Roof Installation | GAF Certified - Stuart Conrad",
  description:
    "Professional roof installation services in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. GAF certified contractors with lifetime warranties. Free quotes available.",
  alternates: {
    canonical: "https://stuartconradroofing.com/services/roof-installation",
  },
}

export default function RoofInstallationPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Roof Installation"
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
              Professional <span className="text-primary">Roof Installation</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Expert roof replacement with premium materials and GAF certified installation
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Roof Replacement Solutions</h2>
              <p className="text-lg text-muted-foreground mb-6">
                When it's time for a new roof, trust Stuart Conrad Roofing Services to deliver exceptional quality and
                craftsmanship. As GAF certified contractors, we have access to the industry's best materials and can
                offer extended warranties that protect your investment.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced team handles every aspect of your roof installation, from initial inspection and
                material selection to final cleanup. We work efficiently to minimize disruption to your daily life while
                ensuring every detail meets our high standards.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Installation Services?</h3>
              <ul className="space-y-4">
                {[
                  "GAF Master Elite Certified Contractors",
                  "Lifetime Material Warranties Available",
                  "Expert Installation by Trained Professionals",
                  "Complete Tear-Off and Disposal Included",
                  "Thorough Deck Inspection and Repair",
                  "Premium Underlayment and Ventilation",
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

      {/* Roofing Materials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Premium Roofing Materials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer a wide selection of high-quality roofing materials to suit your style and budget
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Asphalt Shingles",
                description:
                  "The most popular roofing choice, offering excellent value, durability, and a wide range of colors and styles.",
                features: ["30-50 Year Lifespan", "Energy Efficient Options", "Wide Color Selection", "Affordable"],
              },
              {
                title: "Metal Roofing",
                description:
                  "Long-lasting and energy-efficient, metal roofs provide superior protection and can last 50+ years.",
                features: ["50+ Year Lifespan", "Fire Resistant", "Energy Efficient", "Low Maintenance"],
              },
              {
                title: "Flat Roofing",
                description:
                  "Specialized systems for low-slope and flat roofs, including TPO, EPDM, and modified bitumen.",
                features: ["Commercial Grade", "Waterproof Membrane", "Energy Efficient", "Durable"],
              },
            ].map((material, index) => (
              <Card key={index} className="glass p-6">
                <h3 className="text-xl font-bold mb-3">{material.title}</h3>
                <p className="text-muted-foreground mb-4">{material.description}</p>
                <ul className="space-y-2">
                  {material.features.map((feature, idx) => (
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

      {/* Installation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Installation Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A systematic approach ensuring quality results every time
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Inspection & Quote",
                description: "Thorough roof inspection and detailed written estimate",
              },
              {
                step: "02",
                title: "Material Selection",
                description: "Choose from premium materials that fit your style and budget",
              },
              {
                step: "03",
                title: "Professional Installation",
                description: "Expert installation by certified professionals",
              },
              {
                step: "04",
                title: "Final Inspection",
                description: "Complete cleanup and final walkthrough",
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

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Shield, label: "GAF Certified", value: "Master Elite" },
              { icon: Award, label: "Experience", value: "30+ Years" },
              { icon: CheckCircle2, label: "Warranty", value: "Lifetime Options" },
              { icon: Clock, label: "Response Time", value: "Same Day" },
            ].map((item, index) => (
              <div key={index} className="glass p-6 rounded-2xl">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a New Roof?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation quote today. We'll inspect your roof and provide a detailed estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Free Inspection</Link>
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
