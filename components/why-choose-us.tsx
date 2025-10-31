import { CheckCircle2 } from "lucide-react"

const benefits = [
  "GAF-certified roofer with System Plus warranties",
  "GenFlex certified for quality assurance",
  "Expert hand-nailing of shingles",
  "Free quotes within 48 business hours",
  "Meticulous attention to detail",
  "Safe and secure roofing work",
  "Price matching on reasonable quotes",
  "Helpful insurance claim support",
  "Fully licensed and insured",
  "Service available within two weeks",
  "Workmanship warranties available",
  "30+ years of experience",
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Why Choose Stuart Conrad Roofing?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              We bring over three decades of expertise and a customer-centric approach to every project.
            </p>
          </div>

          <div className="glass rounded-3xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
