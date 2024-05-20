import React, { useState } from 'react';
import { BarChart } from 'lucide-react';
const Header: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className={`top-0 z-10 fixed h-[4.5rem] px-16 flex flex-row items-center w-full select-none sm:px-8 max-sm:px-4 ${toggleMenu ? 'bg-background' : 'backdrop-blur supports-[backdrop-filter]:bg-background/10'}`}>
            <div className="nav-content flex flex-row items-center justify-between w-full">
                <div className="nav-logo">
                    <h1 className='font-bold font-lustria text-3xl text-[#ffc354]'>J&P</h1>
                </div>
                <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10">
                    <a href="#location" className="text-[#ffc354] transition-colors hover:text-[#ffc354]/80 lg:block uppercase font-lustria font-medium">
                        Localização
                    </a>
                    <a href="#presence" className="text-[#ffc354] transition-colors hover:text-[#ffc354]/80 lg:block uppercase font-lustria font-medium">
                        Confirmar Presença
                    </a>
                </div>
                <div className="lg:hidden flex flex-row items-center justify-center gap-6">
                    <div className='lg:hidden flex flex-row justify-center items-center' onClick={() => setToggleMenu(!toggleMenu)}>
                        <BarChart size={35} color='#ffc354' strokeWidth={1.6} style={{
                            rotate: '270deg'
                        }} />
                    </div>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`fixed z-40 w-[100vw] sm:w-[75vw] left-0 top-[4.5rem] sm:border-r sm:rounded-br-xl border-b border-border bg-background border overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0 border-none" : "h-[245px] flex border border-b border-border"}`}>
                    <div className="mt-20 px-4 sm:px-10 my-auto">
                        <div className="flex flex-col gap-4 font-bold tracking-wider items-center">
                            <a href="#location" className="text-[#ffc354] transition-colors hover:text-[#ffc354]/80 lg:block uppercase font-lustria font-medium">
                                Localização
                            </a>

                            <a href="#presence" className="text-[#ffc354] transition-colors hover:text-[#ffc354]/80 lg:block uppercase font-lustria font-medium">
                                Confirmar Presença
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;