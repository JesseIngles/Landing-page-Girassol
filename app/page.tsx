import { HeroCarousel } from "@/components/hero-carousel"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Courses } from "@/components/courses"
import { WhyChooseUs } from "@/components/why-choose-us"
import { News } from "@/components/news"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroCarousel />
      <Stats />
      <About />
      <WhyChooseUs />
      <Courses />
      <News />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
