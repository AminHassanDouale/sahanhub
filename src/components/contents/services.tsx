import { Code, Database, Brain, LineChart, Shield, Cog } from 'lucide-react';
import AnimationContainer from "../utils/animation-container";

const Services = () => {
    return (
        <div className="flex items-center justify-center w-full py-20">
            <div className="flex flex-col items-center w-full">
                <AnimationContainer>
                    <div className="grid w-full place-items-center grid-cols-1 p-6 md:p-8 md:grid-cols-[.55fr_1fr] rounded-2xl bg-[#121212]/50 border border-border">
                        <div className="flex flex-col items-start justify-center lg:pl-6">
                            <h4 className="text-xl font-semibold lg:text-2xl">
                                Technology Solutions & Consulting
                            </h4>
                            <p className="mt-4 text-neutral-500 lg:text-lg">
                                Sahan Hub delivers comprehensive technology solutions and strategic consulting to transform your business operations.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-around w-full gap-8 mt-8 sm:mt-0 lg:py-4">
                            {[
                                { icon: Code, title: "Custom Development" },
                                { icon: Database, title: "Data Strategy" },
                                { icon: Brain, title: "AI Solutions" }
                            ].map((item, index) => (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <item.icon className="w-12 h-12 text-primary" />
                                    <span className="text-sm font-medium">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.1}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 mt-8">
                        <div className="flex flex-col items-start w-full px-6 py-6 border border-border bg-[#121212]/50 rounded-2xl lg:px-8 lg:py-6">
                            <div className="flex items-center justify-center w-full mb-6">
                                <Shield className="w-16 h-16 text-primary" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h5 className="text-xl font-semibold lg:text-2xl">
                                    Strategic Technology Consulting
                                </h5>
                                <p className="mt-2 text-neutral-500">
                                    Expert guidance on technology stack, digital transformation, and security compliance.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full px-6 py-6 border border-border bg-[#121212]/50 rounded-2xl lg:px-8 lg:py-8">
                            <div className="flex items-center justify-center w-full mb-6">
                                <LineChart className="w-16 h-16 text-primary" />
                            </div>
                            <h5 className="text-xl font-semibold lg:text-2xl">
                                Data Analytics & BI
                            </h5>
                            <p className="mt-2 text-neutral-500">
                                Transform your data into actionable insights with advanced analytics and visualization.
                            </p>
                        </div>
                    </div>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8 mt-8">
                        <div className="flex flex-col items-start w-full p-6 border lg:p-8 border-border bg-[#121212]/50 rounded-2xl">
                            <div className="flex items-center justify-center w-full mb-6">
                                <Brain className="w-16 h-16 text-primary" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h5 className="text-xl font-semibold lg:text-2xl">
                                    AI & Machine Learning
                                </h5>
                                <p className="mt-2 text-neutral-500">
                                    Implement cutting-edge AI solutions to automate processes and enhance decision-making.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-full p-6 border lg:p-8 border-border bg-[#121212]/50 rounded-2xl">
                            <div className="flex items-center justify-center w-full mb-6">
                                <Cog className="w-16 h-16 text-primary" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h5 className="text-xl font-semibold lg:text-2xl">
                                    Process Optimization
                                </h5>
                                <p className="mt-2 text-neutral-500">
                                    Streamline operations with custom software solutions and workflow automation.
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimationContainer>
            </div>
        </div>
    )
};

export default Services; 