import React, { useState, useEffect } from "react";
import portfolio1 from "../assets/images/portfolio1.PNG";
import portfolio2 from "../assets/images/portfolio2.PNG";
import portfolio3 from "../assets/images/portfolio3.PNG";
import portfolio4 from "../assets/images/portfolio4.PNG";
//image pour online school
import monitoring1 from "../assets/images/monitoring1.PNG";
import monitoring2 from "../assets/images/monitoring2.PNG";
import monitoring3 from "../assets/images/monitoring3.PNG";
import monitoring4 from "../assets/images/monitoring4.PNG"
//image pour real-estate
import real_estate1 from "../assets/images/real-estate1.PNG";
import real_estate2 from "../assets/images/real-estate2.PNG";
import real_estate3 from "../assets/images/real-estate3.PNG";
//image pour nosy be
import nosyBe1 from "../assets/images/nosyBe1.PNG";
import nosyBe2 from "../assets/images/nosyBe2.PNG";
import nosyBe3 from "../assets/images/nosyBe3.PNG";

//image pour pixel art
import pixelArt from "../assets/images/pixel.PNG";

//image pour extension chrome
import extChrome from "../assets/images/extChrome.png";
import extChrome1 from "../assets/images/extChrome1.PNG";

function Projet() {
    const projets = [
        {
            theme: "Personal Portfolio",
            date: "February 2026",
            description: "A professional showcase designed to present my web development activities, skills, and creative journey.",
            features: ["Interactive Home Page", "Detailed About Me section", "Experience Timeline", "Dynamic Project Gallery"],
            lien_git: "https://github.com/JulieIarisoa/Myportfolio2026.git",
            tech: "React.js, TypeScript",
            images: [portfolio1, portfolio2, portfolio3, portfolio4]
        },
        {
            theme: "Online School Management",
            date: "Sept 2025 - Present",
            description: "A comprehensive web application designed to streamline online learning. This is a personal project focused on pedagogical efficiency.",
            features: ["Shared Whiteboard", "Scheduled Evaluations", "Automated Grading System"],
            lien_git: "https://github.com/JulieIarisoa/App_monitoring",
            tech: "Laravel, Vue.js, Tailwind CSS",
            images: [monitoring1, monitoring2, monitoring3, monitoring4]
        },
        {
            theme: "Real Estate Platform",
            date: "Jan 2026 - Feb 2026",
            description: "A cross-platform web and mobile application for buying and renting property. As part of a team, I served as the Backend Developer (Node.js), Database Architect, and UI Designer.",
            features: ["Advanced Search Filters", "Property Listing Management", "Integrated Payment Solutions"],
            lien_git: "https://github.com/HasinaManjaka/real-estate",
            tech: "Express.js, React, React Native, PostgreSQL",
            images: [real_estate1, real_estate2, real_estate3]
        },
        {
            theme: "Nosy Be Tourism Guide",
            date: "August 2025",
            description: "A client project developed from design to deployment, showcasing tourism services for Nosy Be, Madagascar.",
            features: ["Multi-language support (English, French, Polish)", "Dynamic Seasonal Offers", "Curated Local Attractions"],
            lien_git: "https://github.com/JulieIarisoa/SITE-DE-TOURISME-NOSY-BE",
            tech: "React.js, CSS3",
            images: [nosyBe1, nosyBe2, nosyBe3]
        },
        {
            theme: "Productivity Chrome Extension",
            date: "Personal Project",
            description: "A multi-tool browser extension designed to enhance focus and provide quick access to essential utilities.",
            features: ["Color Picker", "Pomodoro Timer", "Real-time Clock & Date", "Daily Motivational Quotes"],
            lien_git: "https://github.com/JulieIarisoa/ExtensionChrome_RechercheCouleur",
            tech: "HTML, CSS, JavaScript",
            images: [extChrome, extChrome1]
        },
        {
            theme: "Pixel Art Creator",
            date: "Nov 2025",
            description: "A vanilla JavaScript challenge completed in 72 hours without AI assistance, focusing on DOM manipulation and core programming logic.",
            features: ["Grid-based Drawing", "Custom Color Palette", "Downloadable Canvas"],
            lien_git: "https://github.com/JulieIarisoa/Pixel-arts",
            tech: "HTML, CSS, JavaScript",
            images: [pixelArt]
        },
    ];
    //Pour afficher le détail d'un projet sélectionné
    const [activeIndex, setActiveIndex] = useState(0);
    const selectedProject = projets[activeIndex];
  
    //Nouvel état pour l'image du carrousel
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    //Pour voir plus de projet dans la liste
    const [visibleCount, setVisibleCount] = useState(4);
    const showMore = () => {
        setVisibleCount(prevCount => prevCount + 4); // Ajoute 4 de plus à chaque clic
    };
    
    //Reset l'image à la première quand on change de projet
    useEffect(() => {
        setCurrentImgIndex(0);
    }, [activeIndex]);

    

    return (
        <div className="m-30" id="project">
            <h3 className="text-3xl font-bold text-center mt-12 mb-12">My projects</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <div className="lg:col-span-2 space-y-4">
                    {/* SECTION IMAGE */}
                    <div className="rounded-lg aspect-video flex flex-col items-center justify-center relative overflow-hidden bg-gray-100 shadow-md">
                        <img 
                            //Utilisation de l'index dynamique
                            src={selectedProject.images[currentImgIndex]} 
                            alt="Aperçu" 
                            className="w-full h-full object-cover transition-opacity duration-300" 
                        />

                        {/* LES POINTS (DOTS) DYNAMIQUES */}
                        <div className="absolute bottom-4 flex gap-2  p-2 rounded-full backdrop-blur-sm">
                            {selectedProject.images.map((_, i) => (
                            <span
                                key={i}
                                onClick={() => setCurrentImgIndex(i)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                currentImgIndex === i 
                                ? "bg-teal-600 scale-125" 
                                : "bg-white/70 border border-teal-600 hover:bg-white"
                                }`}
                            />
                            ))}
                        </div>
                    </div>

                    {/* Description détaillée */}
                    <div className="p-6 rounded-lg shadow-sm">
                        <h4 className="text-2xl font-bold ">{selectedProject.theme}</h4>
                        <p className="text-sm text-gray-500 mb-4">{selectedProject.date}</p>
                        <p className="mb-4">{selectedProject.description}</p>
                        <div className="mb-4">
                            <p className="font-semibold ">Fonctionnalités Flash</p>
                            <ul className="list-disc ml-5 text-sm ">
                                {selectedProject.features?.map((f, i) => <li key={i}>{f}</li>)}
                            </ul>
                        </div>

                        <div className="mb-6">
                            <p className="font-semibold ">Stack Technique</p>
                            <p className="text-sm ">{selectedProject.tech}</p>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded transition">Demo</button>
                            <a href={selectedProject.lien_git} className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded transition">Code source</a>
                        </div>
                    </div>
                </div>

                {/* SECTION DROITE : LISTE DES PROJETS LIMITÉE */}
                <div className="space-y-3">
                    {/* On utilise .slice() pour n'afficher que les 'visibleCount' premiers */}
                    {projets.slice(0, visibleCount).map((p, index) => (
                        <div 
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`p-4 rounded-lg cursor-pointer transition-all border-l-4 ${
                                activeIndex === index ? " border-teal-600 shadow-md" : "border-transparent hover:bg-teal-700"
                            }`}
                        >
                            <div className="flex justify-between items-start">
                                <h5 className="font-bold ">{p.theme}</h5>
                                <span className="text-[10px] text-gray-500">{p.date}</span>
                            </div>
                            <p className="text-xs mt-1">Tech : {p.tech.split(',').slice(0,2).join(',')}...</p>
                            <button className="text-xs mt-2 block ml-auto hover:underline text-teal-600">Detail</button>
                        </div>
                    ))}
                
                    {/* On affiche le bouton seulement s'il reste des projets à voir */}
                    {visibleCount < projets.length && (
                        <button 
                            onClick={showMore}
                            className="w-full py-2 bg-teal-600 text-white rounded mt-4 hover:bg-teal-700 font-bold transition-colors"
                        >
                            Voir +
                        </button>
                    )}

                    {/*Bouton pour réduire si tout est affiché */}
                    {visibleCount >= projets.length && projets.length > 6 && (
                        <button 
                            onClick={() => setVisibleCount(4)}
                            className="w-full py-2 text-teal-600 border border-teal-600 rounded mt-4 hover:bg-teal-50 font-bold transition-colors"
                        >
                            Voir moins
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Projet;