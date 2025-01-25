"use client"

import { motion } from "framer-motion"
import { Calendar, User, Clock, Tag, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import AnimationContainer from "@/components/utils/animation-container"

const BlogPage = () => {
  const fadeInUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const blogPosts = [
    {
      title: "Emerging Tech Trends in African Startups",
      excerpt: "Exploring how African tech companies are leveraging AI and blockchain to solve local challenges",
      author: "David Okonjo",
      date: "Jan 15, 2024",
      category: "Africa",
      readTime: "5 min",
      bgImage: "bg-[url('/images/blog/africa.jpg')]"
    },
    {
      title: "Middle East Digital Transformation",
      excerpt: "How Arab nations are leading digital innovation in government services and smart cities",
      author: "Sara Al-Hassan",
      date: "Jan 12, 2024",
      category: "Middle East",
      readTime: "4 min",
      bgImage: "bg-gradient-to-r from-blue-500 to-purple-500"
    },
    {
      title: "Silicon Valley's AI Revolution",
      excerpt: "Latest developments in artificial intelligence and their impact on global tech industry",
      author: "Michael Chen",
      date: "Jan 10, 2024",
      category: "US Tech",
      readTime: "6 min",
      bgImage: "bg-gradient-to-r from-green-500 to-blue-500"
    },
    {
      title: "Global Cloud Computing Trends",
      excerpt: "Comparative analysis of cloud adoption across different regions and industries",
      author: "Sarah Johnson",
      date: "Jan 8, 2024",
      category: "Technology",
      readTime: "5 min",
      bgImage: "bg-gradient-to-r from-purple-500 to-pink-500"
    }
  ]

  const categories = [
    { name: "Africa", count: 12 },
    { name: "Middle East", count: 8 },
    { name: "US Tech", count: 15 },
    { name: "Global", count: 10 }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] -top-24 -right-24" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px] -bottom-24 -left-24" />
        </div>

        <AnimationContainer className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Global Tech Insights
            </Badge>
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500 mb-6">
              Technology Without Borders
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Exploring tech innovation across Africa, the Arab world, and beyond
            </p>
          </motion.div>
        </AnimationContainer>
      </section>

      {/* Featured Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid md:grid-cols-2 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group rounded-xl border border-border/40 bg-black/40 backdrop-blur-xl overflow-hidden"
              >
                <div className={`relative h-48 ${post.bgImage} bg-cover bg-center`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Explore by Region
          </motion.h2>
          
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {categories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-border/40 bg-black/40 backdrop-blur-xl text-center cursor-pointer group"
              >
                <Globe className="w-8 h-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} articles
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage