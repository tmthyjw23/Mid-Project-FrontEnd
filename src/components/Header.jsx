// Header.jsx
import React, { useEffect, useState } from "react";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Hero", href: "#hero" },
        { label: "Biodata", href: "#biodata" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Footer", href: "#footer" }
    ];

    return (
        <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled
            ? "backdrop-blur-2xl bg-white/10 shadow-lg"
            : "backdrop-blur-sm bg-white/5"
        }`}
        >
        <nav className="max-w-5xl mx-auto flex items-center justify-center gap-10 py-5 text-white">
            {navItems.map((item) => (
            <a
                key={item.href}
                href={item.href}
                className="relative text-lg font-medium group transition-all duration-300 px-2"
            >
                {/* Label */}
                {item.label}

                {/* Underline glide */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>

                {/* Spotlight hover effect */}
                <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-white/10 rounded-xl blur-md"></span>
            </a>
            ))}
        </nav>
        </header>
    );
};

export default Header;




