import Script from "next/script"

interface SchemaMarkupProps {
  type: "organization" | "localBusiness" | "service" | "breadcrumb"
  data?: any
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const getSchema = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "Stuart Conrad Roofing Services",
          image: "https://scroofin.vercel.app/logo.png",
          "@id": "https://scroofin.vercel.app",
          url: "https://scroofin.vercel.app",
          telephone: "+15133800592",
          email: "info@stuartconradroofing.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cincinnati",
            addressRegion: "OH",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 39.1031,
            longitude: -84.512,
          },
          areaServed: [
            {
              "@type": "City",
              name: "Cincinnati",
              "@id": "https://en.wikipedia.org/wiki/Cincinnati",
            },
            {
              "@type": "State",
              name: "Ohio",
            },
            {
              "@type": "State",
              name: "Kentucky",
            },
            {
              "@type": "State",
              name: "Indiana",
            },
          ],
          priceRange: "$$",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "18:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: "Saturday",
              opens: "08:00",
              closes: "16:00",
            },
          ],
          sameAs: ["https://www.facebook.com/stuartconradroofing", "https://www.instagram.com/stuartconradroofing"],
        }

      case "localBusiness":
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://scroofin.vercel.app",
          name: "Stuart Conrad Roofing Services",
          image: "https://scroofin.vercel.app/logo.png",
          telephone: "+15133800592",
          email: "info@stuartconradroofing.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: data?.city || "Cincinnati",
            addressRegion: data?.state || "OH",
            addressCountry: "US",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: "150",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Roofing Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Roof Installation",
                  description: "Professional roof installation services",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Roof Repair",
                  description: "Expert roof repair and maintenance",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Gutter Services",
                  description: "Gutter installation, repair, and cleaning",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Siding Installation",
                  description: "House siding installation and repair",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Painting Services",
                  description: "Interior and exterior painting",
                },
              },
            ],
          },
        }

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: data?.serviceType || "Roofing",
          provider: {
            "@type": "RoofingContractor",
            name: "Stuart Conrad Roofing Services",
            telephone: "+15133800592",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Cincinnati",
              addressRegion: "OH",
              addressCountry: "US",
            },
          },
          areaServed: {
            "@type": "State",
            name: data?.area || "Ohio",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: data?.serviceName || "Roofing Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: data?.serviceName || "Roofing",
                  description: data?.description || "Professional roofing services",
                },
              },
            ],
          },
        }

      case "breadcrumb":
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: data?.items || [],
        }

      default:
        return null
    }
  }

  const schema = getSchema()

  if (!schema) return null

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
