import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home, Search, AlertCircle, ArrowRight, ImageIcon } from "lucide-react"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "404 - Page Not Found | Stuart Conrad Roofing Services",
  description: "The page you're looking for doesn't exist. Return to our homepage or explore our roofing, siding, gutter, and painting services.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* 404 Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="404 Error"
            fill
            className="object-cover opacity-10"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 mb-6">
                <AlertCircle className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-primary">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              We're sorry, but the page you're looking for doesn't exist or has been moved. 
              Don't worry—our website is still here and working perfectly! Only this specific page is missing.
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Let's Get You Back on Track
              </h3>
              <p className="text-lg text-muted-foreground">
                Here are some helpful links to get you where you need to go:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link 
                href="/" 
                className="group p-6 rounded-lg border bg-card hover:bg-accent transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Home className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Home Page</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Return to our homepage and explore our services
                    </p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Go to Home <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link 
                href="/services" 
                className="group p-6 rounded-lg border bg-card hover:bg-accent transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Our Services</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Browse our roofing, siding, gutter, and painting services
                    </p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Services <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link 
                href="/contact" 
                className="group p-6 rounded-lg border bg-card hover:bg-accent transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <AlertCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Get in touch or report this broken link
                    </p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Contact <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>

              <Link 
                href="/gallery" 
                className="group p-6 rounded-lg border bg-card hover:bg-accent transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <ImageIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">Gallery</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      View our completed projects and work portfolio
                    </p>
                    <span className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Gallery <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Return to Homepage
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  Report Broken Link
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
