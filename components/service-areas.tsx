import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const areas = [
  {
    region: "Greater Cincinnati, OH",
    description: "Serving all Cincinnati neighborhoods and surrounding areas",
  },
  {
    region: "Northern Kentucky",
    description: "Complete coverage across Northern Kentucky communities",
  },
  {
    region: "Eastern Indiana",
    description: "Professional service throughout Eastern Indiana",
  },
]

export function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Serving the Tri-State Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Proudly providing expert roofing services across Greater Cincinnati and surrounding regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areas.map((area, index) => (
            <Card key={index} className="glass-card border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{area.region}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
