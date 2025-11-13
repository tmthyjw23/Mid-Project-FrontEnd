import React, { useState, useEffect } from "react";
import "../App.css"; // kalau kamu ingin letakkan animasi custom seperti fade-in di sini

const Skills = ({ skills, title }) => {

    return (
        <section
        id="skills"
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 text-white bg-transparent bg-grid"
        >
        {/* Title */}
        <h1 className="font-mono text-3xl md:text-4xl uppercase tracking-widest text-sky-400 mb-12">
            {title.find(t => t.id === 'title1')?.text}
        </h1>

        {/* Skills grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map(({name, percent}, index) => (
            <div
                key={index}
                className="opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
                {/* Skill Header */}
                <div className="flex justify-between items-center mb-2 font-mono">
                <span className="text-lg tracking-widest">{name}</span>
                <span className="text-sky-400">{percent}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-5 bg-white/10 overflow-hidden rounded-2xl">
                <div
                    className="h-full bg-sky-400 shadow-[0_0_10px_#00bbff] origin-left scale-x-0 animate-fillBar rounded-4xl"
                    style={{ "--tw-scale-x": `${percent / 100}` }}
                ></div>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Skills;
