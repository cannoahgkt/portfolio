import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const getBlogPost = (slug: string) => {
  return {
    title: "AI: A Developer’s Assistant, Not a Replacement",
    date: "March 04, 2025",
    readTime: "8 min read",
    categories: ["AI", "Development", "Productivity"],
    image: "/ai-blog.png?height=600&width=1200",
    content: `
      <p>Artificial Intelligence is rapidly transforming the tech industry, and as developers, we find ourselves at the center of this evolution. AI-powered tools are making our workflows more efficient, helping us debug faster, and even suggesting better code structures. But one thing is clear: AI is not here to replace us—it’s here to enhance what we do.</p>
      
      <h2>AI as a Productivity Boost</h2>
      <p>
        Modern AI tools, like code completion assistants and intelligent debugging software, act as a second pair of eyes. They can suggest solutions, automate repetitive tasks, and analyze complex patterns in ways that would take humans much longer. This allows developers to focus on the bigger picture: designing robust architectures, solving real-world problems, and pushing the boundaries of technology.
      <p>
      
      <h2>The Human Touch in Development</h2>
      <p>While AI can assist in coding, testing, and deployment, it lacks creativity, intuition, and the ability to truly understand user needs. Software development isn’t just about writing code—it’s about solving problems in a way that makes sense for real people. Engineers and developers bring critical thinking, ethical decision-making, and innovation to the table—elements that AI cannot replicate.</p>
      
      <h2>Collaboration, Not Competition</h2>
      <p>Instead of fearing AI, we should see it as a valuable teammate. By integrating AI-driven tools into our workflows, we can write cleaner code, detect vulnerabilities faster, and streamline development. AI helps us work smarter, not harder.

As developers, our role is evolving, but it remains indispensable. AI can generate code, but it takes human ingenuity to build something truly meaningful. By embracing AI as an assistant rather than a threat, we can harness its power to become better, more efficient, and more creative engineers.</p>
      
      <h2>Conclusion</h2>
      <p>Building microservices with Node.js and Docker provides a flexible, scalable approach to application development. By following the patterns and practices outlined in this article, you can create robust, maintainable microservices architectures.</p>
      
      <p>In future articles, we'll dive deeper into advanced topics like service discovery, API gateways, and implementing the Circuit Breaker pattern.</p>
    `,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" className="mb-6 gap-2" asChild>
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <Badge key={index} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>

            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="relative h-64 md:h-96 w-full mb-8 rounded-lg overflow-hidden">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}

