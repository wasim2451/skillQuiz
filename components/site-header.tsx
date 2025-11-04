"use client";
import { motion } from 'framer-motion'
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const pathname = usePathname();

    return (
        <div className="w-full fixed z-50">
            <div className='flex justify-center items-center'>
                <nav className="flex flex-col w-full sm:w-[90vw] md:w-[85vw] lg:w-[80vw] xl:w-[75vw] 2xl:w-[65vw] bg-[#1753d4] text-white md:rounded-b-3xl backdrop-blur-md h-[80px] sm:h-[90px] md:h-[100px] lg:h-[110px] xl:h-[120px] shadow-lg md:flex-row md:justify-center">
                    <div className="flex justify-between sm:justify-center items-center px-4 sm:px-6 md:px-0 md:py-2 w-full h-full">
                        {/* Logo - Mobile */}
                        <Link
                            href="/"
                            className={`md:hidden relative group py-3 sm:py-4 px-2 text-sm transition-all ${pathname === "/" ? "text-[#FFE100] font-bold" : "text-white font-semibold"
                                }`}
                        >
                            <div className="w-[180px] sm:w-[220px] h-8 sm:h-10 flex items-center justify-center">
                                <div className="flex items-center justify-start">
                                    <Image
                                        src="/logos/skillLogoT.png"
                                        alt="SkillKwiz Logo"
                                        width={200}
                                        height={30}
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white focus:outline-none z-20"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5 sm:h-6 sm:w-6" />
                            ) : (
                                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                            )}
                        </button>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex md:items-center md:justify-between md:gap-1 lg:gap-2 xl:gap-3 2xl:gap-4 md:flex-nowrap md:w-full md:px-3 lg:px-4 xl:px-6 2xl:px-8">
                            <Link
                                href="/"
                                className={`relative group py-3 lg:py-4 px-2 text-sm lg:text-base transition-all flex-shrink-0 ${pathname === "/"
                                    ? "text-[#FFE100] font-bold"
                                    : "text-white font-semibold"
                                    }`}
                            >
                                <div className="relative flex items-center">
                                    <div className="w-[140px] md:w-[250px] lg:w-[200px] xl:w-[220px] 2xl:w-[280px] h-8 lg:h-10 flex items-center justify-center">
                                        <Image
                                            src="/logos/skillLogoT.png"
                                            alt="SkillKwiz Logo"
                                            width={200}
                                            height={30}
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </Link>

                            <div className="flex items-center gap-1 lg:gap-2 xl:gap-3 2xl:gap-4">
                                <Link
                                    href="/"
                                    className={`relative group py-3 lg:py-4 px-2 lg:px-3 xl:px-3 2xl:px-4 text-sm md:text-[18px] lg:text-base xl:text-lg 2xl:text-xl transition-all ${pathname === "/"
                                        ? "text-[#FFE100] font-semibold"
                                        : "text-white"
                                        }`}
                                >
                                    <span>Home</span>
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-[#FFE100] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </Link>
                                <Link
                                    href="/about"
                                    className={`relative group py-3 lg:py-4 px-2 lg:px-3 xl:px-3 2xl:px-4 text-sm md:text-[18px] lg:text-base xl:text-lg 2xl:text-xl transition-all whitespace-nowrap ${pathname === "/about"
                                        ? "text-[#FFE100] font-semibold"
                                        : "text-white"
                                        }`}
                                >
                                    <span>About Us</span>
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-[#FFE100] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </Link>
                                <Link
                                    href="/services"
                                    className={`relative group py-3 lg:py-4 px-2 lg:px-3 xl:px-3 2xl:px-4 text-sm md:text-[18px] lg:text-base xl:text-lg 2xl:text-xl transition-all ${pathname === "/services"
                                        ? "text-[#FFE100] font-semibold"
                                        : "text-white"
                                        }`}
                                >
                                    <span>Services</span>
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-[#FFE100] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </Link>
                                <Link
                                    href="/blog"
                                    className={`relative group py-3 lg:py-4 px-2 lg:px-3 xl:px-3 2xl:px-4 text-sm md:text-[18px] lg:text-base xl:text-lg 2xl:text-xl transition-all ${pathname === "/blog"
                                        ? "text-[#FFE100] font-semibold"
                                        : "text-white"
                                        }`}
                                >
                                    <span>Blog</span>
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 text-[#FFE100] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden flex flex-col items-center pb-6 bg-[#093FB4] rounded-b-3xl absolute top-0 left-0 w-full pt-6 sm:pt-8 shadow-lg">
                                <div
                                    className={`md:hidden flex flex-col items-center py-[4px] pb-[20px] sm:pb-[30px] bg-[#093FB4] absolute top-0 left-0 w-full pt-6 sm:pt-8 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0 " : "opacity-0 -translate-y-5 pointer-events-none"
                                        }`}
                                >
                                    {[
                                        { name: "Home", href: "/" },
                                        { name: "About Us", href: "/about" },
                                        { name: "Services", href: "/services" },
                                        { name: "Blog", href: "/blog" },
                                    ].map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="text-white relative group text-base sm:text-lg w-full text-center py-[3px] sm:py-[4px]"
                                        >
                                            <span className='text-base sm:text-[18px] hover:text-[#FFE100]'>{item.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )}
                </nav>
            </div>

        </div>
    );
}