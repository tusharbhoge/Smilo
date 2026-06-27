import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {  SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const Header = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-4 bg-background/80 border-b border-border/50 backdrop-blur-md h-16 ">
      <div className = " max-w-6xl mx-auto flex items-center justify-between ">
          <Link href="/" className="flex items-center gap-2 ">
            <Image src="/logo.png" alt="Logo" width={80} height={32} className="w-11"/>
            <span className="text-xl font-bold text-primary"> Smilo</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                How It Works
              </a>
              <a href="#pricing-section" className="text-muted-foreground hover:text-foreground">
                Pricing
              </a>
              <a href="#what-to-ask" className="text-muted-foreground hover:text-foreground">
                About
              </a>
          </div>

          <div className="flex items-center gap-4">
              <SignInButton mode="modal">
                <Button variant="ghost" className="px-4 py-2 text-sm">
                  Login
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="default" className="px-4 py-2 text-sm">
                  Sign Up
                </Button>
              </SignUpButton>
              
          </div>
      </div>
    </nav>
  )
}

export default Header
