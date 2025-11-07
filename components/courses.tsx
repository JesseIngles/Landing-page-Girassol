"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, GraduationCap } from "lucide-react"
import Image from "next/image"

type CourseCategory = "all" | "geral" | "tecnico"

export function Courses() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>("all")

  const courses = [
  {
      title: "Ensino Geral - Pré à 6ª Classe",
      category: "geral" as const,
      duration: "0 anos",
      level: "Ensino Geral",
      description: "Formação básica completa com disciplinas fundamentais para o desenvolvimento académico.",
      image: "/preclasse.jpeg",
  },
  {
      title: "Ensino Geral - 7ª à 9ª Classe",
      category: "geral" as const,
      duration: "3 anos",
      level: "Ensino Geral",
      description: "Formação básica completa com disciplinas fundamentais para o desenvolvimento académico.",
      image: "/banner-girassol-finalistas.jpg",
  },
  {
    title: "Eletromecânica",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Formar técnicos profissionais para executarem, operarem e realizarem manutenção de equipamentos eletromecânicos na indústria, prestadores de serviço ou como profissionais liberais.",
    image: "/eletromecanica.jpeg",
  },
  {
    title: "Eletrónica e Telecomunicações",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Este curso permite aos alunos adquirir uma sólida formação nas áreas da eletrónica e das telecomunicações, capacitando-os para responder às exigências das sociedades atuais.",
    image: "/eletronica.jpeg",
  },
  {
    title: "Informática",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Capacitar os estudantes a desenvolver habilidades em desenvolvimento, aperfeiçoamento e correção de tecnologias, abrangendo programação, redes e sistemas de informação.",
    image: "/Informatica.jpeg",
  },
  {
    title: "Contabilidade e Gestão",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Proporciona sólidos conhecimentos em planejamento contábil comercial, industrial, rural, bancário, público, auditoria, finanças e análise contábil.",
    image: "/contablidade.jpeg",
  },
  {
    title: "Finanças",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Visa a compreensão dos conceitos básicos de finanças, análise de demonstrativos financeiros, planejamento financeiro e avaliação de projetos para a tomada de decisões empresariais.",
    image: "/financas.jpeg",
  },
  {
    title: "Ciências Económicas e Jurídicas",
    category: "geral" as const,
    duration: "4 anos",
    level: "Ensino Geral",
    description: "O curso visa proporcionar formação sólida em Ciências Jurídico-Económicas e desenvolvimento, abordando temas do Direito Económico e Integração Regional.",
    image: "/Informatica.jpeg",
  },
  {
    title: "Perfuração e Produção de Petróleo",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Curso teórico e prático para o setor petrolífero, abrangendo operações de perfuração, produção, instrumentação e geologia.",
    image: "/pppcurso.jpeg",
  },
  {
    title: "Refinação e Processamento de Gás Natural",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Formação de técnicos profissionais capazes de compreender o processo de transformação de indústrias químicas e petrolíferas.",
    image: "/refinacaocurso.jpeg",
  },
  {
    title: "Minas",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Visa formar técnicos capazes de conceber, projetar, implementar e gerir ações na indústria mineira, especialmente na exploração e transformação de recursos naturais.",
    image: "/minas.jpeg",
  },
  {
    title: "Mecânica - Máquinas e Motores",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Preparar técnicos profissionais aptos a atuar em projetos, ferramentas e máquinas, bem como planejamento, instalação e manutenção mecânica.",
    image: "/cursomecanica.jpeg",
  },
  {
    title: "Instrumentação e Automação",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Capacitar o técnico com habilidades para monitoramento e controle de processos industriais, sendo útil em diversos segmentos industriais.",
    image: "/eletromecanica.jpeg",
  },
  {
    title: "Construção Civil - Desenho Projetista",
    category: "tecnico" as const,
    duration: "4 anos",
    level: "Ensino Técnico",
    description: "Fornece conhecimentos em desenho técnico, compreendendo as fases de projeto e execução de obras, além do uso eficiente do AutoCAD.",
    image: "/desenhoProjectista.jpeg",
  },  
];

  const filteredCourses = activeCategory === "all" ? courses : courses.filter((c) => c.category === activeCategory)

  return (
    <section id="cursos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Nossos Cursos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">Formação de Excelência</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Oferecemos uma ampla variedade de cursos do ensino geral ao técnico, preparando os alunos para o mercado de
            trabalho e ensino superior.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            size="lg"
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className={activeCategory === "all" ? "bg-primary text-white hover:bg-primary/90" : "hover:border-primary"}
          >
            Todos os Cursos
          </Button>
          <Button
            size="lg"
            variant={activeCategory === "geral" ? "default" : "outline"}
            onClick={() => setActiveCategory("geral")}
            className={
              activeCategory === "geral" ? "bg-primary text-white hover:bg-primary/90" : "hover:border-primary"
            }
          >
            Ensino Geral
          </Button>
          <Button
            size="lg"
            variant={activeCategory === "tecnico" ? "default" : "outline"}
            onClick={() => setActiveCategory("tecnico")}
            className={
              activeCategory === "tecnico" ? "bg-primary text-white hover:bg-primary/90" : "hover:border-primary"
            }
          >
            Ensino Técnico
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1.5 rounded-full">
                    {course.level}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5 pb-5 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-accent" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-accent" />
                    <span>Certificado</span>
                  </div>
                </div>
              
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
