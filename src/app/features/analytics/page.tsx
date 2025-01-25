"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, Settings, BarChart, Tags, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import AnimationContainer from "@/components/utils/animation-container"

const PostScheduling = () => {
  const features = [
    {
      title: "Automated Scheduling",
      icon: <Calendar className="w-6 h-6" />,
      color: "bg-blue-500/10",
      textColor: "text-blue-500",
      description: "Schedule posts across multiple platforms",
      details: ["Bulk scheduling", "Time zone optimization", "Calendar view"]
    },
    {
      title: "Analytics Integration",
      icon: <BarChart className="w-6 h-6" />,
      color: "bg-green-500/10",
      textColor: "text-green-500",
      description: "Track performance and engagement metrics",
      details: ["Real-time tracking", "Custom reports", "Engagement analysis"]
    },
    {
      title: "Team Collaboration",
      icon: <Users className="w-6 h-6" />,
      color: "bg-purple-500/10",
      textColor: "text-purple-500",
      description: "Streamline team workflows and approvals",
      details: ["Role management", "Approval workflows", "Team analytics"]
    }
  ]

  const benefits = [
    {
      title: "Time Management",
      items: [
        "Save 10+ hours weekly on content scheduling",
        "Optimize posting times automatically",
        "Streamline approval processes"
      ]
    },
    {
      title: "Performance",
      items: [
        "Increase engagement by 40%",
        "Optimize content timing",
        "Track ROI metrics"
      ]
    }
  ]

  return (
    <div className="flex flex-col relative w-full min-h-screen">
      <div className="absolute flex sm:hidden w-72 h-72 rounded-full bg-primary blur-[10rem] -top-16 left-0 -z-10"></div>
      <div className="absolute hidden sm:flex w-[500px] h-[500px] rounded-full bg-primary/40 blur-[10rem] -top-24 -right-24 -z-10"></div>

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
                Content Management
              </Badge>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-500"
            >
              Advanced Post Scheduling
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Streamline your content workflow with intelligent scheduling and analytics
            </motion.p>
          </div>
        </div>
      </AnimationContainer>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
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
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimationContainer>
          ))}
        </div>
      </div>

      <AnimationContainer className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Key Benefits
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 rounded-xl border border-border/40 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default PostScheduling