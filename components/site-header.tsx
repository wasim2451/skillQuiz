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
        <div className="w-full fixed top-0 left-0 z-50">
            <nav className="flex flex-col w-full md:w-[60vw] mx-auto bg-[#1753d4] text-white md:rounded-b-3xl backdrop-blur-md h-[100px] md:h-[120px] shadow-lg  ">
                <div className="flex justify-center items-center md:py-2 w-full">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`md:hidden relative group py-4 px-2 text-sm lg:text-base transition-all ${pathname === "/" ? "text-[#FFE100] font-bold" : "text-white font-semibold"
                            }`}
                    >
                        <div className="w-[250px] h-10 flex items-center justify-center">
                            <div className=" flex items-center justify-start over">
                                <Image
                                    src="/logos/skillLogoT.png"
                                    alt="SkillKwiz Logo"
                                    width={200}
                                    height={30}
                                    className="w-full"
                                //   style={{ maxWidth: "100%" }}
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
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-0 md:felx-nowrap">
                        <Link
                            href="/"
                            className={`relative group py-4 px-2 text-sm lg:text-base md:px-4 transition-all ${pathname === "/"
                                ? "text-[#FFE100] font-bold"
                                : "text-white font-semibold"
                                }`}
                        >
                            <div className="relative flex items-center">
                                <div className="w-[300px] h-10 flex items-center justify-center">
                                    <Image
                                        src="/logos/skillLogoT.png"
                                        alt="SkillKwiz Logo"
                                        width={100}
                                        height={30}
                                        className="w-[80%]"
                                    // style={{ maxWidth: "100%" }}
                                    />
                                </div>
                            </div>
                        </Link>

                        <Link
                            href="/"
                            className={`relative group py-4 px-2 text-sm md:px-4 md:text-[20px] transition-all ${pathname === "/"
                                ? "text-[#FFE100] font-semibold"
                                : "text-white"
                                }`}
                        >
                            <span>Home</span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-[#FFE100] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            href="/about"
                            className={`relative group py-4 px-2 text-sm md:px-4 md:text-[18px] transition-all ${pathname === "/about"
                                ? "text-[#FFE100] font-semibold"
                                : "text-white"
                                }`}
                        >
                            <span>About Us</span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-[#FFE100] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            href="/services"
                            className={`relative group py-4 px-2 text-sm md:px-4 md:text-[20px] transition-all ${pathname === "/services"
                                ? "text-[#FFE100] font-semibold"
                                : "text-white"
                                }`}
                        >
                            <span>Services</span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-[#FFE100] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                        <Link
                            href="/blog"
                            className={`relative group py-4 px-2 text-sm md:px-4 md:text-[20px] transition-all ${pathname === "/blog"
                                ? "text-[#FFE100] font-semibold"
                                : "text-white"
                                }`}
                        >
                            <span>Blog</span>
                            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-600 text-[#FFE100] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -10 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden flex flex-col items-center pb-6 bg-[#093FB4] rounded-b-3xl absolute top-0 left-0 w-full pt-8 shadow-lg">
                            <div
                                className={`md:hidden flex flex-col items-center py-[4px] pb-[30px] bg-[#093FB4] absolute top-0 left-0 w-full pt-8 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100 translate-y-0 " : "opacity-0 -translate-y-5 pointer-events-none"
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
                                        className="text-white relative group text-lg w-full text-center py-[3px]"
                                    >
                                        <span className='text-[18px] hover:text-[#FFE100]'>{item.name}</span>

                                    </Link>
                                ))}
                            </div>

                        </motion.div>
                    </div>

                )}
            </nav>
        </div>
    );
}
