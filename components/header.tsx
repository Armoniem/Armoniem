'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Armoniem</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground"></Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80 text-foreground">About Me</Link>
            <Link href="/works" className="transition-colors hover:text-foreground/80 text-foreground">My Works</Link>
            <Link href="/contact" className="transition-colors hover:text-foreground/80 text-foreground">Contact Me</Link>
          </nav>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-foreground/80 transition-colors" onClick={closeMenu}>Home</Link>
              <Link href="/about" className="text-foreground hover:text-foreground/80 transition-colors" onClick={closeMenu}>About Me</Link>
              <Link href="/works" className="text-foreground hover:text-foreground/80 transition-colors" onClick={closeMenu}>My Works</Link>
              <Link href="/contact" className="text-foreground hover:text-foreground/80 transition-colors" onClick={closeMenu}>Contact Me</Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button asChild className="hidden md:inline-flex">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

