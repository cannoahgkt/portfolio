import { Card, CardContent } from "@/components/ui/card"
import { Database, Globe, Wrench, Terminal, Laptop } from "lucide-react"

export function Skills() {
  const technicalSkills = [
    {
      category: "Frontend Development",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["JavaScript", "React", "Next.js", "Angular", "Groovy Grails", "Bootstrap"],
    },
    {
      category: "Backend & Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MongoDB", "PostgreSQL", "SQL", "REST API", "AWS"],
    },
    {
      category: "Version Control",
      icon: <Terminal className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "Version Control", "Code Review", "CI/CD"],
    },
    {
      category: "Development Tools",
      icon: <Wrench className="h-8 w-8 text-primary" />,
      skills: ["VS Code", "IntelliJ", "MongoDB Atlas", "Postman", "Terminal"],
    },
    {
      category: "Design Tools",
      icon: <Laptop className="h-8 w-8 text-primary" />,
      skills: ["Adobe Creative Cloud", "Figma", "UI/UX Design", "Responsive Design"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            With experience in both frontend and backend development, I bring a comprehensive skill set to create
            efficient, scalable, and user-friendly applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSkills.map((category, index) => (
            <Card key={index} className="border border-border/40 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

