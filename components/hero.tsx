import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from './animate-on-scroll'
import { RotatingSkills } from './rotating-skills'

export function Hero() {
  return (
    <div className="relative">
      <div className="px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="space-y-6 md:space-y-8">
                <p className="text-lg text-gray-600">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Armoniem Bezabih
                </h1>
                <p className="text-gray-600 text-lg">
                  Full-Stack Web Developer specializing in MERN stack, Django, Vue.js, and more.<br className="hidden md:inline" />
                  Crafting innovative web solutions with cutting-edge technologies.
                </p>
                <Button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-lg">
                  View My Work
                </Button>
                <div className="grid grid-cols-3 gap-8 pt-8">
                  <div>
                    <h3 className="text-3xl font-bold">20+<span className="text-primary"></span></h3>
                    <p className="text-gray-600">Projects Completed</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">2+<span className="text-primary"></span></h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">100%<span className="text-primary"></span></h3>
                    <p className="text-gray-600">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
              <div className="relative mt-12 md:mt-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground rounded-3xl transform rotate-3"></div>
                <Image
                  src="/hero1.png?height=500&width=500&text=Armoniem+Bezabih"
                  alt="Armoniem Bezabih"
                  width={500}
                  height={500}
                  className="relative rounded-3xl"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
      <AnimateOnScroll>
        <RotatingSkills />
      </AnimateOnScroll>
    </div>
  )
}

