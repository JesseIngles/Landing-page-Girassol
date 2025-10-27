import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function WhyChooseUs() {
  const reasons = [
    "Corpo docente altamente qualificado e experiente",
    "Infraestruturas modernas com laboratórios equipados",
    "Metodologias de ensino inovadoras e práticas",
    "Preparação sólida para o mercado de trabalho",
    "Ambiente seguro e propício ao aprendizado",
    "Acompanhamento personalizado dos alunos",
    "Parcerias com empresas e instituições",
    "Atividades extracurriculares e culturais",
  ]

  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Por Que Escolher-nos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">O Que Nos Torna Únicos</h2>
            <div className="w-24 h-1 bg-accent mb-8"></div>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              No Complexo Escolar Girassol, oferecemos uma experiência educacional completa que vai além da sala de
              aula, preparando nossos alunos para serem líderes do amanhã.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                  <span className="text-foreground/80">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/modern-classroom-study.png" alt="Sala de aula moderna" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
