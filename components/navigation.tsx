"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/locations", label: "Locations" },
    { href: "/financing", label: "Financing" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between h-20 gap-4">
          {/* Logo - Left */}
          <Link href="/" className="flex-shrink-0 flex items-center h-full py-2">
            <Image
              src="/SCRlogo.JPG"
              alt="Stuart Conrad Roofing"
              width={200}
              height={60}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="flex items-center justify-center gap-4 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground/80 hover:text-foreground transition-colors font-medium whitespace-nowrap text-sm",
                  pathname === link.href && "text-primary font-semibold",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Button - Right */}
          <div className="flex-shrink-0">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/contact">
                <Phone className="h-4 w-4" />
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Layout - logo centered */}
        <div className="lg:hidden flex items-center justify-center h-20 relative">
          {/* Mobile Menu Button - Left */}
          <button 
            className="absolute left-0 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-foreground/5 transition-colors" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Logo - Centered */}
          <Link href="/" className="flex-shrink-0 flex items-center h-full py-2">
            <Image
              src="/SCRlogo.JPG"
              alt="Stuart Conrad Roofing"
              width={200}
              height={60}
              className="h-full w-auto object-contain"
              priority
            />
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Sheet */}
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetContent side="right" className="w-[85vw] sm:w-[400px] p-0">
          <SheetHeader className="px-6 pt-8 pb-6 border-b">
            <SheetTitle className="text-left">
              <Image
                src="/SCRlogo.JPG"
                alt="Stuart Conrad Roofing"
                width={200}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col h-full">
            <nav className="flex-1 px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all font-medium min-h-[44px] flex items-center",
                    pathname === link.href && "text-primary font-semibold bg-primary/10",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="px-6 pb-6 pt-4 border-t space-y-3">
              <Button size="lg" className="w-full gap-2 min-h-[44px]" asChild>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Get Free Quote
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full min-h-[44px]" asChild>
                <Link href="tel:+15133800592" onClick={() => setIsMobileMenuOpen(false)}>
                  <Phone className="h-4 w-4" />
                  Call Now: (513) 380-0592
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
