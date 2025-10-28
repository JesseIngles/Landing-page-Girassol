import { GraduationCap, Users, BookOpen, Award } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Users,
      value: "4000+",
      label: "Alunos Estudantes",
    },
    {
      icon: GraduationCap,
      value: "3500+",
      label: "Alunos Formados",
    },
    {
      icon: BookOpen,
      value: "11+",
      label: "Cursos Disponíveis",
    },
    {
      icon: Award,
      value: "98%",
      label: "Taxa de Aprovação",
    },
  ]

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4 group-hover:bg-accent/30 transition-colors">
                <stat.icon className="text-accent" size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">{stat.value}</div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
