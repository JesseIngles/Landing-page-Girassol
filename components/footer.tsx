import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="Girassol Logo" width={50} height={50} className="object-contain" />
              <span className="text-xl font-bold">Complexo Escolar Girassol</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Promover um ensino técnico profissionalizante, usando ferramentas metodológicas que primam pela formação tecnológica, científica e humanizada.

            </p>
            <p className="text-accent font-semibold">Labor Omnia Vincit</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#sobre" className="text-white/80 hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#cursos" className="text-white/80 hover:text-accent transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="#docentes" className="text-white/80 hover:text-accent transition-colors">
                  Docentes
                </Link>
              </li>
              <li>
                <Link href="#noticias" className="text-white/80 hover:text-accent transition-colors">
                  Notícias
                </Link>
              </li>
              <li>
                <Link href="#contactos" className="text-white/80 hover:text-accent transition-colors">
                  Contactos
                </Link>
              </li>
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="font-bold text-lg mb-4">Parceiros</h3>
            <ul className="space-y-2 text-white/80">
              <li>Sonangol E.P.</li>
              <li>Sonangol Pesquisa e Produção S.A</li>
              <li>Instituto Nacional de Petróleos - INP</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/80 text-sm">
            © {currentYear} Complexo Escolar Girassol. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
