"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToExperience = () => {
    const element = document.getElementById("experience")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          {/* Replace with your name */}
          Hi, I'm <span className="text-primary">Noah</span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
          {/* Replace with your profession/tagline */}
          Software Developer specializing in full-stack development.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-400">
        <Button size="lg" variant="shine" onClick={scrollToExperience}>
            See my experience
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <span>Contact Me</span>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            const element = document.getElementById("skills")
            if (element) element.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  )
}

