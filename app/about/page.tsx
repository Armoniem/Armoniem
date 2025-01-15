import { Header } from '@/components/header'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SkillBar } from '@/components/skill-bar'
import { Timeline } from '@/components/timeline'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="bg-gradient-to-b from-background to-secondary">
      <Header />
      <div className="px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-5xl font-bold mb-8 text-center">About Me</h1>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <AnimateOnScroll variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
              <div className="space-y-6">
                <p className="text-lg">
                  Hello! I'm a passionate full-stack developer with a strong foundation in software engineering, 
                  having earned my BSc in Software Engineering from Jimma University. My journey in web development 
                  has been driven by a desire to create impactful digital solutions that solve real-world problems.
                </p>
                <p className="text-lg">
                  Currently, I'm working at Bitrock Software Technology plc since November 2022, where I've been 
                  involved in developing and maintaining various web applications using modern technologies like 
                  React, Node.js, and Python. Alongside my full-time role, I've successfully managed multiple 
                  freelance projects, giving me diverse experience across different industries and technical challenges.
                </p>
                <p className="text-lg">
                  I specialize in full-stack development with expertise in both frontend and backend technologies. 
                  My approach combines technical excellence with practical problem-solving, ensuring that I deliver 
                  solutions that are not only technically sound but also user-friendly and business-effective.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground rounded-3xl transform rotate-3"></div>
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Profile Image"
                  width={500}
                  height={600}
                  className="relative rounded-3xl shadow-lg"
                />
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-8 text-center">Professional Journey</h2>
          </AnimateOnScroll>
          <Timeline />

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-8 text-center mt-16">Technical Expertise</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { name: "JavaScript/TypeScript", level: 90 },
              { name: "React & Next.js", level: 85 },
              { name: "Node.js & Express", level: 85 },
              { name: "Python & Django", level: 80 },
              { name: "PostgreSQL", level: 75 },
              { name: "MongoDB", level: 80 },
              { name: "Docker", level: 70 },
              { name: "RESTful APIs", level: 85 },
              { name: "Git & Version Control", level: 85 },
            ].map((skill, index) => (
              <AnimateOnScroll key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <SkillBar name={skill.name} level={skill.level} />
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-8 text-center">Development Philosophy</h2>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Clean Code",
                description: "I believe in writing maintainable, well-documented code that follows best practices and design patterns."
              },
              {
                title: "User-Centric Design",
                description: "Every line of code I write considers the end-user experience and accessibility requirements."
              },
              {
                title: "Continuous Learning",
                description: "I stay updated with the latest technologies and best practices in the ever-evolving tech landscape."
              }
            ].map((philosophy, index) => (
              <AnimateOnScroll key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{philosophy.title}</h3>
                    <p className="text-muted-foreground">{philosophy.description}</p>
                  </CardContent>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          </AnimateOnScroll>
          <div className="mb-16">
            <AnimateOnScroll variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">BSc in Software Engineering</h3>
                  <p className="text-muted-foreground">Jimma University</p>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
            <div className="text-center bg-gradient-to-r from-primary to-primary-foreground text-primary-foreground rounded-lg p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-lg mb-8">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Whether you need a full-stack developer for your next project or want to discuss potential 
                opportunities, I'd love to hear from you.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-background text-primary hover:bg-secondary rounded-full px-8 py-3 text-lg font-semibold transition-colors duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  )
}

