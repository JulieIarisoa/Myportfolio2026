/*import Navigation from './navigation';*/

const AboutMe = () => {
  return (
    <div className="m-30">
        <div className=" flex items-left justify-center  mt-4 font-sans mt-20" id='about'>
            {/* Section Contenu */}
            <div className="w-full ">
                <header className="mb-6">
                <h2 className="text-3xl font-extrabold uppercase tracking-tight">HARISOA Julie</h2>
                <p className="text-teal-600 text-xl font-semibold mt-1">Web Developper</p>
                </header>

                <div className="space-y-4 text-sm leading-relaxed mb-8">
                <p>
                    I'm a Master's student at ENI Fianarantsoa, specializing in the intersection of 
                    software engineering and data management. <br/> While I work across the full stack using PHP and JavaScript, 
                    I’m most at home in the backend. I love the challenge of 
                    structuring complex databases <br/>and building the engines that power seamless user experiences.
                </p>
                </div>

                {/* Grille des compétences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                
                {/* Colonne Gauche - Hard Skills */}
                    <div>
                        <h3 className="text-teal-600 font-bold text-lg mb-2">Hard Skills</h3>
                        <ul className="space-y-1 text-sm">
                            <li><span className="font-medium  text-teal-600">Web:</span> HTML5/CSS3, BootStrap,Tailwind, W3css</li>
                            <li><span className="font-medium  text-teal-600">Php:</span> Laravel, symfony, wordpress</li>
                            <li><span className="font-medium  text-teal-600">JavaScript:</span> ReactJs, ExpressJs</li>
                            <li><span className="font-medium  text-teal-600">Java:</span> Desktop, jsp, hibernate</li>
                            <li><span className="font-medium  text-teal-600">Python:</span> django</li>
                            <li><span className="font-medium  text-teal-600">Notion:</span>C, C++, C#</li>
                        </ul>
                    </div>

                {/* Colonne Droite - Tech & Langues */}
                    <ul className="space-y-1 text-sm">
                        <li><span className="font-medium text-teal-600">SQL :</span> Mysql , PostgreSQL</li>
                        <li><span className="font-medium text-teal-600">Méthode :</span> Agile, Merise, 2TUP/UML</li>
                        <li><span className="font-medium text-teal-600">Design :</span> Figma, Photoshop</li>
                        <li><span className="font-medium text-teal-600">Git :</span> github/gitlab</li>
                        <li><span className="font-medium text-teal-600">Deployment :</span> vercel, netlify, github pages</li>
                        <li><span className="font-medium text-teal-600">Tools :</span> Bonita, Mindomo, pack office, postman, zotero</li>
                    </ul>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6 mt-8'>
                    <div>
                        <h3 className="text-teal-600 font-bold text-lg mb-2">Soft Skills</h3>
                        <ul className="space-y-1 text-sm">
                            <li><span className="font-medium">Curious</span></li>
                            <li><span className="font-medium">Serious</span></li>
                            <li><span className="font-medium">Punctual</span></li>
                            <li><span className="font-medium">Teamwork</span></li>
                            <li><span className="font-medium">Rigor</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-teal-600 font-bold text-lg mb-2">Language</h3>
                        <ul className="space-y-1 text-sm">
                            <li>English : intermediate</li>
                            <li>French : fluent</li>
                            <li>Malagasy : advanced</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-teal-600 font-bold text-lg mb-2">Divers</h3>
                        <ul className="space-y-1 text-sm">
                            <li>Singing</li>
                            <li>Listen musique</li>
                            <li>Making creations: knitting, home design</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/*Menu pour le navigation
        <Navigation/>*/}
    </div>
  );
};

export default AboutMe;