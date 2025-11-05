"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#cursos", label: "Cursos" },
    { href: "#docentes", label: "Docentes" },
    { href: "#noticias", label: "Notícias" },
    { href: "#contactos", label: "Contactos" },
  ]

  return (
    <>
      <div className="bg-primary text-white py-2 hidden lg:block lg:top-10">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+244923456789" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+244 923 456 789</span>
            </a>
            <a href="mailto:info@girassol.ao" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              <span>info@girassol.ao</span>
            </a>
          </div>
          <div className="text-white/80">
            <span>Luanda, Angola</span>
          </div>
        </div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          "lg:top-10" 
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link href="/" className="flex items-center border:rounded gap-3 group">
              <div className="relative w-14 h-14 lg:w-24 lg:h-24 transition-transform group-hover:scale-105">
                <Image src="/logo.png" alt="Girassol Logo" fill className="object-contain" />
              </div>
              <div className="hidden md:block">
                <span className="text-accent font-semibold text-sm lg:text-base">Complexo Escolar Girassol</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <div></div>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-accent transition-colors font-medium text-base relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
                </Link>
              ))}
              <Button className="bg-accent text-primary hover:bg-accent/90 font-semibold shadow-glow">
                Área do Estudante
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="lg:hidden pb-6 animate-in slide-in-from-top duration-300">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-3 text-white/90 hover:text-accent hover:pl-2 transition-all font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-accent text-primary hover:bg-accent/90 font-semibold">
                Área do Estudante
              </Button>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
