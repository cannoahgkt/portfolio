import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const getBlogPosts = () => {
  return [
    {
      title: "AI: A Developer’s Assistant, Not a Replacement",
      excerpt:
        "One thing is clear: AI is not here to replace us—it’s here to enhance what we do. AI-powered tools are making our workflows more efficient, helping us debug faster, and even suggesting better code structures.",
      image: "/ai-blog.png?height=400&width=600",
      date: "March 04, 2025",
      readTime: "8 min read",
      categories: ["AI", "Development", "Productivity"],
      slug: "ai-developers-assistant",
    }
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

