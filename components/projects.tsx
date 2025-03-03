import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileCode } from "lucide-react"

export function Projects() {
  // Replace with your actual projects
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description:
        "A scalable e-commerce platform built with a microservices architecture. Features include product catalog, shopping cart, user authentication, payment processing, and order management.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Node.js", "React", "Docker", "Kubernetes", "MongoDB", "Redis", "AWS"],
      features: [
        "Microservices architecture with API Gateway",
        "Event-driven communication using message queues",
        "Distributed transaction management",
        "Automated CI/CD pipeline with GitHub Actions",
      ],
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      title: "AI-Powered Content Management System",
      description:
        "A modern CMS that leverages AI to help content creators optimize their articles, generate SEO recommendations, and automate content distribution across multiple channels.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Python", "Django", "React", "PostgreSQL", "TensorFlow", "OpenAI API", "Azure"],
      features: [
        "AI-powered content optimization and suggestions",
        "Automated SEO analysis and recommendations",
        "Multi-channel content distribution",
        "Advanced analytics dashboard",
      ],
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
    {
      title: "Real-time Collaboration Tool",
      description:
        "A collaborative workspace application that allows teams to work together in real-time on documents, diagrams, and project management tasks.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["TypeScript", "Next.js", "Socket.io", "PostgreSQL", "Redis", "Docker", "Vercel"],
      features: [
        "Real-time document editing with operational transforms",
        "Interactive whiteboard with multiplayer support",
        "Kanban board for project management",
        "End-to-end encrypted messaging",
      ],
      liveUrl: "#",
      githubUrl: "#",
      caseStudyUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Here are some of the key projects I've worked on that showcase my technical skills and problem-solving
            abilities.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-foreground/80 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                          <FileCode className="h-4 w-4" />
                          Case Study
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

