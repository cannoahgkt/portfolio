import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      company: "Federal Cultural Events Berlin (KBB)",
      position: "Software Developer",
      period: "July 2024 - Present",
      description:
        "Developed and maintained backend systems using Groovy/Grails, optimizing database queries in PostgreSQL.",
      technologies: ["Groovy", "Grails", "PostgreSQL", "Backend Development"],
      achievements: [
        "Optimized database queries improving system performance",
        "Maintained and enhanced backend systems",
        "Collaborated with cross-functional teams for system improvements",
      ],
    },
    {
      company: "we22 GmbH",
      position: "Web Developer",
      period: "July 2022 - July 2024",
      description: "Built websites for SMEs using HTML, CSS, JavaScript, and WordPress.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      achievements: [
        "Developed responsive websites for multiple SME clients",
        "Implemented custom WordPress themes and plugins",
        "Ensured website performance and SEO optimization",
      ],
    },
    {
      company: "DEDO Media GmbH",
      position: "Multimedia Developer",
      period: "August 2021 - July 2022",
      description: "Designed digital assets and UI elements using Figma.",
      technologies: ["Adobe Creative Cloud", "Figma", "UI Design", "HTML", "CSS"],
      achievements: [
        "Created engaging digital assets for various platforms",
        "Designed intuitive user interfaces",
        "Collaborated with development team for design implementation",
      ],
    },
    {
      company: "Richter Consultant Agency",
      position: "Web Developer",
      period: "January 2020 - August 2021",
      description: "Developed and maintained the in-house website using HTML, CSS, and React.",
      technologies: ["React", "HTML", "CSS", "Frontend Development"],
      achievements: [
        "Led the development of the company's main website",
        "Implemented responsive design principles",
        "Improved website performance and user experience",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            My professional journey spans software development, web development, and digital design, with a focus on
            creating efficient and user-friendly solutions.
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

