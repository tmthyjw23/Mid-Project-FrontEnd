import React from "react";
const Hero = ({ heroData }) => {

    return (
        <>
        {heroData.map(({ name, title, text, avatar }, index) => (
            <section
            key={index}
            id="hero"
            className="h-screen flex items-center justify-center px-32 text-white"
            >
            <div className="flex items-center gap-16 opacity-0 animate-fadeInUp">
                {/* Avatar Container */}
                <div className="relative">
                {/* Soft glow */}
                <div className="absolute inset-0 w-56 h-56 bg-white/20 blur-3xl rounded-full"></div>

                <div className="w-48 h-48 rounded-full p-[3px] bg-linear-to-br from-purple-500 via-blue-400 to-cyan-300 animate-floating">
                    <div className="w-full h-full rounded-full overflow-hidden shadow-xl">
                    <img
                        src={avatar}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
                </div>

                {/* Text */}
                <div>
                <h1 className="font-mono text-6xl font-bold leading-tight">
                    {name}
                </h1>

                <h2 className="font-mono text-sky-400 text-lg mb-6 mt-4 font-medium">
                    {title}
                </h2>

                <p className="mt-6 max-w-xl text-lg text-white/60">{text}</p>
                </div>
            </div>
            </section>
        ))}
        </>
    );
};

export default Hero;
