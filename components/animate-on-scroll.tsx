'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation, Variant } from 'framer-motion'

interface AnimateOnScrollProps {
  children: React.ReactNode
  variants?: {
    hidden: Variant
    visible: Variant
  }
}

const defaultVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export function AnimateOnScroll({ children, variants = defaultVariants }: AnimateOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

