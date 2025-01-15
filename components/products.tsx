import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from './animate-on-scroll'

export function Products() {
  const products = [
    {
      title: "Smart travel wifi adapter",
      price: "129.99",
      image: "/placeholder.svg?height=300&width=300&text=Product+1"
    },
    {
      title: "Super power printing bag",
      price: "149.99",
      image: "/placeholder.svg?height=300&width=300&text=Product+2"
    },
    {
      title: "Travel water bottle",
      price: "89.99",
      image: "/placeholder.svg?height=300&width=300&text=Product+3"
    }
  ]

  return (
    <div className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll>
          <h2 className="text-2xl font-bold mb-8">My Products</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <AnimateOnScroll key={i} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="font-bold mb-2">{product.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">${product.price}</span>
                    <Button variant="outline" size="sm">
                      Buy now
                    </Button>
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

