"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import Head from "next/head"
import { ProtectedEmail } from "@/components/protected-email"
import { ENCODED_EMAIL } from "@/lib/email-utils"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitStatus("success")

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      location: "",
      service: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <Head>
        <title>Contact Us - Stuart Conrad Roofing | Free Quotes Available</title>
        <meta
          name="description"
          content="Contact Stuart Conrad Roofing Services for a free quote. Serving Greater Cincinnati, Northern Kentucky, and Eastern Indiana. Call (513) 380-0592 or request a quote online."
        />
      </Head>
      <main className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/modern-house-with-beautiful-roof-aerial-view-blue-.jpg"
              alt="Contact Us"
              fill
              className="object-cover opacity-20"
              priority
              sizes="100vw"
            />
          </div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
                Get Your <span className="text-primary">Free Quote</span>
              </h1>
              <p className="text-xl text-muted-foreground text-balance">
                Contact us today for a free, no-obligation quote on your roofing or home improvement project
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="glass p-6">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a
                          href="tel:+15133800592"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          (513) 380-0592
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">Call for immediate assistance</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <ProtectedEmail
                          encoded={ENCODED_EMAIL}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        />
                        <p className="text-sm text-muted-foreground mt-1">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Service Areas</h4>
                        <p className="text-muted-foreground">Greater Cincinnati, OH</p>
                        <p className="text-muted-foreground">Northern Kentucky</p>
                        <p className="text-muted-foreground">Eastern Indiana</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-muted-foreground">Monday - Friday: 7am - 6pm</p>
                        <p className="text-muted-foreground">Saturday: 8am - 4pm</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="glass p-6">
                  <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>30+ years of experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>GAF Master Elite certified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Licensed & insured in OH, KY, IN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Free quotes & inspections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>Lifetime warranties available</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Quote Request Form */}
              <div className="lg:col-span-2">
                <Card className="glass p-8">
                  <h3 className="text-2xl font-bold mb-6">Request a Free Quote</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Smith"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(513) 380-0592"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Location *</Label>
                        <Select value={formData.location} onValueChange={(value) => handleChange("location", value)}>
                          <SelectTrigger id="location">
                            <SelectValue placeholder="Select your location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cincinnati">Greater Cincinnati, OH</SelectItem>
                            <SelectItem value="northern-ky">Northern Kentucky</SelectItem>
                            <SelectItem value="eastern-in">Eastern Indiana</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Needed *</Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="roof-installation">Roof Installation</SelectItem>
                          <SelectItem value="roof-repair">Roof Repair</SelectItem>
                          <SelectItem value="gutters">Gutter Services</SelectItem>
                          <SelectItem value="painting">Painting</SelectItem>
                          <SelectItem value="siding">House Siding</SelectItem>
                          <SelectItem value="box-cutters">Box Cutter Services</SelectItem>
                          <SelectItem value="other">Other / Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Project Details</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project... What type of work do you need? When would you like to start? Any specific concerns?"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-primary/10 text-primary rounded-lg">
                        Thank you for your request! We'll contact you within 24 hours to schedule your free quote.
                      </div>
                    )}

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Request Free Quote"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by Stuart Conrad Roofing Services regarding
                      your quote request.
                    </p>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Service Banner */}
        <section className="py-12 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass p-8 rounded-2xl text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need Emergency Service?</h3>
              <p className="text-muted-foreground mb-6">
                We offer 24/7 emergency roofing services for urgent situations like storm damage, leaks, and structural
                issues.
              </p>
              <Button size="lg" asChild>
                <a href="tel:+15133800592">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: (513) 380-0592
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
