import React, { useState, useEffect } from "react";
import portfolio1 from "../assets/images/portfolio1.PNG";
import portfolio2 from "../assets/images/portfolio2.PNG";
import portfolio3 from "../assets/images/portfolio3.PNG";
import portfolio4 from "../assets/images/portfolio4.PNG";
import about from "../assets/git.png";
import git from "../assets/git.png";

function Projet() {
    const projets = [
        {
            theme: "My portfolio",
            date: "février 2026",
            description: "To present my activity",
            features: ["Home", "About Me", "My experiences", "My projects"],
            lien_git: "https://github.com/JulieIarisoa/Myportfolio2026.git",
            tech: "Reactjs, Typescript",
            images: [portfolio1, portfolio2, portfolio3, portfolio4] // On a 3 images ici
        },
        {
            theme: "Online school like real",
            date: "sept 2025 - now",
            description: "Une application web pour facilité l'apprentissage en ligne. C'est une projet personnele",
            features: ["Share white dashboard", "Evaluation pagrammated", "Automatique correction"],
            lien_git: "https://github.com",
            tech: "Laravel, Vuejs, Tailwind",
            images: [about, git, about] // On a 3 images ici
        },
        {
            theme: "Real estate",
            date: "jan 2026 - feb 2026",
            description: "Une application web/mobile pour la recherche d'une maison ou terrain à avendre ou alouer. C'est une projet en équipe , dont je suis développeur backend nodejs, concepteur de la base de données et designer tout au long du projet.",
            features: ["Cherche", "publiate", "Facilité Payement"],
            lien_git: "https://github.com",
            tech: "Express.js, reactjs, react native, postgresql",
            images: [about, git, about] // On a 3 images ici
        },
        {
            theme: "Tourism website",
            date: "Aout 2025",
            description: "Site web pour représenter le service d'un guide touristique de Nosy be. C'est un projet d'un client que je fait du conception au déployement.",
            features: ["Traduction in englis, french and polonais", "Update offer every 1/2 of the year", "Presente the place that the visitor will love"],
            lien_git: "https://github.com",
            tech: "React.js, Css",
            images: [about, git, about] // On a 3 images ici
        },
        {
            theme: "Chrome extension",
            date: "fun project",
            description: "Des extension chrome pour déverouiller la connaissance des bases.",
            features: ["Cherache color", "Pomodoro", "Hour and date visualisation","Motivation for every new onglet"],
            lien_git: "https://github.com",
            tech: "HTML, CSS, Javascript",
            images: [about, git, about] // On a 3 images ici
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