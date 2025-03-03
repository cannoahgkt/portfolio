import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export function Experience() {
  // Replace with your actual work experience
  const experiences = [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      period: "Jan 2020 - Present",
      description:
        "Leading the development of cloud-native applications using microservices architecture. Implemented CI/CD pipelines and containerization strategies that reduced deployment time by 70%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "TypeScript"],
      achievements: [
        "Architected and implemented a scalable backend system that handles 1M+ daily requests",
        "Led a team of 5 developers to deliver a major product feature ahead of schedule",
        "Reduced API response time by 40% through performance optimization",
      ],
    },
    {
      company: "Digital Solutions Ltd.",
      position: "Full Stack Developer",
      period: "Mar 2017 - Dec 2019",
      description:
        "Developed and maintained multiple web applications for enterprise clients. Collaborated with UX designers to implement responsive and accessible user interfaces.",
      technologies: ["Angular", "Python", "Django", "PostgreSQL", "Redis", "AWS"],
      achievements: [
        "Developed a custom CRM system that increased sales team efficiency by 25%",
        "Implemented automated testing that reduced bug reports by 30%",
        "Optimized database queries resulting in 50% faster page load times",
      ],
    },
    {
      company: "StartUp Ventures",
      position: "Software Developer",
      period: "Jun 2015 - Feb 2017",
      description:
        "Worked in an agile team to build a SaaS platform from the ground up. Participated in all aspects of the development lifecycle from planning to deployment.",
      technologies: ["JavaScript", "PHP", "Laravel", "MySQL", "jQuery", "Bootstrap"],
      achievements: [
        "Contributed to a successful product launch that acquired 10,000+ users in the first month",
        "Implemented payment processing system with multiple gateway integrations",
        "Developed a real-time notification system using WebSockets",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            My professional journey as a software developer across different companies and projects.
          </p>
        </div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start md:justify-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0 md:order-1 md:ml-8">
                <Briefcase className="w-5 h-5" />
              </div>

              <Card className="w-full md:w-[calc(50%-4rem)] md:order-0 md:mr-8">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{exp.company}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-primary mb-4">{exp.position}</h4>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h5 className="text-sm font-semibold mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold mb-2">Key Achievements:</h5>
                    <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

