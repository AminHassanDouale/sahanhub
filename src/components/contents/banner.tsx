import Link from 'next/link'
import { Button } from '../ui/button'
import Icons from '../ui/icons'
import AnimationContainer from "../utils/animation-container"

const Banner = () => {
    return (
        <div className="flex flex-col relative items-center justify-center mx-auto max-w-5xl w-full py-20 lg:pb-40">
            <AnimationContainer className="flex relative items-center justify-center w-full border-2 border-b-blue-600/40 border-x-blue-600/30 border-t-blue-600/20 rounded-2xl p-5 md:p-8 lg:p-12 lg:rounded-3xl bg-background backdrop-blur-md overflow-hidden">
                <div className="absolute w-full h-4 rounded-full blur-[8.5rem] bg-primary top-0 inset-x-0"></div>
                <div className="absolute w-full h-12 rounded-full blur-[10.5rem] bg-blue-600 bottom-0 inset-x-0"></div>

                <div className="absolute blur-[10.5rem] bottom-1/4 left-16 hidden lg:flex items-center justify-center">
                    <Icons.icon className="w-10 h-10" />
                </div>
                <div className="absolute blur-[10.5rem] top-1/4 left-28 hidden lg:flex items-center justify-center">
                    <Icons.icon2 className="w-10 h-10" />
                </div>
                <div className="absolute blur-[10.5rem] bottom-1/3 right-12 hidden lg:flex items-center justify-center">
                    <Icons.logo className="w-10 h-10" />
                </div>
                <div className="absolute blur-[10.5rem] top-1/3 right-32 hidden lg:flex items-center justify-center">
                    <Icons.social1 className="w-10 h-10" />
                </div>

                <div className="flex flex-col items-center justify-center max-w-2xl mx-auto py-5 lg:py-8">
                    <h2 className="text-2xl lg:text-4xl xl:text-5xl font-semibold text-center !leading-tight">
                        Transform Your Business with Advanced Technology Solutions
                    </h2>
                    <p className="mt-6 text-center text-muted-foreground max-w-lg">
                        Expert consulting and custom software development to drive your digital transformation. <span className="hidden lg:inline-flex">
                            From AI implementation to data analytics, we deliver results that matter.
                        </span>
                    </p>
                    <Button size="lg" className="mt-6" asChild>
                        <Link href="/contact">
                            Schedule a Consultation
                        </Link>
                    </Button>
                </div>
            </AnimationContainer>
        </div>
    )
}

export default Banner