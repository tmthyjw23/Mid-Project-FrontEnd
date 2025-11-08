// Header.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navItems, setNavItems] = useState([]);

    // Detect scrolling untuk efek sticky dan blur
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Fetch JSON dari local file
    useEffect(() => {
        axios
        .get("/db.json")
        .then((res) => {
            console.log("RAW DATA:", res.data);
            setNavItems(res.data?.header || []);
        })
        .catch((err) => console.log("ERROR:", err));
    }, []);

    return (
        <header
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
            scrolled
            ? "backdrop-blur-2xl bg-white/10 shadow-lg"
            : "backdrop-blur-sm bg-white/5"
        }`}
        >
        <nav className="max-w-5xl mx-auto flex items-center justify-center gap-10 py-5 text-white">
            {navItems.map(({ nav, id, href }) => (
            <a
                key={id}
                href={href}
                className="relative text-lg font-medium group transition-all duration-300 px-2"
            >
                {nav}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-white rounded-full transition-all duration-300 group-hover:w-full"></span>

                <span className="absolute inset-0 scale-0 group-hover:scale-100 transition-transform duration-300 bg-white/10 rounded-xl blur-md"></span>
            </a>
            ))}
        </nav>
        </header>
    );
};

export default Header;
