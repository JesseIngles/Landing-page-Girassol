"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contactos" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Contactos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">Fale Connosco</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Entre em contacto connosco. Estamos prontos para responder às suas questões e ajudá-lo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Informações de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Endereço</h4>
                    <p className="text-muted-foreground">Benfica, Zona Verde 3, Rua 17</p>
                    <p className="text-muted-foreground">Luanda, Angola</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Telefone</h4>
                    <p className="text-muted-foreground">+244 925 575 783</p>
                    <p className="text-muted-foreground">+244 945 117 053</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">info@girassol.ao</p>
                    <p className="text-muted-foreground">secretaria@girassol.ao</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-primary mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook size={24} href="https://www.facebook.com/cegirassol/?locale=pt_BR"/>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram size={24} href="https://www.instagram.com/complexo.escolargirassol/?hl=en"/>
                </a>
                
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-border h-64 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.832951381216!2d13.177437175018456!3d-8.988565691071166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521f841e9df9e5%3A0x4e2922e4cdfbba68!2sComplexo%20Escolar%20Politecnico%20Girassol!5e1!3m2!1spt-PT!2sao!4v1762524161189!5m2!1spt-PT!2sao"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Complexo Escolar Girassol"
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Envie-nos uma Mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                  Nome Completo
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div> 
                <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudá-lo?"
                  rows={10}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
