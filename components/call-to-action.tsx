import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from './animate-on-scroll'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-xl mb-8">Let's collaborate and bring your ideas to life with cutting-edge web solutions.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

