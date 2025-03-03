import { Card, CardContent } from "@/components/ui/card"
import { Database, Server, Globe, Cloud, Layers, GitBranch } from "lucide-react"

export function Skills() {
  // Replace with your actual skills
  const programmingLanguages = [
    { name: "JavaScript", proficiency: 90 },
    { name: "TypeScript", proficiency: 85 },
    { name: "Python", proficiency: 80 },
    { name: "Java", proficiency: 75 },
    { name: "C#", proficiency: 70 },
    { name: "Go", proficiency: 65 },
    { name: "PHP", proficiency: 60 },
    { name: "Ruby", proficiency: 55 },
  ]

  const technicalSkills = [
    {
      category: "Frontend",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "Material UI"],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express", "Django", "Spring Boot", "ASP.NET Core", "Laravel"],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Firebase"],
    },
    {
      category: "DevOps",
      icon: <Cloud className="h-8 w-8 text-primary" />,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    },
    {
      category: "Architecture",
      icon: <Layers className="h-8 w-8 text-primary" />,
      skills: ["Microservices", "RESTful APIs", "GraphQL", "Serverless", "Event-driven", "DDD"],
    },
    {
      category: "Tools",
      icon: <GitBranch className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub Actions", "Jira", "Figma", "VS Code", "Postman"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            As a software developer, I've worked with a variety of programming languages and technologies. Here's an
            overview of my technical expertise.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Programming Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className="bg-card rounded-lg p-4 border border-border/40">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.proficiency}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${lang.proficiency}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6 text-center">Technical Expertise</h3>
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
      </div>
    </section>
  )
}

