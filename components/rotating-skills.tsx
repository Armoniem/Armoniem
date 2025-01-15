'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

const skills = [
  "Web Development",
  "UI/UX Design",
  "React & Next.js",
  "Node.js",
  "TypeScript",
  "Responsive Design",
  "SEO Optimization",
  "Performance Tuning",
  "API Integration",
  "Database Design"
]

export function RotatingSkills() {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateMarquee = async () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth
        await controls.start({
          x: [-containerWidth, 0],
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          },
        })
      }
    }

    if (!isHovered) {
      animateMarquee()
    } else {
      controls.stop()
    }
  }, [controls, isHovered])

  return (
    <div 
      className="bg-black text-white overflow-hidden py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-full mx-auto relative" ref={containerRef}>
        <motion.div
          animate={controls}
          className="flex whitespace-nowrap"
        >
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} className="text-2xl font-bold mx-8">
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

