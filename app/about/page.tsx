import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Award, Users, Clock, CheckCircle2, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "About Us - Stuart Conrad Roofing Services | 30+ Years Experience",
  description:
    "Learn about Stuart Conrad Roofing Services. Serving Greater Cincinnati, Northern Kentucky, and Eastern Indiana with over 30 years of roofing excellence. GAF Certified contractors.",
  openGraph: {
    title: "About Stuart Conrad Roofing Services | 30+ Years of Excellence",
    description:
      "GAF Master Elite certified roofing contractor with over 30 years serving the Tri-State area. Quality workmanship and exceptional service.",
    url: "https://stuartconradroofing.com/about",
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
    title: "About Stuart Conrad Roofing Services | 30+ Years of Excellence",
    description: "GAF Master Elite certified roofing contractor serving the Tri-State area for over 30 years.",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Stuart Conrad Roofing background"
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              About Stuart Conrad <span className="text-primary">Roofing Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Over 30 years of excellence serving the Tri-State area with quality roofing, siding, and home improvement
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded over three decades ago, Stuart Conrad Roofing Services has been a trusted name in the Greater
                  Cincinnati area, Northern Kentucky, and Eastern Indiana. What started as a small roofing company has
                  grown into a comprehensive home improvement service provider.
                </p>
                <p>
                  Our commitment to quality craftsmanship, honest pricing, and exceptional customer service has earned
                  us a reputation as one of the most reliable contractors in the Tri-State area. We treat every home as
                  if it were our own.
                </p>
                <p>
                  As a GAF Certified contractor, we maintain the highest standards in the industry, ensuring that every
                  project meets or exceeds manufacturer specifications and local building codes.
                </p>
              </div>
            </div>
            <div className="glass p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">State Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Stuart Conrad Roofing?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine decades of experience with modern techniques and materials
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "GAF Certified",
                description: "Factory-certified installers with access to the best warranties in the industry",
              },
              {
                icon: Award,
                title: "Quality Workmanship",
                description: "Every project is completed to the highest standards with attention to detail",
              },
              {
                icon: Users,
                title: "Experienced Team",
                description: "Skilled professionals with decades of combined experience",
              },
              {
                icon: Clock,
                title: "Timely Service",
                description: "We respect your time and complete projects on schedule",
              },
              {
                icon: CheckCircle2,
                title: "Licensed & Insured",
                description: "Fully licensed, bonded, and insured for your protection",
              },
              {
                icon: Star,
                title: "Customer Focused",
                description: "Your satisfaction is our top priority from start to finish",
              },
            ].map((item, index) => (
              <Card key={index} className="glass p-6 hover:scale-105 transition-transform">
                <item.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We partner with industry leaders to bring you the best products and services
            </p>
          </div>
          <div className="glass p-12 rounded-2xl max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">GAF Master Elite Contractor</h3>
                  <p className="text-sm text-muted-foreground">Top 3% of roofing contractors nationwide</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-8 w-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fully Licensed & Insured</h3>
                  <p className="text-sm text-muted-foreground">OH, KY, and IN state licenses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the difference that 30+ years of expertise makes. Get your free quote today.
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
    </main>
  )
}
