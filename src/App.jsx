import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/hero';
import Biodata from './components/Biodata';

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        axios
            .get("/db.json")
            .then((res) => {
                setNavItems(res.data?.header || []);
            })
            .catch((err) => console.log("ERROR:", err));
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-br from-white-900 via-gray-800 to-black text-white">
            <Header scrolled={scrolled} navItems={navItems} />
            <Hero />
            <Biodata />

            {/* Placeholder section lain */}
            <section id="skills" className="h-screen flex items-center justify-center text-5xl font-bold">
                Skills Section
            </section>

            <section id="projects" className="h-screen flex items-center justify-center text-5xl font-bold">
                Projects Section
            </section>

            <section id="footer" className="h-[60vh] flex items-center justify-center text-5xl font-bold">
                Footer Section
            </section>
        </div>
    );
}

export default App;
