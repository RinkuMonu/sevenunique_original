import React, { useState, useEffect } from "react";
import logoWhite from "../../../../assests/logo_old.png";
import logoColor from "../../../../assests/logo_old.png";

function NavbarComponent() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-white shadow-md" : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/Home">
                            <img
                                src={scrolled ? logoColor : logoWhite}
                                alt="logo"
                                className="h-8"
                            />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {["Home", "About", "Services", "B2c" ,"ContactUs", "Signup"].map((item) => (
                            <a
                                key={item}
                                href={`/${item}`}
                                className={`text-sm font-medium ${
                                    scrolled ? "text-black" : "text-white"
                                } hover:text-gray-700`}
                            >
                                {item.replace("B2c", "B2C")}
                            </a>
                        ))}
                    </div>

                    {/* Contact/Signup Links */}
                    {/* <div className="hidden md:flex space-x-4">
                        {["ContactUs", "Signup"].map((item) => (
                            <a
                                key={item}
                                href={`/${item}`}
                                className={`text-sm font-medium ${
                                    scrolled ? "text-black" : "text-white"
                                } hover:text-gray-700`}
                            >
                                {item.replace("ContactUs", "Contact")}
                            </a>
                        ))}
                    </div> */}

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {["Home", "About", "Services", "B2c", "Contact", "Signup"].map((item) => (
                            <a
                                key={item}
                                href={`/${item}`}
                                className="block text-black text-base font-medium hover:bg-gray-100 rounded-md px-3 py-2"
                            >
                                {item === "ContactUs" ? "Contact" : item}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}

export default NavbarComponent;
