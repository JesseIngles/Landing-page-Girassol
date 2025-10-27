"use client"

export function Facilities() {
  const facilities = [
    {
      title: "Salas de Aula Modernas",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Laboratórios de Informática",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Laboratórios de Ciências",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Biblioteca",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Oficinas Técnicas",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Espaços de Convívio",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const testimonials = [
    {
      name: "António Fernandes",
      role: "Ex-aluno - Informática",
      text: "O Girassol preparou-me para o mercado de trabalho. Hoje trabalho numa empresa de tecnologia graças à formação que recebi.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Beatriz Costa",
      role: "Ex-aluna - Contabilidade",
      text: "A qualidade do ensino e o apoio dos professores foram fundamentais para o meu sucesso profissional.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="instalacoes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Instalações & Vida Escolar</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Infraestrutura moderna e completa para proporcionar a melhor experiência de aprendizagem aos nossos alunos.
          </p>
        </div>

        {/* Facilities Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${facility.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="text-2xl font-bold text-white">{facility.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-primary text-center mb-8">Depoimentos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-accent"
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">&ldquo;{testimonial.text}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
