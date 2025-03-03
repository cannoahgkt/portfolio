import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// This is a placeholder for demonstration purposes
// In a real application, you would fetch blog posts from a database or CMS
const getBlogPosts = () => {
  // Sample blog posts data
  return [
    {
      title: "Building Scalable Microservices with Node.js and Docker",
      excerpt:
        "Learn how to design and implement a scalable microservices architecture using Node.js, Docker, and Kubernetes for modern web applications.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 15, 2023",
      readTime: "8 min read",
      categories: ["Microservices", "Node.js", "Docker"],
      slug: "building-scalable-microservices",
    },
    {
      title: "Advanced TypeScript Patterns for Enterprise Applications",
      excerpt:
        "Explore advanced TypeScript patterns and techniques that can help you build more maintainable and robust enterprise-grade applications.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 2, 2023",
      readTime: "12 min read",
      categories: ["TypeScript", "Software Design", "Best Practices"],
      slug: "advanced-typescript-patterns",
    },
    {
      title: "Optimizing React Performance: A Deep Dive",
      excerpt:
        "A comprehensive guide to identifying and resolving performance bottlenecks in React applications, with practical examples and benchmarks.",
      image: "/placeholder.svg?height=400&width=600",
      date: "January 10, 2023",
      readTime: "10 min read",
      categories: ["React", "Performance", "Web Development"],
      slug: "optimizing-react-performance",
    },
    {
      title: "Building a Real-time Chat Application with Socket.io and React",
      excerpt:
        "Step-by-step guide to creating a real-time chat application using Socket.io for WebSocket communication and React for the frontend.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 5, 2022",
      readTime: "15 min read",
      categories: ["WebSockets", "React", "Node.js"],
      slug: "real-time-chat-socketio-react",
    },
    {
      title: "Implementing Authentication and Authorization in Next.js Applications",
      excerpt:
        "Learn different approaches to implementing secure authentication and authorization in your Next.js applications.",
      image: "/placeholder.svg?height=400&width=600",
      date: "November 18, 2022",
      readTime: "11 min read",
      categories: ["Next.js", "Authentication", "Security"],
      slug: "nextjs-authentication-authorization",
    },
    {
      title: "Database Design Patterns for Scalable Applications",
      excerpt:
        "Explore database design patterns that help you build scalable, maintainable applications that can handle growing data and user loads.",
      image: "/placeholder.svg?height=400&width=600",
      date: "October 22, 2022",
      readTime: "14 min read",
      categories: ["Databases", "Architecture", "Scalability"],
      slug: "database-design-patterns",
    },
  ]
}

export default function BlogPage() {
  const blogPosts = getBlogPosts()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-foreground/80 text-lg">
              Thoughts, tutorials, and insights on software development, programming languages, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden flex flex-col h-full border border-border/40 hover:border-primary/20 transition-all hover:shadow-md"
              >
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category, catIndex) => (
                      <Badge key={catIndex} variant="secondary" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                    {post.categories.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.categories.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <h2 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button variant="outline" className="w-full gap-2" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

