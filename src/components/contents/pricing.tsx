"use client";

import { cn } from '@/lib/utils';
import { CircleArrowUp, CreditCard, Shield, Headset, Check } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import AnimationContainer from "../utils/animation-container";

interface PricingPlan {
    id: number;
    title: string;
    priceMonthlyUSD: string;
    priceYearlyUSD: string;
    priceMonthlyDJF: string;
    priceYearlyDJF: string;
    buttonText: string;
    features: string[];
}

const plans: PricingPlan[] = [
    {
        id: 1,
        title: "Essential",
        priceMonthlyUSD: "$2,999",
        priceYearlyUSD: "$29,999",
        priceMonthlyDJF: "DJF 532,000",
        priceYearlyDJF: "DJF 5,320,000",
        buttonText: "Start Project",
        features: [
            "Custom Software Development",
            "Basic Data Analytics",
            "Technology Stack Evaluation",
            "Cloud Infrastructure Setup",
            "3 Months Support & Maintenance",
            "Basic Security Implementation",
            "Documentation & Knowledge Transfer"
        ]
    },
    {
        id: 2,
        title: "Professional",
        priceMonthlyUSD: "$4,999",
        priceYearlyUSD: "$49,999",
        priceMonthlyDJF: "DJF 887,000",
        priceYearlyDJF: "DJF 8,870,000",
        buttonText: "Contact Sales",
        features: [
            "Advanced Software Solutions",
            "Data Analytics & BI Dashboard",
            "ML/AI Implementation",
            "Process Automation & Optimization",
            "Digital Transformation Roadmap",
            "12 Months Premium Support",
            "ROI Analysis & Strategy Planning"
        ]
    },
    {
        id: 3,
        title: "Enterprise",
        priceMonthlyUSD: "Custom",
        priceYearlyUSD: "Custom",
        priceMonthlyDJF: "Contact Us",
        priceYearlyDJF: "Contact Us",
        buttonText: "Contact Us",
        features: [
            "Full Digital Transformation",
            "Custom AI/ML Solutions",
            "Data Strategy Consulting",
            "Enterprise Architecture Planning",
            "24/7 Priority Support",
            "Dedicated Project Manager",
            "Change Management & Training"
        ]
    }
];

type Plan = "monthly" | "annually";
type Currency = "USD" | "DJF";

