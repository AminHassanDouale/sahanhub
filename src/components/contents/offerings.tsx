"use client";

import { LucideIcon, Code, Database, Brain, LineChart, Shield, Cog } from 'lucide-react';
import { Badge } from '../ui/badge';
import AnimationContainer from "../utils/animation-container";

interface Props {
    title: string;
    description: string;
    icon: LucideIcon;
}

const offerings = [
    {
        id: 1,
        title: "Custom Software Development",
        description: "Tailored solutions to meet your unique business requirements with modern technology stack.",
        icon: Code
    },
    {
        id: 2,
        title: "Data Strategy & Analytics",
        description: "Transform your data into actionable insights with advanced analytics and visualization.",
        icon: LineChart
    },
    {
        id: 3,
        title: "AI & Machine Learning",
        description: "Leverage cutting-edge AI solutions to automate processes and enhance decision-making.",
        icon: Brain
    },
    {
        id: 4,
        title: "Cloud Solutions",
        description: "Secure and scalable cloud infrastructure with seamless migration strategies.",
        icon: Database
    },
    {
        id: 5,
        title: "Security & Compliance",
        description: "Protect your digital assets with robust security measures and compliance frameworks.",
        icon: Shield
    },
    {
        id: 6,
        title: "Process Optimization",
        description: "Streamline operations with automated workflows and efficient system integration.",
        icon: Cog
    }
];

const Offerings = () => {
    return (
        <div className="flex flex-col relative items-center justify-center py-20">
            <div className="hidden lg:block absolute -bottom-1/4 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

            <AnimationContainer>
                <div className="flex flex-col items-center justify-center mx-auto max-w-2xl">
                    <Badge size="lg" variant="outline">
                        <Shield className="w-4 h-4" />
                        <span className="ml-2 text-sm">
                            Enterprise Solutions
                        </span>
                    </Badge>
                    <h2 className="text-2xl mt-6 lg:text-3xl font-semibold text-center xl:text-4xl">
                        Comprehensive Technology Solutions
                    </h2>
                    <p className="mt-6 text-center text-neutral-500 max-w-lg">
                        Transform your business with our end-to-end technology consulting and implementation services.
                    </p>
                </div>
            </AnimationContainer>

            <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl gap-8 mt-16">
                {offerings.map((offering, index) => (
                    <AnimationContainer key={offering.id} delay={0.1 * index + 0.1}>
                        <div className="h-full">
                            <Offering key={offering.id} {...offering} />
                        </div>
                    </AnimationContainer>
                ))}
            </div>
        </div>
    )
};

const Offering = ({ title, description, icon: Icon }: Props) => {
    return (
        <div className="flex flex-col h-full p-8 rounded-lg border border-border bg-[#121212]/50 hover:bg-[#121212]/70 transition-colors">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/20 border border-primary rounded-lg">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mt-6">
                {title}
            </h3>
            <p className="text-sm text-muted-foreground mt-4 flex-grow">
                {description}
            </p>
        </div>
    )
};

export default Offerings;