import { Button } from "@/components/ui/button"
export function Faculty() {
  const faculty = [
    {
      name: "Prof. João Silva",
      role: "Diretor Pedagógico",
      subject: "Matemática",
      image: "/african-male-teacher-professional.jpg",
    },
    {
      name: "Profa. Maria Santos",
      role: "Coordenadora",
      subject: "Língua Portuguesa",
      image: "/african-female-teacher-professional.jpg",
    },
    {
      name: "Prof. Carlos Mendes",
      role: "Docente",
      subject: "Informática",
      image: "/african-male-computer-teacher.jpg",
    },
    {
      name: "Profa. Ana Costa",
      role: "Docente",
      subject: "Física e Química",
      image: "/african-female-science-teacher.jpg",
    },
    {
      name: "Prof. Pedro Alves",
      role: "Docente",
      subject: "Eletricidade",
      image: "/african-male-electrical-teacher.jpg",
    },
    {
      name: "Profa. Isabel Ferreira",
      role: "Docente",
      subject: "Contabilidade",
      image: "/african-female-accounting-teacher.jpg",
    },
  ]

  return (
    <section id="docentes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Corpo Docente</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa equipa de professores qualificados e experientes está comprometida com a excelência no ensino e o
            desenvolvimento dos nossos alunos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-80 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${member.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-1">{member.role}</p>
                  <p className="text-white/90">{member.subject}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:bg-accent hover:text-primary bg-transparent">
            Ver Todos os Docentes
          </Button>
        </div>
      </div>
    </section>
  )
}
