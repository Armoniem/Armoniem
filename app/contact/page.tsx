import { Header } from '@/components/header'
import { AnimateOnScroll } from '@/components/animate-on-scroll'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'

export default function ContactPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="px-4 md:px-8 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h1 className="text-5xl font-bold mb-4 text-center">Contact Me</h1>
            <p className="text-xl text-gray-600 mb-12 text-center">
              I'm always open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
            </p>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimateOnScroll variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input id="name" name="name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <Textarea id="message" name="message" rows={5} required />
                    </div>
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </AnimateOnScroll>
            <AnimateOnScroll variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }}>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">armoniem.bezabih@example.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-600">
                        123 Web Developer Street<br />
                        San Francisco, CA 94122<br />
                        United States
                      </p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <h3 className="font-semibold mb-2">Connect with me</h3>
                    <div className="flex space-x-4">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                        LinkedIn
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                        Twitter
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
                        GitHub
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </main>
  )
}

