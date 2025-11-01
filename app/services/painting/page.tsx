import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, Paintbrush, Palette, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Painting Services - Stuart Conrad Roofing | Interior & Exterior Painting",
  description:
    "Professional interior and exterior painting services in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Quality paints, expert application, beautiful results.",
}

export default function PaintingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Painting Services"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Professional <span className="text-primary">Painting Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance mb-8">
              Transform your home with expert interior and exterior painting
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Painting for Every Surface</h2>
              <p className="text-lg text-muted-foreground mb-6">
                A fresh coat of paint can completely transform your home's appearance and protect it from the elements.
                Stuart Conrad Roofing Services offers professional painting services for both interior and exterior
                projects, using premium paints and expert techniques.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our experienced painters take pride in their attention to detail, from thorough surface preparation to
                the final coat. We work efficiently and cleanly, respecting your home and minimizing disruption to your
                daily routine.
              </p>
            </div>
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Our Painting Services</h3>
              <ul className="space-y-4">
                {[
                  "Exterior House Painting",
                  "Interior Room Painting",
                  "Deck and Fence Staining",
                  "Trim and Door Painting",
                  "Cabinet Refinishing",
                  "Color Consultation",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Painting Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From single rooms to entire homes, we handle projects of all sizes
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Paintbrush,
                title: "Exterior Painting",
                description:
                  "Protect and beautify your home's exterior with weather-resistant paints and expert application.",
                features: [
                  "Complete surface preparation",
                  "Power washing included",
                  "Premium exterior paints",
                  "Trim and accent painting",
                  "Weather-resistant finishes",
                  "Multi-year warranties",
                ],
              },
              {
                icon: Palette,
                title: "Interior Painting",
                description:
                  "Transform your living spaces with beautiful colors and flawless finishes that last for years.",
                features: [
                  "All rooms and spaces",
                  "Ceiling painting",
                  "Trim and baseboard painting",
                  "Texture matching",
                  "Low-VOC paint options",
                  "Furniture protection",
                ],
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

      {/* Color Consultation */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass p-12 rounded-2xl max-w-4xl mx-auto text-center">
            <Palette className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Color Consultation</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Choosing the right colors can be overwhelming. Our experienced team offers complimentary color
              consultation to help you select the perfect palette for your home. We'll consider your style preferences,
              lighting conditions, and existing decor to create a cohesive look you'll love.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                {
                  title: "Expert Guidance",
                  description: "Professional advice on color selection and combinations",
                },
                {
                  title: "Sample Testing",
                  description: "Test colors on your walls before committing",
                },
                {
                  title: "Trend Awareness",
                  description: "Current color trends and timeless classics",
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

      {/* Painting Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Painting Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meticulous preparation and application for lasting results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Discuss your vision and color preferences",
              },
              {
                step: "02",
                title: "Preparation",
                description: "Thorough cleaning, sanding, and priming",
              },
              {
                step: "03",
                title: "Protection",
                description: "Cover and protect furniture and floors",
              },
              {
                step: "04",
                title: "Application",
                description: "Expert painting with premium materials",
              },
              {
                step: "05",
                title: "Inspection",
                description: "Final walkthrough and touch-ups",
              },
            ].map((item, index) => (
              <Card key={index} className="glass p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Painting Services?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Quality Materials",
                description: "Premium paints from trusted brands",
              },
              {
                icon: CheckCircle2,
                title: "Expert Application",
                description: "Skilled painters with years of experience",
              },
              {
                icon: Shield,
                title: "Clean Worksite",
                description: "Thorough cleanup and protection",
              },
              {
                icon: CheckCircle2,
                title: "Satisfaction Guaranteed",
                description: "We stand behind our work",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get your free painting estimate today. We'll provide a detailed quote and color consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Get Free Estimate</Link>
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
