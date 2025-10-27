import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Complexo Escolar Girassol - Formando Gerações Brilhantes",
  description:
    "Complexo Escolar Politécnico Girassol - Ensino Geral e Técnico de excelência em Luanda, Angola. Formação em Contabilidade, Informática, Eletricidade, Mecânica e mais.",
  generator: "Jessé Inglês",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
