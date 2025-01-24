"use client"

import { motion } from "framer-motion"
import { Bot, Code2, Database, FileCode, LineChart, MessageSquare, Settings } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import AnimationContainer from "@/components/utils/animation-container"

const CaptionGeneration = () => {
  const features = [
    {
      title: "Natural Language Processing",
      description: "Advanced AI models that understand context and generate human-like text",
      icon: <Bot className="w-6 h-6" />,
      color: "bg-blue-500/10",
      textColor: "text-blue-500"
    },
    {
      title: "Multi-Platform Support",
      description: "Generate optimized content for different social media platforms",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-green-500/10",
      textColor: "text-green-500"
    },
    {
      title: "Smart Analytics",
      description: "Track performance and optimize your content strategy",
      icon: <LineChart className="w-6 h-6" />,
      color: "bg-purple-500/10",
      textColor: "text-purple-500"
    }
  ]

  return (
    <div className="flex flex-col relative w-full min-h-screen">
      <div className="absolute flex sm:hidden w-72 h-72 rounded-full bg-primary blur-[10rem] -top-16 left-0 -z-10"></div>
      <div className="absolute hidden sm:flex w-[500px] h-[500px] rounded-full bg-primary/40 blur-[10rem] -top-24 -right-24 -z-10"></div>
      <div className="absolute hidden sm:flex w-[500px] h-[500px] rounded-full bg-primary/40 blur-[10rem] -bottom-24 -left-24 -z-10"></div>

      {/* Hero Section */}
      <AnimationContainer className="relative py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-4"
            >
              <Badge variant="secondary" className="px-4 py-1">
                AI-Powered Content Generation
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500"
            >
              Next-Gen Caption Generation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Transform your social media presence with AI-powered captions that engage, inspire, and convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Button size="lg">Try Demo</Button>
              <Button size="lg" variant="outline">Learn More</Button>
            </motion.div>
          </div>
        </div>
      </AnimationContainer>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimationContainer key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl border border-border/40 backdrop-blur-sm"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} ${feature.textColor} flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </motion.div>
            </AnimationContainer>
          ))}
        </div>
      </div>

      {/* Demo Section */}
      <AnimationContainer className="bg-gradient-to-b from-background to-background/80 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="relative rounded-xl overflow-hidden border border-border/40">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/10"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-6">
                <FileCode className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Live Demo</h3>
              </div>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex gap-4 items-center"
                >
                  <Settings className="w-5 h-5 text-muted-foreground" />
                  <div className="h-2 bg-muted-foreground/20 rounded-full w-full max-w-md animate-pulse"></div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex gap-4 items-center"
                >
                  <Database className="w-5 h-5 text-muted-foreground" />
                  <div className="h-2 bg-muted-foreground/20 rounded-full w-full max-w-sm animate-pulse"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default CaptionGeneration