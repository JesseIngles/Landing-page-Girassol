import { Quote } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Ex-Aluna - Contabilidade",
      content:
        "O Girassol preparou-me não só academicamente, mas também para os desafios da vida profissional. Hoje trabalho numa das maiores empresas de Luanda.",
      image: "/placeholder.svg?key=tes1a",
    },
    {
      name: "Jessé Inglês",
      role: "Ex-Aluno - Técnico Informática",
      content:
        "Tive excelentes professores e mentores para a vida. Aprendi muito e hoje sou desenvolvedor de software graças à base que recebi aqui.",
      image: "https://avatars.githubusercontent.com/u/137011652?v=4",
    },
    {
      name: "Maria Costa",
      role: "Encarregada de Educação",
      content:
        "Confio plenamente no Girassol para a educação dos meus filhos. É uma escola que realmente se preocupa com o futuro dos alunos.",
      image: "/placeholder.svg?key=tes3c",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Testemunhos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">O Que Dizem Sobre Nós</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <Quote className="text-accent mb-4" size={40} />
              <p className="text-white/90 leading-relaxed mb-6 text-lg">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-accent/20">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-accent text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
