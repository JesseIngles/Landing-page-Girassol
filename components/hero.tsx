"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=african+students+in+modern+classroom+studying)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Floating Sunflower Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 text-accent/20 animate-float">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="15" />
            <circle cx="50" cy="25" r="8" />
            <circle cx="75" cy="50" r="8" />
            <circle cx="50" cy="75" r="8" />
            <circle cx="25" cy="50" r="8" />
          </svg>
        </div>
        <div className="absolute bottom-32 right-20 w-20 h-20 text-accent/10 animate-float-delayed">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <circle cx="50" cy="50" r="15" />
            <circle cx="50" cy="25" r="8" />
            <circle cx="75" cy="50" r="8" />
            <circle cx="50" cy="75" r="8" />
            <circle cx="25" cy="50" r="8" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight text-balance">
            Formando Gerações Brilhantes com Conhecimento e Valores
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed text-pretty">
            Do ensino geral ao técnico, o Complexo Escolar Girassol prepara os futuros profissionais de Angola.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg px-8">
              Ver Cursos
              <BookOpen className="ml-2" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-8"
            >
              Entrar na Plataforma
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          {/* Rotating Announcements */}
          <div className="mt-12 bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <p className="text-white font-medium">
                📢 Matrículas abertas para o ano letivo 2025 • Inscreva-se agora!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
