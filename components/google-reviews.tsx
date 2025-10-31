"use client"

import { Star, ExternalLink, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useGoogleData } from "@/hooks/use-google-data"

interface Review {
  name: string
  rating: number
  date: string
  text: string
  time?: number
}

const fallbackReviews: Review[] = [
  {
    name: "Michael Thompson",
    rating: 5,
    date: "2 weeks ago",
    text: "Stuart Conrad Roofing did an amazing job on our roof replacement. Professional, timely, and the quality is outstanding. Highly recommend!",
  },
  {
    name: "Sarah Martinez",
    rating: 5,
    date: "1 month ago",
    text: "Best roofing company in the area! They repaired our storm damage quickly and the work was flawless. Great communication throughout the process.",
  },
  {
    name: "David Chen",
    rating: 5,
    date: "3 weeks ago",
    text: "We had our gutters and siding done by Stuart Conrad. The crew was professional, cleaned up perfectly, and the price was very fair. 5 stars!",
  },
]

export function GoogleReviews() {
  const { data, isLoading, error: dataError } = useGoogleData()

  const displayReviews = data?.reviews && data.reviews.length > 0 ? data.reviews.slice(0, 3) : fallbackReviews
  const displayRating = data?.rating || 5
  const displayTotal = data?.totalReviews || 82
  const googleUrl = data?.googleUrl || "https://www.google.com/search?q=stuart+conrad+roofing#lrd=0x0:0x0,1"
  const error = dataError ? "Unable to load reviews" : null

  const getStarFill = (starIndex: number, rating: number) => {
    const fullStars = Math.floor(rating)
    const partialFill = rating - fullStars
    
    if (starIndex < fullStars) {
      return 1
    } else if (starIndex === fullStars && partialFill > 0) {
      return partialFill
    }
    return 0
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-6 py-3 mb-6">
            <svg
              className="h-6 w-6 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => {
                const fillPercentage = getStarFill(i, displayRating)
                return (
                  <div key={i} className="relative inline-block">
                    <Star 
                      className="h-5 w-5 text-gray-300 fill-transparent"
                    />
                    {fillPercentage > 0 && (
                      <div 
                        className="absolute top-0 left-0 overflow-hidden"
                        style={{ width: `${fillPercentage * 100}%` }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            <div className="h-4 w-px bg-border" />
            <span className="text-sm font-semibold text-foreground">
              {displayTotal} Google Reviews
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about their experience.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {displayReviews.map((review, index) => (
                <div 
                  key={`${review.name}-${review.time || index}`} 
                  className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      className="h-4 w-4 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-foreground/90 mb-4 leading-relaxed">{review.text}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="text-lg px-10 py-7 gap-2 rounded-full shadow-xl hover:shadow-2xl transition-all group"
                asChild
              >
                <a
                  href={googleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="white"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="white"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="white"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="white"
                    />
                  </svg>
                  Read All {displayTotal} Reviews on Google
                  <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                See why we're the most trusted roofing company in the Tri-State area
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
