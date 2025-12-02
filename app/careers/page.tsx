"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, FileText } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  })
  const [resume, setResume] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("city", formData.city)
      formDataToSend.append("message", formData.message)
      if (resume) {
        formDataToSend.append("resume", resume)
      }

      const response = await fetch("/api/careers", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        message: "",
      })
      setResume(null)

      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Error submitting application:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB")
        return
      }
      if (!file.type.includes("pdf") && !file.type.includes("doc") && !file.type.includes("docx")) {
        alert("Please upload a PDF, DOC, or DOCX file")
        return
      }
      setResume(file)
    }
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/professional-roofing-team-working-on-house.jpg"
            alt="Join Our Team"
            fill
            className="object-cover opacity-20"
            loading="lazy"
            sizes="100vw"
            quality={50}
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
              Joining the team at Stuart Conrad Roofing Services means becoming part of a family dedicated to quality and integrity. We pride ourselves on transforming homes with top-notch roofing, siding, and gutter solutions that stand the test of time. As we work together, you'll not only enhance your skills but also contribute to a legacy of excellence and customer satisfaction. If you're passionate about making roofs sturdy and homes beautiful, we'd love to have you on board as we build something great together!
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="glass p-8">
              <h2 className="text-2xl font-bold mb-6">Application Form</h2>
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
                    <Label htmlFor="city">City You Reside In *</Label>
                    <Input
                      id="city"
                      placeholder="Cincinnati"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about yourself, your experience, and why you're interested in joining our team..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Resume (PDF, DOC, or DOCX) *</Label>
                  <div className="relative">
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <Label
                      htmlFor="resume"
                      className="flex items-center gap-3 p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-foreground/5 transition-colors"
                    >
                      {resume ? (
                        <>
                          <FileText className="h-5 w-5 text-primary" />
                          <span className="flex-1 text-sm">{resume.name}</span>
                          <span className="text-xs text-muted-foreground">{(resume.size / 1024).toFixed(0)} KB</span>
                        </>
                      ) : (
                        <>
                          <Upload className="h-5 w-5 text-muted-foreground" />
                          <span className="text-muted-foreground">Click to upload resume</span>
                        </>
                      )}
                    </Label>
                  </div>
                  <p className="text-xs text-muted-foreground">Maximum file size: 5MB</p>
                </div>

                {submitStatus === "success" && (
                  <div className="p-4 bg-primary/10 text-primary rounded-lg">
                    Thank you for your application! We'll review your submission and get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
                    There was an error submitting your application. Please try again or contact us directly.
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted by Stuart Conrad Roofing Services regarding your
                  application.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

