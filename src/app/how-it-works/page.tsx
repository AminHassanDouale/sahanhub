"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Database, Gauge, LineChart, Lock, Server } from "lucide-react"
import Image from "next/image"
import AnimationContainer from "@/components/utils/animation-container"

const HowItWorks = () => {
  const steps = [
    {
      title: "Consultation & Analysis",
      description: "We analyze your business needs and develop a tailored technology roadmap",
      icon: <Gauge className="w-6 h-6" />,
      color: "bg-blue-500/10",
      textColor: "text-blue-500"
    },
    {
      title: "Solution Design",
      description: "Our experts architect custom solutions integrating the latest technologies",
      icon: <Code2 className="w-6 h-6" />,
      color: "bg-green-500/10",
      textColor: "text-green-500"
    },
    {
      title: "Development & Implementation",
      description: "Agile development with continuous testing and refinement",
      icon: <Server className="w-6 h-6" />,
      color: "bg-purple-500/10", 
      textColor: "text-purple-500"
    },
    {
      title: "Data Integration",
      description: "Seamless integration of your data systems and analytics",
      icon: <Database className="w-6 h-6" />,
      color: "bg-orange-500/10",
      textColor: "text-orange-500"
    }
  ]

  return (
    <div className="flex flex-col relative w-full min-h-screen">
      <div className="absolute flex sm:hidden w-72 h-72 rounded-full bg-primary blur-[10rem] -top-16 left-0 -z-10"></div>
      <div className="absolute hidden sm:flex w-[500px] h-[500px] rounded-full bg-primary/40 blur-[10rem] -top-24 -right-24 -z-10"></div>
      <div className="absolute hidden sm:flex w-[500px] h-[500px] rounded-full bg-primary/40 blur-[10rem] -bottom-24 -left-24 -z-10"></div>
      {/* Hero Section */}
      <AnimationContainer className="relative py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold"
            >
              How We Transform Your Business
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Our proven methodology combines expert consultation, cutting-edge technology, 
              and agile implementation to deliver transformative results.
            </motion.p>
          </div>
        </div>
      </AnimationContainer>

      {/* Process Steps */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <AnimationContainer key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 rounded-xl border border-border/40 backdrop-blur-sm"
              >
                <div className={`w-12 h-12 rounded-lg ${step.color} ${step.textColor} flex items-center justify-center`}>
                  {step.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </motion.div>
            </AnimationContainer>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <AnimationContainer className="bg-gradient-to-b from-background to-background/80 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Measurable Results</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-1 mr-2 text-primary" />
                  <p className="text-muted-foreground">Increased operational efficiency by up to 40%</p>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-1 mr-2 text-primary" />
                  <p className="text-muted-foreground">Reduced IT infrastructure costs by 30%</p>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 mt-1 mr-2 text-primary" />
                  <p className="text-muted-foreground">Enhanced data security and compliance</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/10 rounded-2xl overflow-hidden">
                <LineChart className="w-full h-full opacity-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </AnimationContainer>

      {/* Security Section */}
      <AnimationContainer className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <Lock className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold">Enterprise-Grade Security</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Your data security is our top priority. We implement industry-leading security measures
              and comply with international standards.
            </p>
          </div>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default HowItWorks