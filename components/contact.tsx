import { AnimateOnScroll } from './animate-on-scroll'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

export function Contact() {
  return (
    <div className="px-4 md:px-8 py-16 bg-background">
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        </AnimateOnScroll>
        <Card>
          <CardContent className="p-6">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

