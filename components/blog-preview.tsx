import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimateOnScroll } from './animate-on-scroll'
import Link from 'next/link'

const blogPosts = [
  {
    title: "Building Scalable Web Applications with Microservices",
    excerpt: "Learn how to design and implement a microservices architecture for your next big project.",
    date: "May 15, 2023",
  },
  {
    title: "Optimizing React Performance: Tips and Tricks",
    excerpt: "Discover advanced techniques to boost your React application's performance and user experience.",
    date: "June 2, 2023",
  },
  {
    title: "The Future of Backend Development: Trends to Watch",
    excerpt: "Explore emerging technologies and methodologies shaping the future of backend development.",
    date: "June 20, 2023",
  },
]

export function BlogPreview() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <AnimateOnScroll>
          <h2 className="text-3xl font-bold text-center mb-12">Latest from the Blog</h2>
        </AnimateOnScroll>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post, index) => (
            <AnimateOnScroll key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="text-sm text-muted-foreground">{post.date}</div>
                </CardContent>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
        <div className="text-center">
          <Button asChild>
            <Link href="/blog">Read More Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