const Pricing = () => {
    const [billPlan, setBillPlan] = useState<Plan>("monthly");
    const [currency, setCurrency] = useState<Currency>("USD");

    const handleSwitch = () => {
        setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
    };

    const getPrice = (plan: PricingPlan) => {
        if (currency === "USD") {
            return billPlan === "monthly" ? plan.priceMonthlyUSD : plan.priceYearlyUSD;
        }
        return billPlan === "monthly" ? plan.priceMonthlyDJF : plan.priceYearlyDJF;
    };

    return (
        <div className="relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto">
            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <AnimationContainer className="flex flex-col items-center justify-center">
                    <Badge size="lg" variant="outline">
                        <Shield className="w-4 h-4" />
                        <span className="ml-2 text-sm">Technology Solutions</span>
                    </Badge>
                    <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                        Transform Your Business with SAHAN HUB
                    </h2>
                    <p className="max-w-lg mt-6 text-center text-neutral-500">
                        From custom software development to strategic consulting, we provide comprehensive technology solutions to drive your business forward.
                    </p>
                </AnimationContainer>

                <AnimationContainer delay={0.2}>
                    <div className="flex flex-col items-center justify-center mt-6 space-y-4">
                        <div className="flex items-center justify-center space-x-4">
                            <Button 
                                variant={currency === "USD" ? "default" : "outline"} 
                                size="sm"
                                onClick={() => setCurrency("USD")}
                            >
                                USD
                            </Button>
                            <Button 
                                variant={currency === "DJF" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setCurrency("DJF")}
                            >
                                DJF
                            </Button>
                        </div>
                        <div className="flex items-center justify-center space-x-4">
                            <span className="text-base font-medium">Monthly</span>
                            <button onClick={handleSwitch} className="relative rounded-full focus:outline-none">
                                <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-primary"></div>
                                <div
                                    className={cn(
                                        "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-200 ease-in-out top-1 left-1 rounded-full bg-white",
                                        billPlan === "annually" ? "translate-x-6" : "translate-x-0"
                                    )}
                                />
                            </button>
                            <span className="text-base font-medium">Annually</span>
                            {billPlan === "annually" && (
                                <span className="ml-2 text-sm text-primary">Save 20%</span>
                            )}
                        </div>
                    </div>
                </AnimationContainer>
            </div>

            <div className="grid w-full grid-cols-1 gap-8 pt-8 lg:grid-cols-3 md:pt-12 lg:pt-16">
                {plans.map((plan, idx) => (
                    <AnimationContainer key={idx} delay={0.1 * idx + 0.1}>
                        <Plan key={plan.id} plan={plan} billPlan={billPlan} getPrice={getPrice} />
                    </AnimationContainer>
                ))}
            </div>

            <div className="flex items-center w-full mt-8 lg:justify-evenly flex-wrap justify-center gap-6 lg:mt-10">
                <AnimationContainer delay={0.2} className="flex items-center gap-x-2">
                    <CreditCard className="w-5 h-5 text-primaryLighter-foreground" />
                    <span className="text-neutral-500">Flexible payment options</span>
                </AnimationContainer>
                <AnimationContainer delay={0.25} className="flex items-center gap-x-2">
                    <Headset className="w-5 h-5 text-primaryLighter-foreground" />
                    <span className="text-neutral-500">Expert technical support</span>
                </AnimationContainer>
                <AnimationContainer delay={0.3} className="flex items-center gap-x-2">
                    <CircleArrowUp className="w-5 h-5 text-primaryLighter-foreground" />
                    <span className="text-neutral-500">Continuous optimization</span>
                </AnimationContainer>
            </div>
        </div>
    );
};

const Plan = ({ 
    plan, 
    billPlan,
    getPrice 
}: { 
    plan: PricingPlan; 
    billPlan: Plan;
    getPrice: (plan: PricingPlan) => string;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col rounded-2xl border cursor-pointer transition-all bg-background items-start w-full select-none h-full",
                plan.title === "Professional" ? "border-primary/60 hover:border-primary" : "border-border/60 hover:border-muted-foreground/50"
            )}
        >
            <div
                className={cn(
                    "p-4 md:p-8 flex rounded-2xl flex-col items-start rounded-b-none border-b border-border/60 w-full relative",
                    plan.title === "Professional" ? "bg-primary/10" : "bg-neutral-500/10"
                )}
            >
                <span className="font-medium text-muted-foreground">{plan.title}</span>
                <h3 className="mt-4 text-xl font-medium md:text-2xl">{getPrice(plan)}</h3>
                <span className="mt-2 text-sm text-neutral-500">
                    {plan.priceMonthlyUSD === "Custom" ? "Custom pricing" : billPlan === "monthly" ? "per month" : "per year"}
                </span>
                {plan.title === "Professional" && (
                    <span className="absolute border border-primary/60 bg-primary/20 top-3 right-3 rounded-full px-3 py-1.5 text-xs text-primary">
                        Most Popular
                    </span>
                )}
            </div>
            <div className="flex flex-col items-start w-full p-5 gap-y-4">
                {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center justify-start gap-2">
                        <div
                            className={cn(
                                "flex items-center justify-center w-5 h-5 rounded-full",
                                plan.title === "Professional" ? "bg-primary/20" : "bg-neutral-500/20"
                            )}
                        >
                            <Check
                                className={cn(
                                    "w-3 h-3",
                                    plan.title === "Professional" ? "text-primary" : "text-neutral-600"
                                )}
                            />
                        </div>
                        <span className="text-neutral-500">{feature}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-start w-full px-4 pt-2 pb-5 md:pb-6 md:px-6">
                <Button size="lg" variant={plan.title === "Professional" ? "default" : "outline"} className="w-full">
                    {plan.buttonText}
                </Button>
                <span className="px-2 mt-4 text-sm text-muted-foreground">Customizable solutions</span>
            </div>
        </div>
    );
};

export default Pricing;