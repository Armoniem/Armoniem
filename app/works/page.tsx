import { Header } from '@/components/header'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  {
    title: "Goodnews Care",
    description: "A comprehensive healthcare management system for Goodnews Care, featuring patient records, appointment scheduling, and billing.",
    image: "/placeholder.svg?height=300&width=400&text=Goodnews+Care",
    category: "Web Application",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    duration: "3 months",
    role: "Full-Stack Developer",
    challenges: "Implementing real-time updates for appointment scheduling",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Dololo Hotel",
    description: "A modern hotel booking and management platform for Dololo Hotel, with real-time availability, online reservations, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=400&text=Dololo+Hotel",
    category: "Web Application",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis", "Stripe"],
    duration: "4 months",
    role: "Frontend Developer",
    challenges: "Integrating payment gateway and managing complex booking logic",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Hospital Management System",
    description: "An integrated hospital management solution with modules for patient care, inventory, HR, and finance management.",
    image: "/placeholder.svg?height=300&width=400&text=Hospital+Management",
    category: "Web Application",
    technologies: ["React", "Node.js", "Express", "MySQL", "Docker"],
    duration: "6 months",
    role: "Full-Stack Developer",
    challenges: "Designing a scalable architecture to handle multiple hospital departments",
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Kefeta Training",
    description: "An e-learning platform for Kefeta Training, offering online courses, progress tracking, and certificate generation.",
    image: "/placeholder.svg?height=300&width=400&text=Kefeta+Training",
    category: "Web Application",
    technologies: ["Next.js", "Django", "PostgreSQL", "AWS S3", "Stripe"],
    duration: "3 months",
    role: "Full-Stack Developer",
    challenges: "Implementing a robust video streaming solution and user progress tracking",
    demoLink: "#",
    githubLink: "#"
  }
]

const categories = ["All", "Web Application", "Mobile App", "API"]

export default function WorksPage() {
  return (
    <main className="bg-gradient-to-b from-background to-secondary">
      <Header />
      <div className="px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-5xl font-bold mb-4 text-center">My Works</h1>
            <p className="text-xl text-muted-foreground mb-12 text-center">Explore some of my recent projects and creations</p>
          </AnimateOnScroll>

          <Tabs defaultValue="All" className="mb-12">
            <TabsList className="justify-center">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 gap-8">
                  {projects
                    .filter(project => category === "All" || project.category === category)
                    .map((project, index) => (
                    <AnimateOnScroll key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="text-sm text-muted-foreground mb-4">
                            <p><strong>Duration:</strong> {project.duration}</p>
                            <p><strong>Role:</strong> {project.role}</p>
                            <p><strong>Challenges:</strong> {project.challenges}</p>
                          </div>
                          <div className="flex gap-4">
                            <Link href={project.demoLink}>
                              <Button variant="outline">View Demo</Button>
                            </Link>
                            <Link href={project.githubLink}>
                              <Button variant="outline">GitHub Repo</Button>
                            </Link>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimateOnScroll>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <AnimateOnScroll variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold mb-4">Want to see more?</h2>
              <p className="text-xl text-muted-foreground mb-8">Check out my GitHub for more projects and contributions</p>
              <Link href="https://github.com/armoniembezabih" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Visit My GitHub
                </Button>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </main>
  )
}

