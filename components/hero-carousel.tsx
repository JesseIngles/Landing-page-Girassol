"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Labor Omnia Vincit",
    subtitle: "O Trabalho Vence Tudo",
    description: "Formando gerações brilhantes com excelência académica e valores sólidos desde 2011.",
    image: "/banner-girassol-finalistas.jpg",
    cta: "Conheça Nossa História",
    ctaLink: "#sobre",
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setProgress(0)
    }, 7000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 100 / 70 // 7000ms / 100ms intervals
      })
    }, 100)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
    }
  }, [isAutoPlaying, currentSlide])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress(0)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 12000)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgress(0)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 12000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 12000)
  }

  return (
    <section id="inicio" className="relative h-[650px] md:h-[750px] lg:h-[850px] overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
          }`}
        >
          {/* Background Image with Ken Burns effect */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className={`object-cover transition-transform duration-[7000ms] ${
                index === currentSlide ? "scale-110" : "scale-100"
              }`}
              priority={index === 0}
            />
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 pattern-dots opacity-20" />
          </div>

          {/* Content */}
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div
              className={`max-w-3xl text-white transition-all duration-1000 ${
                index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-0.5 bg-accent" />
                <p className="text-accent font-semibold text-base md:text-lg tracking-wider uppercase">
                  {slide.subtitle}
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] text-balance">
                {slide.title}
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-10 max-w-2xl text-pretty leading-relaxed font-light">
                {slide.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-primary hover:bg-accent/90 font-semibold text-base md:text-lg px-8 py-6 shadow-glow hover-lift"
                  asChild
                >
                  <a href={slide.ctaLink}>{slide.cta}</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass text-white border-white/30 hover:bg-white/10 font-semibold text-base md:text-lg px-8 py-6 bg-transparent"
                  asChild
                >
                  <a href="#cursos" className="flex items-center gap-2">
                    <Play size={18} />
                    Ver Vídeo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div
              className={`transition-all rounded-full ${
                index === currentSlide ? "bg-white/30 w-16 h-1" : "bg-white/40 hover:bg-white/60 w-8 h-1"
              }`}
            />
            {index === currentSlide && (
              <div
                className="absolute top-0 left-0 h-full bg-accent rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-10 right-10 z-20 hidden lg:flex flex-col items-center gap-2 text-white/70 animate-bounce">
        <span className="text-sm font-medium tracking-wider">SCROLL</span>
        <div className="w-0.5 h-12 bg-white/30" />
      </div>
    </section>
  )
}
