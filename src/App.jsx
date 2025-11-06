import Header from './components/Header';
// import Biodata from './components/Biodata';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
        <Header />

        {/* Sections */}
        <section id="hero" className="h-screen flex items-center justify-center text-5xl font-bold">
            Hero Section
        </section>

        <section id="biodata" className="h-screen flex items-center justify-center text-5xl font-bold">
            Biodata Section
        </section>

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



