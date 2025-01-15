import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Testimonials } from '@/components/testimonials'
import { TechStack } from '@/components/tech-stack'
import { BlogPreview } from '@/components/blog-preview'
import { CallToAction } from '@/components/call-to-action'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <TechStack />
      <BlogPreview />
      <CallToAction />
      <Contact />
    </main>
  )
}

