import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { AnimateOnScroll } from './animate-on-scroll'

export function Videos() {
  return (
    <div className="px-4 md:px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-2xl font-bold mb-8">My Latest Videos</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <AnimateOnScroll key={i} variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src={`/placeholder.svg?height=225&width=400&text=Video+${i}`}
                    alt={`Video ${i}`}
                    width={400}
                    height={225}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-bold mb-2">We are going to change</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>2.1k views</span>
                    <span className="mx-2">•</span>
                    <span>2 days ago</span>
                  </div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

