import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"
import { ProtectedEmail } from "@/components/protected-email"
import { ENCODED_EMAIL } from "@/lib/email-utils"
import { GAFBadge } from "@/components/gaf-badge"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="glass border-t mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/SCRlogo.JPG"
                alt="Stuart Conrad Roofing"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-muted-foreground mb-4">
              Over 30 years of excellence serving the Tri-State area with quality roofing and home improvement
              solutions.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <GAFBadge size="sm" />
              <span className="text-xs text-muted-foreground">GAF Master Elite Certified</span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/StuartConradRoofingServicesLlc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/stuartconradroofing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-foreground transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/roof-installation"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Roof Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/roof-repairs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Roof Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/services/gutters"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Gutter Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/painting"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Painting
                </Link>
              </li>
              <li>
                <Link href="/services/siding" className="text-muted-foreground hover:text-foreground transition-colors">
                  House Siding
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+15133800592" className="text-muted-foreground hover:text-foreground transition-colors">
                    (513) 380-0592
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <ProtectedEmail
                    encoded={ENCODED_EMAIL}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  />
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-muted-foreground">
                  13 W Main St, Amelia, OH 45102
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Stuart Conrad Roofing Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
