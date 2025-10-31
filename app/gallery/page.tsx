"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Loader2 } from "lucide-react"

interface GooglePhoto {
  photoReference: string
  width: number
  height: number
  url: string
  thumbnailUrl: string
}

export default function GalleryPage() {
  const [googlePhotos, setGooglePhotos] = useState<GooglePhoto[]>([])
  const [isLoadingPhotos, setIsLoadingPhotos] = useState(true)

  useEffect(() => {
    async function fetchGooglePhotos() {
      try {
        const response = await fetch("/api/google-reviews")
        if (response.ok) {
          const data = await response.json()
          if (data.photos && data.photos.length > 0) {
            setGooglePhotos(data.photos)
          }
        }
      } catch (error) {
        console.error("Error fetching Google photos:", error)
      } finally {
        setIsLoadingPhotos(false)
      }
    }

    fetchGooglePhotos()
  }, [])

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
          {isLoadingPhotos ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : googlePhotos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No photos available at this time.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {googlePhotos.map((photo, index) => (
                <div
                  key={photo.photoReference || index}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={photo.thumbnailUrl}
                    alt={`Stuart Conrad Roofing project ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
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
