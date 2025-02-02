"use client";

import { LucideIcon, Code, Database, Brain, LineChart, Shield, Cog, Link, Clock, Laptop, Search, CircleDollarSign, Zap } from 'lucide-react';
import { Badge } from '../ui/badge';
import AnimationContainer from "../utils/animation-container";

interface ItemProps {
    title: string;
    icon: LucideIcon;
}

interface FeatureProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

const capabilities: { id: number; title: string; icon: LucideIcon; }[] = [
    { id: 1, title: "Custom Development", icon: Code },
    { id: 2, title: "Data Analytics", icon: LineChart },
    { id: 3, title: "AI Solutions", icon: Brain },
    { id: 4, title: "Cloud Migration", icon: Database },
    { id: 5, title: "Security", icon: Shield },
    { id: 6, title: "Integration", icon: Link },
    { id: 7, title: "Process Automation", icon: Cog },
    { id: 8, title: "24/7 Support", icon: Clock }
];

const features: { id: number; title: string; description: string; icon: LucideIcon; }[] = [
    {
        id: 1,
        title: "Technical Excellence",
        description: "Custom software development and system integration tailored to your business needs",
        icon: Laptop
    },
    {
        id: 2,
        title: "Data-Driven Insights",
        description: "Transform raw data into actionable business intelligence through advanced analytics",
        icon: Search
    },
    {
        id: 3,
        title: "Cost Optimization",
        description: "Optimize operations and reduce costs through efficient technology solutions",
        icon: CircleDollarSign
    },
    {
        id: 4,
        title: "Rapid Innovation",
        description: "Accelerate digital transformation with cutting-edge AI and automation",
        icon: Zap
    }
];

const Features = () => {
    return (
        <div className="relative flex flex-col items-center justify-center py-20">
            <div className="absolute -top-1/10 -left-1/5 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <AnimationContainer delay={0.5}>
                <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                    <Badge size="lg" variant="outline">
                        <Shield className="w-4 h-4" />
                        <span className="ml-2 text-sm">
                            Enterprise Solutions
                        </span>
                    </Badge>
                    <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                        Comprehensive Technology Solutions
                    </h2>
                    <p className="max-w-lg mt-6 text-center text-neutral-500">
                        Sahan Hub delivers end-to-end technology consulting and implementation services to transform your business.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer delay={0.2}>
                <div className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-8 overflow-x-hidden lg:mt-10 mask-2">
                    <div className="flex-wrap items-center justify-center hidden w-full gap-4 lg:flex lg:gap-8 lg:ml-40">
                        {capabilities.slice(0, 4).map((item) => (
                            <Item key={item.id} title={item.title} icon={item.icon} />
                        ))}
                    </div>
                    <div className="flex-wrap items-center justify-center hidden w-full gap-4 mt-4 lg:flex lg:gap-8">
                        {capabilities.slice(4).map((item) => (
                            <Item key={item.id} title={item.title} icon={item.icon} />
                        ))}
                    </div>
                    <div className="relative flex max-w-xs gap-4 mx-auto mt-4 overflow-x-hidden sm:max-w-sm md:max-w-md lg:hidden">
                        <div className="flex gap-4 animate-marquee whitespace-nowrap">
                            {capabilities.map((item) => (
                                <Item key={item.id} title={item.title} icon={item.icon} />
                            ))}
                        </div>
                        <div className="absolute top-0 flex gap-4 ml-4 animate-marquee2 whitespace-nowrap">
                            {capabilities.map((item) => (
                                <Item key={item.id} title={item.title} icon={item.icon} />
                            ))}
                        </div>
                    </div>
                </div>
            </AnimationContainer>

            <div className="relative flex flex-col items-center justify-center w-full h-full mt-20">
                <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-20">
                    <div className="flex flex-col items-center justify-start w-full gap-10 md:gap-20 md:justify-center">
                        {features.slice(0, 2).map((feature, idx) => (
                            <AnimationContainer key={idx} delay={0.1 * idx}>
                                <Feature
                                    key={feature.id}
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                />
                            </AnimationContainer>
                        ))}
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-10 md:gap-20 md:justify-center">
                        {features.slice(2).map((feature, idx) => (
                            <AnimationContainer key={idx} delay={0.1 * idx}>
                                <Feature
                                    key={feature.id}
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                />
                            </AnimationContainer>
                        ))}
                    </div>
                </div>
                <div className="bottom-0 flex items-center w-full mt-20 justify-evenly lg:mt-auto">
                    <AnimationContainer delay={0.3} className="flex flex-col items-center">
                        <h3 className="text-2xl font-medium text-transparent md:text-4xl bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text">
                            50+
                        </h3>
                        <span className="text-sm text-muted-foreground">
                            Enterprise Clients
                        </span>
                    </AnimationContainer>
                    <AnimationContainer delay={0.35} className="flex flex-col items-center">
                        <h3 className="text-2xl font-medium text-transparent md:text-4xl bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text">
                            100+
                        </h3>
                        <span className="text-sm text-muted-foreground">
                            Projects Delivered
                        </span>
                    </AnimationContainer>
                    <AnimationContainer delay={0.4} className="flex flex-col items-center">
                        <h3 className="text-2xl font-medium text-transparent md:text-4xl bg-gradient-to-b from-neutral-50 to-neutral-600 bg-clip-text">
                            95%
                        </h3>
                        <span className="text-sm text-muted-foreground">
                            Client Satisfaction
                        </span>
                    </AnimationContainer>
                </div>
            </div>
        </div>
    )
};

const Item = ({ title, icon: Icon }: ItemProps) => {
    return (
        <div className="flex flex-col items-center justify-center select-none">
            <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-6 h-6 border rounded-sm bg-primary/20 border-primary">
                    <Icon className="w-3 h-3 text-neutral-50" />
                </div>
                <span className="text-sm font-normal text-neutral-100">
                    {title}
                </span>
            </div>
        </div>
    )
};

const Feature = ({ title, description, icon: Icon }: FeatureProps) => {
    return (
        <div className="flex flex-col items-start justify-start w-full p-4 md:items-center md:justify-center opacity-70 md:p-0 hover:opacity-100">
            <div className="flex items-center justify-center w-10 h-10 border rounded-lg bg-primary/20 border-primary">
                <Icon className="w-5 h-5 text-white" />
            </div>
            <span className="mt-5 text-base font-medium text-neutral-100">
                {title}
            </span>
            <p className="max-w-xs mt-2 text-sm text-muted-foreground text-start md:text-center">
                {description}
            </p>
        </div>
    )
};

export default Features;