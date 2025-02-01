"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LucideIcon, Rocket, Brain, Target, Shield, TrendingUp, Database, Code, Users } from 'lucide-react';
import AnimationContainer from "../utils/animation-container";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

interface OutcomeMetricProps {
  value: string;
  label: string;
  delay: number;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, delay }) => (
  <AnimationContainer delay={delay} className="w-full">
    <div className="flex flex-col h-full p-6 transition-all rounded-2xl border hover:border-primary/60 bg-background">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 rounded-lg bg-primary/10">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-neutral-500">{description}</p>
    </div>
  </AnimationContainer>
);

const OutcomeMetric: React.FC<OutcomeMetricProps> = ({ value, label, delay }) => (
  <AnimationContainer delay={delay} className="text-center">
    <div className="mb-2 text-3xl font-bold text-primary">{value}</div>
    <div className="text-sm text-neutral-500">{label}</div>
  </AnimationContainer>
);

const PromotionalShowcase: React.FC = () => {
  const features: Feature[] = [
    {
      icon: Rocket,
      title: "Digital Transformation",
      description: "Revolutionize your business with cutting-edge technology solutions tailored to your needs."
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to gain competitive advantages and insights."
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable intelligence with our advanced analytics solutions."
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Build scalable, secure, and efficient software solutions designed for your specific requirements."
    }
  ];

  const metrics: OutcomeMetricProps[] = [
    { value: "95%", label: "Client Satisfaction", delay: 0.1 },
    { value: "500+", label: "Projects Delivered", delay: 0.2 },
    { value: "40%", label: "Cost Reduction", delay: 0.3 },
    { value: "24/7", label: "Expert Support", delay: 0.4 }
  ];

  const trustIndicators: { icon: LucideIcon; text: string; delay: number }[] = [
    { icon: Target, text: "Industry Expertise", delay: 0.5 },
    { icon: Users, text: "Dedicated Support Team", delay: 0.6 },
    { icon: TrendingUp, text: "Proven Results", delay: 0.7 }
  ];

  return (
    <div className="relative flex flex-col items-center justify-center max-w-6xl py-20 mx-auto px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center mb-16">
        <AnimationContainer className="flex flex-col items-center justify-center">
          <Badge variant="outline" className="mb-6">
            <Shield className="w-4 h-4" />
            <span className="ml-2 text-sm">Transform Your Business</span>
          </Badge>
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Innovate. Transform. Succeed.
          </h1>
          <p className="text-lg text-neutral-500 mb-8">
            Join the digital revolution with SAHAN HUB's comprehensive technology solutions and expert consulting services.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Schedule Consultation</Button>
            <Button size="lg" variant="outline">View Solutions</Button>
          </div>
        </AnimationContainer>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full mb-16">
        {metrics.map((metric, index) => (
          <OutcomeMetric key={index} {...metric} />
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-16">
        {features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={0.1 * idx}
          />
        ))}
      </div>

      {/* Call to Action */}
      <AnimationContainer delay={0.4} className="w-full">
        <div className="relative w-full p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-600/10 border border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Ready to Transform Your Business?</h3>
              <p className="text-neutral-500">Let&apos;s discuss how SAHAN HUB can drive your success</p>
            </div>
            <Button size="lg" className="whitespace-nowrap">
              Get Started Today
            </Button>
          </div>
        </div>
      </AnimationContainer>

      {/* Trust Indicators */}
      <div className="flex items-center w-full mt-12 justify-evenly flex-wrap gap-6">
        {trustIndicators.map((indicator, idx) => (
          <AnimationContainer key={idx} delay={indicator.delay} className="flex items-center gap-x-2">
            <indicator.icon className="w-5 h-5 text-primary" />
            <span className="text-neutral-500">{indicator.text}</span>
          </AnimationContainer>
        ))}
      </div>
    </div>
  );
};

export default PromotionalShowcase;