import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Icons from '../ui/icons';
import Menu from './menu';
import MobileNavbar from './mobile-navbar';

const Navbar = () => {
    return (
        <header className="fixed inset-x-0 top-0 z-[999] w-full h-16 backdrop-blur-md b-background/50 bg-[rgba(4,1,2,0.2)] flex">

      
            <div className="hidden lg:flex items-center justify-between w-full px-4 mx-auto lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between w-full flex-nowrap">
                    <div className="flex items-center flex-1 lg:flex-none">
                              {/* Desktop */}
                        <Link href="/" className="text-lg font-semibold text-primary">
                            <Icons.logo className="w-auto h-6" />
                        </Link>
                        <div className="items-center hidden ml-4 lg:flex">
                                                          {/* Desktop */}

                            <Menu />
                        </div>
                    </div>
                
                </div>
            </div>

            {/* Mobile */}
            <MobileNavbar />

        </header>
    )
};

export default Navbar
