"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { AnimatePresence, motion } from 'framer-motion';
import { Spin as Hamburger } from 'hamburger-react';
import { ArrowRight, Box, CalendarClock, Captions, CircleHelp, CopyCheck, FileText, Gem, Layers3, LineChart, Newspaper, UserCog, Waypoints } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Icons from '../ui/icons';

const MobileNavbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    };

    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        };

        handleBodyOverflow();

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <div className="relative flex w-full h-16 backdrop-blur-md lg:hidden">
            <div className="relative flex items-center justify-between w-full px-5">

                <Link href="/">
                    <Icons.logo className="w-auto h-6" />
                </Link>

                <div className="relative flex z-[99999] items-center">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setIsOpen}
                        color="#fff"
                        direction='left'
                        distance='md'
                        size={20}
                        rounded
                    />
                </div>

                <AnimatePresence presenceAffectsLayout>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate={isOpen ? "open" : "closed"}
                            variants={variants}
                            transition={{
                                type: "spring",
                                bounce: 0.15,
                                duration: 0.5,
                            }}
                            className="absolute z-[9999] rounded-lg w-full min-h-screen h-lvh flex flex-col inset-0 bg-background"
                        >
                            <ul className="flex flex-col items-start flex-1 w-full px-6 py-3 pt-20 space-y-3">
                                <li
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-base font-normal transition transform rounded-md cursor-pointer text-foreground text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                >
                                    <Link href="/how-it-works" className="flex items-center w-full text-start">
                                        <UserCog className="w-4 h-4 mr-2" />
                                        How it works
                                    </Link>
                                </li>
                              
                            </ul>

                            <div className="flex flex-col items-center justify-center w-full gap-4 p-6 mt-auto">
                                <Button variant="secondary" className="w-full" asChild>
                                    <Link href="/auth/login" className="w-full">
                                        Login
                                    </Link>
                                </Button>
                                <Button className="w-full" asChild>
                                    <Link href="/auth/register" className="flex items-center w-full">
                                        Start for free
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    )
};

export default MobileNavbar
