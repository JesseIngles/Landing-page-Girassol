"use client"

import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function News() {
  const news = [
    {
      title: "Matrículas Abertas para 2025",
      date: "15 de Janeiro, 2025",
      category: "Matrículas",
      excerpt: "Inscrições abertas para todos os níveis de ensino. Garanta já a sua vaga!",
      image: "/placeholder.svg?key=bnxqr",
    },
    {
      title: "Cerimónia de Graduação 2024",
      date: "20 de Dezembro, 2024",
      category: "Eventos",
      excerpt: "Celebramos o sucesso dos nossos formandos com uma cerimónia memorável.",
      image: "/placeholder.svg?key=qlmzp",
    },
    {
      title: "Novos Laboratórios de Informática",
      date: "10 de Dezembro, 2024",
      category: "Infraestrutura",
      excerpt: "Investimento em tecnologia com novos laboratórios equipados com computadores modernos.",
      image: "/technical-training-laboratory-with-equipment.jpg",
    },
  ]

  return (
    <section id="noticias" className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Notícias & Comunicados
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">Fique Atualizado</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Acompanhe as últimas novidades, eventos e comunicados do Complexo Escolar Girassol.
          </p>
        </div>

        <div className="mb-12 bg-gradient-to-r from-accent/20 to-accent/10 border-l-4 border-accent rounded-xl p-8 shadow-lg">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
              📢
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary mb-2">Comunicado Importante</h3>
              <p className="text-foreground/80 text-lg">
                As aulas do segundo trimestre iniciam no dia 3 de Fevereiro. Todos os alunos devem estar presentes.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-accent text-primary text-xs font-bold px-4 py-1.5 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar size={16} className="text-accent" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{item.excerpt}</p>
                <Button variant="ghost" className="group-hover:text-accent p-0 font-semibold">
                  Ler Mais
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
