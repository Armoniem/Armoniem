import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { AnimateOnScroll } from './animate-on-scroll'

export function About() {
  return (
    <div className="px-4 md:px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-2 gap-12">
          <AnimateOnScroll variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF8E6E] to-[#FFB6A3] rounded-3xl transform -rotate-3"></div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Profile"
                width={500}
                height={600}
                className="relative rounded-3xl"
              />
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold mb-2">Biography</h3>
                <p className="text-gray-600">
                  Work With Leading International Brands And Business Vestibulum Sed Augue Ultricies.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Contact</h3>
                <p className="text-gray-600">
                  457 Washington Ave.<br />
                  Westminster, Kentucky<br />
                  40391
                </p>
              </div>
              <div className="grid gap-4">
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Brand Growing</h4>
                      <p className="text-sm text-gray-600">Suspendisse potenti pellentesque eligram</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Campaign Planner</h4>
                      <p className="text-sm text-gray-600">Suspendisse potenti quis lorem vitae</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  )
}

