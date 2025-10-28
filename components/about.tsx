import { Award, Users, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"

export function About() {
  const values = [
    {
      icon: Award,
      title: "Educação de Qualidade",
      description: "Excelência académica com metodologias modernas e professores qualificados.",
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Tecnologia e práticas pedagógicas inovadoras para preparar o futuro.",
    },
    {
      icon: Users,
      title: "Formação Integral",
      description: "Desenvolvimento académico, técnico e humano dos nossos estudantes.",
    },
    {
      icon: Heart,
      title: "Responsabilidade Social",
      description: "Compromisso com a comunidade e valores éticos sólidos.",
    },
  ]

  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Bem-vindo ao Complexo Escolar Girassol
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/banner-girassol-finalistas.jpg" alt="Campus Girassol" fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              O <strong className="text-primary">Complexo Escolar Politécnico Girassol</strong> é uma instituição de
              referência em Luanda, dedicada à formação de jovens angolanos através do ensino geral e técnico de
              excelência.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Com mais de uma década de experiência, temos o compromisso de iluminar o caminho para o sucesso
              profissional e pessoal dos nossos alunos, preparando-os para os desafios do mercado de trabalho moderno.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Guiados pelo lema <strong className="text-primary">"Labor Omnia Vincit"</strong> (O Trabalho Vence Tudo),
              cultivamos valores de dedicação, excelência e responsabilidade social em cada estudante.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <value.icon className="text-primary group-hover:text-accent transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
