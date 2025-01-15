import { Card, CardContent } from '@/components/ui/card'
import { AnimateOnScroll } from './animate-on-scroll'

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
      <div className="space-y-12 relative">
        <AnimateOnScroll variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <div className="flex items-center justify-end md:justify-normal md:ml-[50%] md:pl-8 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="w-full md:w-[calc(100%-2rem)] hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">Full Stack Developer</h3>
                  <p className="text-primary">Bitrock Software Technology plc</p>
                  <p className="text-muted-foreground">November 2022 - Present</p>
                  <ul className="mt-4 list-disc list-inside text-muted-foreground">
                    <li>Developing and maintaining web applications using modern JavaScript frameworks</li>
                    <li>Collaborating with cross-functional teams to deliver high-quality software solutions</li>
                    <li>Implementing responsive designs and ensuring cross-browser compatibility</li>
                    <li>Working with REST APIs and database management systems</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <div className="flex items-center justify-start md:justify-normal md:mr-[50%] md:pr-8 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="w-full md:w-[calc(100%-2rem)] hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">Freelance Developer</h3>
                  <p className="text-primary">Various Clients</p>
                  <p className="text-muted-foreground">2022 - Present</p>
                  <ul className="mt-4 list-disc list-inside text-muted-foreground">
                    <li>Developing custom web solutions for diverse client needs</li>
                    <li>Managing multiple projects simultaneously</li>
                    <li>Direct client communication and requirement gathering</li>
                    <li>Full-stack development using various modern technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <div className="flex items-center justify-end md:justify-normal md:ml-[50%] md:pl-8 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
            <Card className="w-full md:w-[calc(100%-2rem)] hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold">BSc in Software Engineering</h3>
                  <p className="text-primary">Jimma University</p>
                  <p className="text-muted-foreground">Graduation</p>
                  <ul className="mt-4 list-disc list-inside text-muted-foreground">
                    <li>Comprehensive study of software engineering principles</li>
                    <li>Focus on practical application development</li>
                    <li>Strong foundation in computer science fundamentals</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
}

