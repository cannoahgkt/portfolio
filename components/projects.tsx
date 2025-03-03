import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, FileCode } from "lucide-react"

export function Projects() {
  // Replace with your actual projects
  const projects = [
    {
      title: "Chat App",
      description:
        "A mobile chat application developed with React Native, tailored for smartphones. The application offers users a chat interface with features enabling image, audio, and location sharing.",
      image: "/chatapp.svg?height=600&width=800",
      technologies: ["Firebase", "React Native", "GiftedChat"],
      features: [
        "Users can enter their name and choose a background color for the chat screen before joining the chat.",
        "Send and receive messages.",
        "Send and receive images (from the media library or the device's camera).",
        "Send and receive locations.",
        "Record, send, and receive audio.",
        "Users can view previous messages when offline.",
      ],
      githubUrl: "https://github.com/cannoahgkt/chat-app"
    },
    {
      title: "MyFlix",
      description:
        "MyFlix is a single-page application (SPA) built using React, React Bootstrap, React Router, and Bootstrap. It allows users to browse and explore a curated collection of movies. Users can view detailed information about each movie, search for specific titles, and mark movies as favorites. The application is designed to be responsive and mobile-friendly, providing an optimal viewing experience across devices.",
      image: "/myflix.svg?height=600&width=800",
      technologies: ["React", "React Router", "Bootstrap", "React Bootstrap", "Node.js", "API"],
      features: [
        "MyFlix interacts with a custom movie API available at movies_2. The API provides data about movies, including their titles, descriptions, genres, directors, and more. Please refer to the API documentation for more details on available endpoints and data formats.",
        "Automated SEO analysis and recommendations"
      ],
      liveUrl: "https://myflixonline.netlify.app/signup",
      githubUrl: "https://github.com/cannoahgkt/myFlix-client"
    },
    {
      title: "Meet App",
      description:
        "The aim of this project was to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.",
      image: "/meet-app.svg?height=600&width=800",
      technologies: ["React", "Gherkin", "OAuth2", "Google Calendar API"],
      features: [
        "Use the App When Offline",
        "Display Charts Visualizing Event Details",
        "Filter Events By City",
        "Add an App Shortcut to the Home Screen",
      ],
      liveUrl: "https://cannoahgkt.github.io/MEET_APP/",
      githubUrl: "https://github.com/cannoahgkt/MEET_APP",
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
              <div className="relative min-h-96 md:min-h-[500px] w-full rounded-lg overflow-hidden">
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

