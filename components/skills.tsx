import { Card, CardContent } from '@/components/ui/card'
import { AnimateOnScroll } from '@/components/animate-on-scroll'

const skills = [
  {
    title: "Frontend Development",
    technologies: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "🖥️"
  },
  {
    title: "Backend Development",
    technologies: ["Node.js", "Express", "Django", "Flask", "FastAPI"],
    icon: "🔧"
  },
  {
    title: "Databases",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
    icon: "🗄️"
  },
  {
    title: "Other Skills",
    technologies: ["GraphQL", "RESTful APIs", "WebSockets", "Microservices"],
    icon: "🛠️"
  }
]

export function Skills() {
  return (
    <div className="px-8 py-16 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <AnimateOnScroll key={i} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              <Card>
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                  <ul className="list-disc list-inside">
                    {skill.technologies.map((tech, j) => (
                      <li key={j} className="text-sm text-muted-foreground">{tech}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

