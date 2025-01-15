import { AnimateOnScroll } from './animate-on-scroll'

// First, we'll add the devicon CDN in the RootLayout
const techStack = [
  { 
    name: 'React', 
    icon: 'devicon-react-original colored',
    color: 'text-[#61DAFB]'
  },
  { 
    name: 'Node.js', 
    icon: 'devicon-nodejs-plain colored',
    color: 'text-[#339933]'
  },
  { 
    name: 'TypeScript', 
    icon: 'devicon-typescript-plain colored',
    color: 'text-[#3178C6]'
  },
  { 
    name: 'Python', 
    icon: 'devicon-python-plain colored',
    color: 'text-[#3776AB]'
  },
  { 
    name: 'Django', 
    icon: 'devicon-django-plain colored',
    color: 'text-[#092E20]'
  },
  { 
    name: 'PostgreSQL', 
    icon: 'devicon-postgresql-plain colored',
    color: 'text-[#4169E1]'
  },
  { 
    name: 'MongoDB', 
    icon: 'devicon-mongodb-plain colored',
    color: 'text-[#47A248]'
  },
  { 
    name: 'Docker', 
    icon: 'devicon-docker-plain colored',
    color: 'text-[#2496ED]'
  },
  { 
    name: 'Vue.js', 
    icon: 'devicon-vuejs-plain colored',
    color: 'text-[#4FC08D]'
  },
  { 
    name: 'Next.js', 
    icon: 'devicon-nextjs-plain colored',
    color: 'text-[#000000] dark:text-white'
  },
  { 
    name: 'Tailwind CSS', 
    icon: 'devicon-tailwindcss-plain colored',
    color: 'text-[#06B6D4]'
  },
  { 
    name: 'Git', 
    icon: 'devicon-git-plain colored',
    color: 'text-[#F05032]'
  }
]

export function TechStack() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-center mb-12">My Tech Stack</h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {techStack.map((tech, index) => (
            <AnimateOnScroll 
              key={index} 
              variants={{ 
                hidden: { opacity: 0, scale: 0.8 }, 
                visible: { opacity: 1, scale: 1 } 
              }}
            >
              <div className="flex flex-col items-center group hover:scale-110 transition-transform duration-300">
                <i className={`${tech.icon} text-5xl mb-4 transition-transform duration-300 group-hover:scale-110`}></i>
                <span className={`text-center font-medium ${tech.color}`}>{tech.name}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

