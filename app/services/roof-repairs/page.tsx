import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, AlertTriangle, Zap, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Roof Repair Services - Stuart Conrad Roofing | Emergency Repairs Available",
  description:
    "Fast, reliable roof repair services in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Emergency repairs, leak fixes, storm damage restoration. Call today!",
}

export default function RoofRepairsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Roof Repairs"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Fast & Reliable <span className="text-primary">Roof Repairs</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Emergency repairs available to protect your home from further damage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Request Emergency Repair</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Schedule Inspection</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Roof Repair Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Don't let a small roof problem turn into a major disaster. Our experienced team provides fast,
                professional roof repair services to address leaks, storm damage, and general wear before they cause
                serious damage to your home.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                We understand that roof emergencies can happen at any time. That's why we offer prompt response times
                and emergency repair services to protect your home and belongings from water damage.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Common Roof Repairs We Handle</h3>
              <ul className="space-y-4">
                {[
                  "Leak Detection and Repair",
                  "Storm Damage Restoration",
                  "Missing or Damaged Shingles",
                  "Flashing Repairs",
                  "Ventilation Issues",
                  "Gutter and Downspout Repairs",
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

      {/* Signs You Need Repairs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Signs You Need Roof Repairs</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't wait until it's too late. Watch for these warning signs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: AlertTriangle,
                title: "Water Stains",
                description: "Ceiling or wall stains indicating water infiltration",
              },
              {
                icon: AlertTriangle,
                title: "Missing Shingles",
                description: "Gaps in your roof covering after storms or high winds",
              },
              {
                icon: AlertTriangle,
                title: "Granule Loss",
                description: "Excessive granules in gutters or bare spots on shingles",
              },
              {
                icon: AlertTriangle,
                title: "Sagging Areas",
                description: "Visible dips or sagging in the roof structure",
              },
              {
                icon: AlertTriangle,
                title: "Daylight Through Roof",
                description: "Light visible through roof boards in attic",
              },
              {
                icon: AlertTriangle,
                title: "High Energy Bills",
                description: "Increased heating/cooling costs due to poor insulation",
              },
            ].map((sign, index) => (
              <Card key={index} className="glass p-6">
                <sign.icon className="h-10 w-10 text-destructive mb-4" />
                <h3 className="text-lg font-semibold mb-2">{sign.title}</h3>
                <p className="text-sm text-muted-foreground">{sign.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Roof Repair Services</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Roof emergencies don't wait for business hours. We offer rapid response emergency repair services to
              protect your home from further damage. Our team is ready to provide temporary repairs and permanent
              solutions when you need them most.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Fast Response",
                  description: "Same-day emergency service available",
                },
                {
                  title: "Temporary Protection",
                  description: "Immediate tarping and water mitigation",
                },
                {
                  title: "Permanent Solutions",
                  description: "Complete repairs to restore your roof",
                },
              ].map((item, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Repair Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Systematic approach to identify and fix roof problems
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Inspection",
                description: "Thorough assessment to identify all issues",
              },
              {
                step: "02",
                title: "Diagnosis",
                description: "Determine root cause and extent of damage",
              },
              {
                step: "03",
                title: "Repair",
                description: "Professional repair using quality materials",
              },
              {
                step: "04",
                title: "Prevention",
                description: "Recommendations to prevent future problems",
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
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't Wait - Protect Your Home Today</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Small roof problems can quickly become major issues. Contact us today for a free inspection and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Request Emergency Repair</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Schedule Inspection</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
