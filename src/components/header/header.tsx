import React, { useState } from 'react';
import { BarChart } from 'lucide-react';
const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    return (
        <nav className={`top-0 z-10 fixed h-[4.5rem] px-16 flex flex-row items-center w-full select-none sm:px-8 max-sm:px-4 ${toggleMenu ? 'bg-background' : 'backdrop-blur supports-[backdrop-filter]:bg-background/10'}`}>
            <div className="nav-content flex flex-row items-center justify-between w-full">
                <div className="nav-logo">
                    <h1 className='font-bold font-lustria text-3xl'>J&P</h1>
                </div>
                <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10">
                    <a href="#" className="text-white/100 transition-colors hover:text-white/80 lg:block uppercase font-lustria font-medium">
                        Localização
                    </a>
                    <a href="#" className="text-white/100 transition-colors hover:text-white/80 lg:block uppercase font-lustria font-medium">
                        Detalhes
                    </a>
                    <a href="#" className="text-white/100 transition-colors hover:text-white/80 lg:block uppercase font-lustria font-medium">
                        Confirmar Presença
                    </a>
                </div>
                <div className="lg:hidden flex flex-row items-center justify-center gap-6">
                    <div className='lg:hidden flex flex-row justify-center items-center' onClick={() => setToggleMenu(!toggleMenu)}>
                        <BarChart size={35} strokeWidth={1.6} style={{
                            rotate: '270deg'
                        }} />
                    </div>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`fixed z-40 w-[100vw] sm:w-[75vw] left-0 top-[4.5rem] sm:border-r sm:rounded-br-xl border-b border-border bg-background overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-[345px]"}`}>
                    <div className="py-4 px-4 sm:px-10">
                        <div className="flex flex-col gap-4 font-bold tracking-wider">
                            <a href="#" className="border-l-4 border-secondary text-foreground/100 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                <span className='ml-2'></span>
                            </a>

                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">

                            </a>

                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">

                            </a>
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">

                            </a>
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">

                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
    // return (
    //     <nav className='fixed w-full h-20 backdrop-blur supports-[backdrop-filter]:bg-background/10'>
    //         <div className='flex flex-row w-full justify-between px-5'>
    //             <h1></h1>
    //         </div>
    //     </nav>
    // );
};

export default Header;