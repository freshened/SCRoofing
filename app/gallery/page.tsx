import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Project Gallery - Stuart Conrad Roofing | Our Completed Projects",
  description:
    "View our completed roofing, siding, gutter, and painting projects in Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Quality workmanship showcased.",
  openGraph: {
    title: "Project Gallery - Stuart Conrad Roofing | Our Completed Projects",
    description:
      "See the quality of our work through photos of completed roofing and home improvement projects.",
    url: "https://stuartconradroofing.com/gallery",
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
}

const galleryImages = [
  {
    src: "/roof1.jpg",
    alt: "New asphalt shingle roof installation",
  },
  {
    src: "/roof2.png",
    alt: "Modern metal roof installation",
  },
  {
    src: "/roof3.jpg",
    alt: "Roof repair after storm damage",
  },
  {
    src: "/roof4.png",
    alt: "Beautiful roof aerial view",
  },
  {
    src: "/roof8.png",
    alt: "New vinyl siding installation",
  },
  {
    src: "/roof6.png",
    alt: "Fiber cement siding installation",
  },
  {
    src: "/roof7.png",
    alt: "Seamless gutter installation",
  },
  {
    src: "/roof5.png",
    alt: "Gutter guards installation",
  },
]

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
            alt="Project Gallery"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Our <span className="text-primary">Project Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Browse through our collection of completed roofing, siding, gutter, and painting projects
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us transform your home with the same quality and care shown in our gallery. Get your free quote today.
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

      <Footer />
    </main>
  )
}
