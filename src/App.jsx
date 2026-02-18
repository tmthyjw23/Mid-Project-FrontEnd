import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Hero from './components/hero';
import Biodata from './components/Biodata';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [title, setTitle] = useState([]);
    const [navItems, setNavItems] = useState([]);
    const [biodata, setBiodata] = useState([]);
    const [heroData, setHeroData] = useState([]);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [footerData, setFooterData] = useState({});

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        axios.get('/db.json')
            .then(res => {
                const data = res.data;
                setTitle(data.title || []);
                setNavItems(data.header || []);
                setBiodata(data.biodata || []);
                setHeroData(data.hero || []);
                setSkills(data.skills || []);
                setProjects(data.projects || []);
                setFooterData(data.footer || {});
            })
            .catch(err => console.log("ERROR:", err));
    }, []);

    return (
        <div className="min-h-screen bg-linear-to-br from-white-900 via-gray-800 to-black text-white">
            <Header scrolled={scrolled} navItems={navItems} />
            <Hero heroData={heroData} />
            <Biodata biodata={biodata} />
            <Skills skills={skills} title={title} />
            <Projects projects={projects} title={title} />
            <Footer footerData={footerData} />
        </div>
    );
}

export default App;
