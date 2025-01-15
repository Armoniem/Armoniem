import { Card, CardContent } from '@/components/ui/card'
import { AnimateOnScroll } from './animate-on-scroll'

export function SocialStats() {
  return (
    <div className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-center text-2xl font-bold mb-8">
            My Journey On Social<br />Media Channels
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { bg: 'bg-red-50', color: 'text-red-600', number: '687+', label: 'Videos' },
            { bg: 'bg-blue-50', color: 'text-blue-600', number: '366+', label: 'Posts' },
            { bg: 'bg-pink-50', color: 'text-pink-600', number: '759+', label: 'Photos' },
            { bg: 'bg-blue-50', color: 'text-blue-600', number: '96+', label: 'Tweets' },
          ].map((item, index) => (
            <AnimateOnScroll key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <Card className={item.bg}>
                <CardContent className="p-6 text-center">
                  <div className={`text-2xl font-bold ${item.color}`}>{item.number}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  )
}

