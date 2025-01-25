"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Cloud, Database, Code, Bot, Lock, Globe, Zap, Server, Shield, Settings, LineChart, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import AnimationContainer from "@/components/utils/animation-container"
import { useRef } from "react"

const Integrations = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const glowingCard = {
    rest: { scale: 1, boxShadow: "0 0 0px rgba(255,255,255,0)" },
    hover: { 
      scale: 1.02,
      boxShadow: "0 0 20px rgba(255,255,255,0.2)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  }

  const integrations = [
    {
      title: "Cloud Services",
      icon: <Cloud className="w-6 h-6" />,
      color: "bg-blue-500/10",
      textColor: "text-blue-500",
      description: "Enterprise cloud infrastructure and migration",
      features: [
        "AWS/Azure/GCP Integration",
        "Cloud-native Architecture",
        "Scalable Solutions"
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      color: "bg-green-500/10",
      textColor: "text-green-500",
      description: "Advanced data processing and analytics",
      features: [
        "Big Data Processing",
        "ETL Pipelines",
        "Real-time Analytics"
      ]
    },
    {
      title: "Custom Development",
      icon: <Code className="w-6 h-6" />,
      color: "bg-purple-500/10",
      textColor: "text-purple-500",
      description: "Tailored software solutions",
      features: [
        "API Development",
        "Microservices",
        "System Integration"
      ]
    }
  ]

  const services = [
    {
      title: "AI Solutions",
      description: "Enterprise AI implementation",
      icon: <Bot />,
      details: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Predictive Analytics"
      ]
    },
    {
      title: "Security",
      description: "Comprehensive security measures",
      icon: <Shield />,
      details: [
        "End-to-end Encryption",
        "Access Control",
        "Compliance Management"
      ]
    },
    {
      title: "Performance",
      description: "Optimized system performance",
      icon: <Zap />,
      details: [
        "Load Balancing",
        "Caching Systems",
        "Performance Monitoring"
      ]
    },
    {
      title: "Global Scale",
      description: "Worldwide infrastructure",
      icon: <Globe />,
      details: [
        "Global CDN",
        "Multi-region Deployment",
        "24/7 Availability"
      ]
    }
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0"
        >
          <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[100px] animate-pulse -top-24 -right-24" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px] animate-pulse -bottom-24 -left-24" />
          <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] animate-pulse top-1/2 left-1/2" />
        </motion.div>
      </div>

      {/* Hero Section */}
      <AnimationContainer className="relative py-32">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-6xl mx-auto px-4 sm:px-6 text-center"
        >
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mb-6"
          >
            <Badge variant="secondary" className="px-6 py-2 text-base">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mr-2"
              >
                ✨
              </motion.span>
              Enterprise Solutions
            </Badge>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-500"
          >
            SAHAN HUB Platform
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Next-generation enterprise solutions powered by cutting-edge technology
          </motion.p>

          <motion.div
            variants={floatAnimation}
            initial="initial"
            animate="animate"
            className="mt-12"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto opacity-80" />
          </motion.div>
        </motion.div>
      </AnimationContainer>

      {/* Features Grid */}
      <motion.div
        style={{ scale }}
        className="max-w-6xl mx-auto px-4 sm:px-6 py-20"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {integrations.map((item, index) => (
            <motion.div
              key={index}
              variants={glowingCard}
              initial="rest"
              whileHover="hover"
              className="p-8 rounded-xl border border-border/40 bg-black/40 backdrop-blur-xl"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 rounded-lg ${item.color} ${item.textColor} flex items-center justify-center mb-6`}
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground mb-6">{item.description}</p>
              
              <ul className="space-y-4">
                {item.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-5 h-5 text-primary flex-shrink-0"
                    >
                      <Sparkles />
                    </motion.div>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-background via-background/80 to-background"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold">Core Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">Comprehensive enterprise solutions</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={glowingCard}
                initial="rest"
                whileHover="hover"
                className="p-6 rounded-xl border border-border/40 bg-black/40 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-lg bg-primary/10"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="font-semibold">{service.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-4 h-4 text-primary flex-shrink-0"
                      >
                        <Sparkles />
                      </motion.div>
                      <span className="text-muted-foreground">{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Performance Metrics */}
      <AnimationContainer className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold mb-12"
          >
            Platform Performance
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { metric: "99.99%", label: "Uptime Guarantee" },
              { metric: "<100ms", label: "Average Response Time" },
              { metric: "24/7", label: "Enterprise Support" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={glowingCard}
                initial="rest"
                whileHover="hover"
                className="p-6 rounded-xl border border-border/40 bg-black/40 backdrop-blur-xl"
              >
                <div className="flex items-center justify-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 text-primary"
                  >
                    <Sparkles />
                  </motion.div>
                  <div className="text-left">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-2xl font-bold"
                    >
                      {item.metric}
                    </motion.div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-sm text-muted-foreground"
                    >
                      {item.label}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimationContainer>
    </div>
  )
}

export default Integrations