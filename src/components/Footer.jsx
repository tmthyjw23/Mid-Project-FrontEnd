import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    const ref = useRef(null);
    const controls = useAnimation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
        if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    useEffect(() => {
        if (isVisible) controls.start("visible");
    }, [isVisible, controls]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeOut" },
        },
    };

    return (
        <footer
        ref={ref}
        id="footer"
        className="relative mt-24 overflow-hidden "
        >
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-[radial-linear(circle_at_center,rgba(0,150,255,0.15),transparent_70%)] blur-3xl"></div>

        <motion.div
            variants={variants}
            initial="hidden"
            animate={controls}
            className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-12"
        >
            {/* Name & Role */}
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Timothy Jordy Weley
            </h1>
            <p className="text-sm md:text-base text-gray-400 mt-2">
            Software Engineer
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mt-6">
            {[
                { Icon: FaGithub, link: "https://github.com/tmthyjw23" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com/in/timothy-jordy-weley-115260349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { Icon: FaInstagram, link: "https://instagram.com/tmthyjw_" },
                { Icon: FaEnvelope, link: "mailto:tmthyjw@gmail.com" },
            ].map(({ Icon, link }, index) => (
                <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                    scale: 1.2,
                    textShadow: "0px 0px 8px rgba(0,255,255,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                <Icon size={22} />
                </motion.a>
            ))}
            </div>

            {/* Back to Top */}
            <motion.a
            href="#hero"
            whileHover={{ y: -4, textShadow: "0px 0px 8px rgba(0,255,255,0.5)" }} 
            className="mt-8 text-sm text-gray-500 hover:text-cyan-400 transition-colors"
            >
            ↑ Back to top
            </motion.a>

            {/* Divider */}
            <div className="w-2/3 h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-8"></div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Timothy Jordy Weley. All rights reserved.
            </p>
        </motion.div>
        </footer>
    );
};

export default Footer;
