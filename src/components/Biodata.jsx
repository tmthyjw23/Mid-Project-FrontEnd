import React from "react";

const Biodata = ({
    imageSrc = "/avatar.jpg",
    name = "Timothy Jordy Weley",
    university = "UNKLAB / Computer Science",
    nim = "105022410005",
    major = "Informatics",
    domicile = "Manado, Indonesia",
    email = "tmthyjw@gmail.com",
    description = `Saya, Timothy Jordy Weley, mahasiswa Informatika yang memiliki minat dalam pengembangan web, kecerdasan buatan (AI), serta desain grafis. Bersemangat untuk terus belajar dan menggabungkan kreativitas dengan keahlian teknis dalam setiap proyek.`,
    }) => {
    return (
        <section id="biodata" className="w-full pt-40 pb-28 relative z-10">
        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

            {/* Profile */}
            <div className="flex justify-center md:justify-start">
            <div className="relative w-56 h-56 md:w-60 md:h-60 rounded-xl border border-white/20 overflow-hidden flex items-center justify-center">
                <img
                src={imageSrc}
                alt={name}
                className="w-full h-full object-cover"
                />

                {/* HUD Corners */}
                <span className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-sky-400"></span>
                <span className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-sky-400"></span>
            </div>
            </div>

            {/* Info */}
            <div className="md:col-span-2">
            <h2 className="font-mono text-4xl uppercase tracking-wide mb-2">
                {name}
            </h2>

            <h3 className="font-mono text-sky-400 text-lg mb-6">
                {university}
            </h3>

            <div className="space-y-4 text-lg">
                <div className="flex gap-4">
                <span className="w-28 text-gray-400">NIM</span>
                <span className="font-mono">{nim}</span>
                </div>
                <div className="flex gap-4">
                <span className="w-28 text-gray-400">Jurusan</span>
                <span className="font-mono">{major}</span>
                </div>
                <div className="flex gap-4">
                <span className="w-28 text-gray-400">Domisili</span>
                <span className="font-mono">{domicile}</span>
                </div>
                <div className="flex gap-4">
                <span className="w-28 text-gray-400">Email</span>
                <span className="font-mono">{email}</span>
                </div>
            </div>

            <p className="text-gray-400 leading-relaxed mt-6">
                {description}
            </p>
            </div>
        </div>
        </section>
    );
};

export default Biodata;
