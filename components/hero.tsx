import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award, Clock, Phone, FileText } from "lucide-react"
import Link from "next/link"
import { BusinessHoursStatus } from "@/components/business-hours-status"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
          alt="Professional roofing"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2.5 border border-white/20">
              <Award className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">GAF Certified • 30+ Years Excellence</span>
            </div>
            <BusinessHoursStatus />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-tight">
            Premium Roofing
            <br />
            <span className="text-primary">Built to Last</span>
          </h1>

          <p className="text-xl sm:text-2xl text-foreground mb-10 max-w-3xl mx-auto text-pretty leading-relaxed font-bold" style={{
            WebkitTextStroke: '0.1px black',
            color: 'inherit'
          }}>
            Expert roof installation, repairs & home services across the Greater Cincinnati Tri-State area
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="https://app.roofr.com/instant-estimator/dd1a61ee-814b-4a77-a1f8-4ad046f32fb7/StuartConradRoofing" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="text-lg px-10 py-7 gap-2 rounded-full shadow-xl hover:shadow-2xl transition-all glass-card bg-primary/90 backdrop-blur-md border-2 border-white/20 hover:bg-primary"
              >
                Instant Estimator
                <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="text-lg px-10 py-7 gap-2 rounded-full shadow-xl hover:shadow-2xl transition-all glass-card bg-primary/90 backdrop-blur-md border-2 border-white/20 hover:bg-primary"
              >
                <FileText className="h-5 w-5" />
                Request a Quote
              </Button>
            </Link>
            <Link href="tel:+15133800592">
              <Button
                size="lg"
                className="text-lg px-10 py-7 gap-2 rounded-full shadow-xl hover:shadow-2xl transition-all glass-card bg-primary/90 backdrop-blur-md border-2 border-white/20 hover:bg-primary"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </Button>
            </Link>
          </div>

          <div className="glass rounded-full px-8 py-6 inline-flex flex-wrap items-center justify-center gap-6 sm:gap-8 shadow-xl">
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground text-sm sm:text-base">Licensed & Insured</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-foreground/20" />
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-secondary" />
              <span className="font-semibold text-foreground text-sm sm:text-base">50-year Transferrable Warranties </span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-foreground/20" />
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground text-sm sm:text-base">Same-Day Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
