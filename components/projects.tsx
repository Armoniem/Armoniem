import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import Link from 'next/link'

const projects = [
  {
    title: "Goodnews Care",
    description: "A comprehensive healthcare management system for Goodnews Care, featuring patient records, appointment scheduling, and billing.",
    image: "/placeholder.svg?height=300&width=400&text=Goodnews+Care",
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    link: "#"
  },
  {
    title: "Dololo Hotel",
    description: "A modern hotel booking and management platform for Dololo Hotel, with real-time availability, online reservations, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400&text=Dololo+Hotel",
    tags: ["Vue.js", "Django", "PostgreSQL", "Redis", "Stripe"],
    link: "#"
  },
  {
    title: "Hospital Management System",
    description: "An integrated hospital management solution with modules for patient care, inventory, HR, and finance management.",
    image: "/placeholder.svg?height=300&width=400&text=Hospital+Management",
    tags: ["React", "Node.js", "Express", "MySQL", "Docker"],
    link: "#"
  },
  {
    title: "Kefeta Training",
    description: "An e-learning platform for Kefeta Training, offering online courses, progress tracking, and certificate generation.",
    image: "/placeholder.svg?height=300&width=400&text=Kefeta+Training",
    tags: ["Next.js", "Django", "PostgreSQL", "AWS S3", "Stripe"],
    link: "#"
  }
]

export function Projects() {
  return (
    <div className="px-8 py-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={i} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={project.link}>
                    <Button className="w-full">View Project</Button>
                  </Link>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/works">
            <Button size="lg">View All Projects</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

