import { Award, Users, Lightbulb, Heart } from "lucide-react"
import Image from "next/image"

export function About() {
  const values = [
    {
      icon: Award,
      title: "Missão",
      description:
        "Ensino de excelência, ao alcance de todos. Promover um ensino técnico profissionalizante, usando ferramentas metodológicas que primam pela formação tecnológica, científica e humanizada.",
    },
    {
      icon: Lightbulb,
      title: "Visão",
      description:
        "Ser referência de ensino geral e técnico, constituindo um marco em ação social e dignidade humana.",
    },
    {
      icon: Users,
      title: "Valores",
      description:
        "Ética, Comprometimento, Transparência, Responsabilidade, Integridade e Solidariedade.",
    }
  ]

  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">
            COMPLEXO ESCOLAR GIRASSOL
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/banner-girassol-finalistas.jpg"
              alt="Campus Girassol"
              fill
              className="object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-lg text-foreground/80 leading-relaxed">
              O <strong className="text-primary">Complexo Escolar Girassol</strong> é uma instituição de referência em Luanda, dedicada à formação de jovens através do ensino geral e técnico.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Nossa missão, visão e valores refletem o compromisso com a excelência, ética, responsabilidade social e formação integral de cada estudante.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-8 border border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full max-w-sm text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors mx-auto">
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
