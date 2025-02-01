"use client";

import * as React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
  Code,
  Database,
  Brain,
  LineChart,
  Settings,
  Users,
  Cloud,
  Shield,
  Workflow,
  CircleArrowUp,
  ChevronRight
} from 'lucide-react';
import AnimationContainer from '@/components/utils/animation-container';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon: Icon, delay = 0 }) => (
  <AnimationContainer delay={delay}>
    <div className="rounded-lg border border-border/60 hover:border-foreground/20 bg-background p-6 h-full transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </AnimationContainer>
);

const Badge: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20">
    {children}
  </div>
);

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: "Custom Software Development",
      description: "Build scalable, efficient solutions tailored to your needs",
      icon: Code,
      features: [
        "Full-stack web applications",
        "Mobile app development",
        "API development and integration",
        "Legacy system modernization"
      ]
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights",
      icon: Database,
      features: [
        "Business intelligence dashboards",
        "Data visualization",
        "Predictive analytics",
        "Real-time reporting systems"
      ]
    },
    {
      title: "AI & Machine Learning",
      description: "Leverage AI to drive business innovation",
      icon: Brain,
      features: [
        "Custom AI solutions",
        "Machine learning models",
        "Natural language processing",
        "Computer vision applications"
      ]
    },
    {
      title: "Digital Transformation",
      description: "Guide your business into the digital age",
      icon: Settings,
      features: [
        "Digital strategy development",
        "Process automation",
        "Technology stack modernization",
        "Change management"
      ]
    },
    {
      title: "Cloud Solutions",
      description: "Optimize your infrastructure with cloud technology",
      icon: Cloud,
      features: [
        "Cloud migration strategy",
        "Infrastructure optimization",
        "Serverless architecture",
        "Cloud security implementation"
      ]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets and data",
      icon: Shield,
      features: [
        "Security assessments",
        "Threat monitoring",
        "Compliance implementation",
        "Security training"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <AnimationContainer className="text-center mb-16">
        <Badge>
          <Settings className="w-4 h-4 mr-2" />
          Our Services
        </Badge>
        <h1 className="text-4xl font-bold mb-6 mt-4">
          Comprehensive Technology Solutions
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          From custom software development to strategic consulting, we provide end-to-end solutions to drive your business forward.
        </p>
      </AnimationContainer>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            delay={0.1 * index}
          />
        ))}
      </div>

      {/* Why Choose Us Section */}
      <AnimationContainer delay={0.4}>
        <div className="bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose SAHAN HUB?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/20">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Skilled professionals with deep industry experience</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/20">
                <Workflow className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Proven Process</h3>
                <p className="text-muted-foreground">Efficient, transparent development methodology</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/20">
                <CircleArrowUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Results Driven</h3>
                <p className="text-muted-foreground">Focus on delivering measurable business value</p>
              </div>
            </div>
          </div>
        </div>
      </AnimationContainer>

      {/* CTA Section */}
      <AnimationContainer delay={0.5}>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-muted-foreground mb-6">
            Let&apos; discuss how our services can help you achieve your goals
          </p>
          <div className="flex justify-center gap-4">
          <Link href="/consultation">
              <Button size="lg">
                Schedule Consultation
              </Button>
            </Link>
          
          </div>
        </div>
      </AnimationContainer>
    </div>
  );
};

export default ServicesPage;