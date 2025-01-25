"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Settings, BarChart, Users, Zap, Shield, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import AnimationContainer from "@/components/utils/animation-container"

const PostScheduling = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const features = [
    {
      title: "AI-Powered Scheduling",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-blue-500/10",
      textColor: "text-blue-500",
      description: "Intelligent content scheduling across platforms",
      details: [
        "Smart time optimization",
        "Cross-platform coordination",
        "AI-driven posting times"
      ]
    },
    {
      title: "Real-time Performance",
      icon: <BarChart className="w-6 h-6" />,
      color: "bg-green-500/10",
      textColor: "text-green-500",
      description: "Live analytics and performance tracking",
      details: [
        "Instant engagement metrics",
        "Performance forecasting",
        "Automated reporting"
      ]
    },
    {
      title: "Enterprise Collaboration",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500/10",
      textColor: "text-purple-500",
      description: "Advanced team workflow management",
      details: [
        "Multi-team coordination",
        "Role-based permissions",
        "Approval automation"
      ]
    }
  ]

  const tools = [
    {
      title: "Speed & Efficiency",
      icon: <Zap />,
      items: [
        "Reduce scheduling time by 80%",
        "Automated queue management",
        "Bulk content processing"
      ]
    },
    {
      title: "Smart Analytics",
      icon: <Target />,
      items: [
        "AI-driven insights",
        "Engagement prediction",
        "Performance optimization"
      ]
    }
  ]

  return (
    <div className="flex flex-col relative w-full min-h-screen">
      <div className="absolute inset-0 -z-10">
        <div className="absolute flex sm:hidden w-72 h-72 rounded-full bg-primary/30 blur-[8rem] -top-16 left-0"></div>
        <div className="absolute hidden sm:flex w-[500px] h-[500px] rounded-full bg-primary/20 blur-[12rem] -top-24 -right-24"></div>
        <div className="absolute hidden sm:flex w-[500px] h-[500px] rounded-full bg-primary/20 blur-[12rem] -bottom-24 -left-24"></div>
      </div>

      <AnimationContainer className="relative py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto px-4 sm:px-6"
        >
          <div className="text-center">
            <motion.div variants={itemVariants} className="flex justify-center mb-4">
              <Badge variant="secondary" className="px-4 py-1 text-sm">
                Enterprise Scheduling Platform
              </Badge>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-primary-foreground to-gray-400"
            >
              Intelligent Content Scheduling
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Transform your content strategy with AI-powered scheduling and analytics
            </motion.p>
          </div>
        </motion.div>
      </AnimationContainer>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="p-8 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm"
            >
              <div className={`w-14 h-14 rounded-lg ${feature.color} ${feature.textColor} flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-6">{feature.description}</p>
              <ul className="space-y-3">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-background via-background/80 to-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold">Advanced Capabilities</h2>
            <p className="mt-4 text-muted-foreground">Powerful tools for enterprise content management</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-xl border border-border/40 bg-card/30 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{tool.title}</h3>
                </div>
                <ul className="space-y-4">
                  {tool.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default PostScheduling