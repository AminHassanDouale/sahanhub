"use client"

import { motion } from "framer-motion"
import { Bot, Brain, Cpu, LineChart, MessageSquare, Sparkles, GitBranch, Shield } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import AnimationContainer from "@/components/utils/animation-container"

const CaptionGeneration = () => {
  const features = [
    {
      title: "Advanced AI Models",
      description: "Powered by state-of-the-art language models trained on diverse content",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-blue-500/10",
      textColor: "text-blue-500",
      details: [
        "GPT-4 Integration",
        "Contextual Understanding",
        "Multi-language Support"
      ]
    },
    {
      title: "Custom Algorithms",
      description: "Specialized algorithms for social media optimization and engagement",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-green-500/10",
      textColor: "text-green-500",
      details: [
        "Platform-specific Optimization",
        "Trend Analysis",
        "Engagement Prediction"
      ]
    },
    {
      title: "Real-time Analytics",
      description: "Track performance metrics and optimize content strategy",
      icon: <LineChart className="w-6 h-6" />,
      color: "bg-purple-500/10",
      textColor: "text-purple-500",
      details: [
        "Engagement Metrics",
        "A/B Testing",
        "Performance Reports"
      ]
    }
  ]

  const technologies = [
    {
      name: "Natural Language Processing",
      icon: <Bot className="w-5 h-5" />,
      description: "Advanced language understanding for context-aware content"
    },
    {
      name: "Machine Learning",
      icon: <Brain className="w-5 h-5" />,
      description: "Adaptive algorithms that learn from engagement patterns"
    },
    {
      name: "Neural Networks",
      icon: <GitBranch className="w-5 h-5" />,
      description: "Deep learning for enhanced content generation"
    },
    {
      name: "Security",
      icon: <Shield className="w-5 h-5" />,
      description: "Enterprise-grade data protection and privacy"
    }
  ]

  return (
    <div className="flex flex-col relative w-full min-h-screen">
      {/* Background Effects */}
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
                AI Technology
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500"
            >
                Our Enterprise Technology Solutions
                </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Leverage advanced artificial intelligence to create engaging, platform-optimized content that drives results.
            </motion.p>
          </div>
        </div>
      </AnimationContainer>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Cutting-Edge Features
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimationContainer key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-border/40 backdrop-blur-sm"
              >
                <div className={`w-12 h-12 rounded-lg ${feature.color} ${feature.textColor} flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
                <ul className="mt-4 space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimationContainer>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <AnimationContainer className="bg-gradient-to-b from-background to-background/80 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Technology Stack
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-border/40 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {tech.icon}
                  </div>
                  <h3 className="font-semibold">{tech.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimationContainer>

      {/* Benefits Section */}
      <AnimationContainer className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-12"
          >
            Benefits
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-xl border border-border/40 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Efficiency</h3>
              <ul className="space-y-3 text-start">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Reduce content creation time by 70%</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Automated optimization for each platform</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Bulk content generation capabilities</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 rounded-xl border border-border/40 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Performance</h3>
              <ul className="space-y-3 text-start">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Increase engagement by up to 40%</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Data-driven content optimization</span>
                </li>
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Real-time performance analytics</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default CaptionGeneration