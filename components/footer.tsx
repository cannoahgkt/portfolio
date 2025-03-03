import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              noahdevelops
            </Link>
            <p className="mt-2 text-muted-foreground">Software Developer specializing in full-stack development.</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/cannoahgkt"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/cannoahgoktekin"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} noahdevelops. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

