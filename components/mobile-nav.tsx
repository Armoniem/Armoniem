'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-md py-4"
          >
            <nav className="flex flex-col items-center space-y-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>About Me</Link>
              <Link href="/works" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>My Works</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900" onClick={toggleMenu}>Contact Me</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

