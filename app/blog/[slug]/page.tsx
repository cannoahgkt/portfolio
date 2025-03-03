import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// This is a placeholder for demonstration purposes
// In a real application, you would fetch the blog post data from a database or CMS
const getBlogPost = (slug: string) => {
  // Sample blog post data
  return {
    title: "Building Scalable Microservices with Node.js and Docker",
    date: "March 15, 2023",
    readTime: "8 min read",
    categories: ["Microservices", "Node.js", "Docker"],
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>Microservices architecture has become increasingly popular for building complex applications. In this article, we'll explore how to build scalable microservices using Node.js and Docker.</p>
      
      <h2>What are Microservices?</h2>
      <p>Microservices are an architectural approach where an application is built as a collection of small, independent services that communicate over well-defined APIs. Each service is focused on a specific business capability and can be developed, deployed, and scaled independently.</p>
      
      <h2>Benefits of Microservices</h2>
      <ul>
        <li>Improved scalability - Services can be scaled independently based on demand</li>
        <li>Technology flexibility - Different services can use different technologies</li>
        <li>Resilience - Failure in one service doesn't bring down the entire application</li>
        <li>Team autonomy - Smaller teams can work on individual services</li>
        <li>Faster deployment - Services can be deployed independently</li>
      </ul>
      
      <h2>Setting Up a Node.js Microservice</h2>
      <p>Let's start by creating a simple Node.js microservice using Express:</p>
      
      <pre><code>
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(\`Service listening on port \${port}\`);
});
      </code></pre>
      
      <h2>Containerizing with Docker</h2>
      <p>Docker allows us to package our microservice into a standardized unit for deployment. Here's a basic Dockerfile:</p>
      
      <pre><code>
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
      </code></pre>
      
      <h2>Service Communication</h2>
      <p>Microservices need to communicate with each other. There are several patterns for this:</p>
      
      <h3>1. REST APIs</h3>
      <p>The most straightforward approach is using REST APIs. Services can make HTTP requests to other services.</p>
      
      <h3>2. Message Queues</h3>
      <p>For asynchronous communication, message queues like RabbitMQ or Kafka are excellent choices.</p>
      
      <h3>3. gRPC</h3>
      <p>For high-performance, low-latency communication, gRPC is a great option.</p>
      
      <h2>Orchestrating with Docker Compose</h2>
      <p>For local development, Docker Compose helps manage multiple services:</p>
      
      <pre><code>
version: '3'
services:
  user-service:
    build: ./user-service
    ports:
      - "3001:3000"
    environment:
      - DB_CONNECTION=mongodb://mongo:27017/users
    depends_on:
      - mongo
  
  product-service:
    build: ./product-service
    ports:
      - "3002:3000"
    environment:
      - DB_CONNECTION=mongodb://mongo:27017/products
    depends_on:
      - mongo
  
  mongo:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  mongodb_data:
      </code></pre>
      
      <h2>Scaling with Kubernetes</h2>
      <p>For production environments, Kubernetes provides powerful tools for deploying, scaling, and managing containerized applications.</p>
      
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

