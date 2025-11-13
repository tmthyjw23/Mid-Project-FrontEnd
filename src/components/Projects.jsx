import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = ({ projects, title }) => {
    

    return (
        <div id="projects" className='min-h-screen items-center  px-6  text-white bg-transparent bg-grid scroll-mt-24 animate-fadeInUp'>
            <h2 className="text-3xl font-bold text-center mb-15">{title.find(t => t.id === 'title2')?.text}</h2>
            <div className="gap-8  flex justify-center">
                {projects.map(({id, title, src, href, description}) => (
                    <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <iframe src={src} title="Project Thumbnail" className="w-150 h-100 object-cover bg-transparent " />
                        <a href={href}>
                            <div className="p-4">
                                <h3 className="text-xl text-black font-bold mb-2">{title}</h3>
                            <p className="text-gray-600">{description}</p>
                        </div>
                    </a>
                </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;