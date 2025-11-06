import { useEffect, useRef, useState } from 'react';

const Projects = () => {
    return (
        <>
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="https://via.placeholder.com/300" alt="Project Thumbnail" className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                    <p className="text-gray-600">Short description of the project.</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Projects;