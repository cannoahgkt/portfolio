import Image from "next/image"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/placeholder.svg?height=400&width=400" alt="Your Name" fill className="object-cover" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-foreground/80 mb-4">
              {/* Replace with your bio */}
              Hello! I'm a passionate developer with a strong foundation in web technologies and a keen eye for design.
              With over 5 years of experience in the industry, I've had the opportunity to work on a diverse range of
              projects, from small business websites to complex enterprise applications.
            </p>
            <p className="text-foreground/80 mb-6">
              {/* Replace with more about yourself */}
              My approach to development is centered around creating intuitive, user-friendly experiences that solve
              real problems. I'm constantly learning and exploring new technologies to stay at the forefront of the
              industry. When I'm not coding, you can find me hiking, reading, or experimenting with new recipes in the
              kitchen.
            </p>

            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

