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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        axios
            .get("/api")
            .then((res) => {
                setTitle(res.data || []);
            })
            .catch((err) => console.log("ERROR:", err));
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3001/header")
            .then((res) => {
                setNavItems(res.data || []);
            })
            .catch((err) => console.log("ERROR:", err));
    }, []);
    
    useEffect(() => {
        axios
        .get("http://localhost:3001/hero")
        .then((res) => {
            setHeroData(res.data || []);
        })
        .catch((err) => console.log("ERROR:", err));
    }, []);

    useEffect(() => {
        axios
        .get("http://localhost:3001/biodata")
        .then((res) => {
            setBiodata(res.data || []);
        })
        .catch((err) => console.log("ERROR:", err));
    }, []);

    useEffect(() => {
        axios
            .get("http://localhost:3001/skills")
            .then((res) => {
                setSkills(res.data || []);
            })
            .catch((err) => console.log("ERROR:", err));
    }, []);

    useEffect(() => {
        axios
        .get("http://localhost:3001/projects")
        .then((res) => {
            setProjects(res.data || []);
        })
        .catch((err) => console.log("ERROR:", err));
    }, []);


    return (
        <div className="min-h-screen bg-linear-to-br from-white-900 via-gray-800 to-black text-white">
            <Header scrolled={scrolled} navItems={navItems} />
            <Hero heroData={heroData} />
            <Biodata biodata={biodata} />
            <Skills skills={skills} title={title} />
            <Projects projects={projects} title={title} />
            <Footer />
        </div>
    );
}

export default App;
