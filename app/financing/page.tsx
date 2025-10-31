import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, CreditCard, Shield, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Financing Options - Stuart Conrad Roofing Services | GreenSky Financing",
  description:
    "Flexible financing solutions for your roofing needs. Stuart Conrad Roofing Services offers GreenSky financing options to help manage the cost of new roofs, repairs, and home improvements in Greater Cincinnati, OH.",
  openGraph: {
    title: "Financing Options - Stuart Conrad Roofing Services",
    description:
      "Flexible financing solutions through GreenSky for roofing projects. Get the quality roof you need with payment options that fit your budget.",
    url: "https://stuartconradroofing.com/financing",
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
  twitter: {
    card: "summary_large_image",
    title: "Financing Options - Stuart Conrad Roofing Services",
    description: "Flexible financing solutions for your roofing needs through GreenSky.",
  },
}

export default function FinancingPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Financing"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Financing
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-balance">
              Stuart Conrad <span className="text-primary">Roofing Services</span>
            </h2>
            <p className="text-2xl text-muted-foreground text-balance">
              Financing Solutions for Your Roofing Needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="glass p-8 md:p-12 rounded-2xl">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                  Stuart Conrad Roofing Services understands that a new roof or significant repairs can be a sizable
                  investment. That's why we offer flexible financing options through GreenSky to help you manage the
                  cost. Serving the Greater Cincinnati, OH area, we're committed to providing top-tier roofing services
                  with financing solutions that fit your budget. Whether you're dealing with storm damage, an aging roof,
                  or planning a new construction project, our financing options ensure you don't have to compromise on
                  quality. Call or text us today to discuss your specific needs and learn more about our financing
                  options.
                </p>

                <div className="text-center mt-12">
                  <Button
                    size="lg"
                    className="text-lg px-10 py-7 gap-2 rounded-full shadow-xl hover:shadow-2xl transition-all"
                    asChild
                  >
                    <a
                      href="https://projects.greensky.com/merchantloanapplication?apptype=short&merchant=81098582&dealerplan=9998&channel=External-Button-03"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply with GreenSky Now
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Financing Options?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Make quality roofing accessible with flexible payment solutions
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: CreditCard,
                title: "Flexible Payment Options",
                description: "Choose payment plans that work with your budget and timeline",
              },
              {
                icon: Shield,
                title: "Secure Application",
                description: "Safe and secure application process through GreenSky's trusted platform",
              },
              {
                icon: CheckCircle2,
                title: "Quick Approval",
                description: "Get pre-approved quickly so you can start your project sooner",
              },
            ].map((item, index) => (
              <Card key={index} className="glass p-6 text-center hover:scale-105 transition-transform">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
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
            Apply for financing today or contact us to discuss your roofing project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a
                href="https://projects.greensky.com/merchantloanapplication?apptype=short&merchant=81098582&dealerplan=9998&channel=External-Button-03"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply with GreenSky Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

