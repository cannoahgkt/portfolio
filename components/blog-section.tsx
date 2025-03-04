import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
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

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            I write about software development, best practices, and emerging technologies. Check out some of my recent
            articles below.
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
                  {post.categories.map((category, catIndex) => (
                    <Badge key={catIndex} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
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

        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

