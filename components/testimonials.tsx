import { Card, CardContent } from '@/components/ui/card'
import { AnimateOnScroll } from './animate-on-scroll'

const testimonials = [
  {
    name: "Alex Armoniemson",
    role: "CEO, TechStart Inc.",
    content: "Armoniem's expertise in full-stack development transformed our project. His ability to navigate both front-end and back-end challenges was invaluable.",
  },
  {
    name: "Sarah Lee",
    role: "CTO, InnovateCorp",
    content: "Working with Armoniem was a game-changer for our team. His deep knowledge of modern web technologies and best practices elevated our entire development process.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, DataFlow Systems",
    content: "Armoniem's full-stack skills allowed us to rapidly prototype and iterate on our product. His insights on both client-side and server-side optimizations were crucial to our success.",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}

