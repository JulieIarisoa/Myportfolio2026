import { useState } from "react";
import Navigation from "./navigation";
import profileImg from "../assets/profile.jpg";
import logoImg from "../assets/logo.PNG";
import gitIcon from "../assets/git.png";
import phoneIcon from "../assets/phone.png";
import mailIcon from "../assets/mail.png";

function Profile() {
  return (
    <>
      {/* Petits points décoratifs en haut à droite */}
      <div className="absolute top-8 right-12 flex gap-2">
        <img 
            src={logoImg}  
            alt="Julie HARISOA" 
          />
      </div>

      <div className="flex flex-col md:flex-row gap-10 mt-20 px-40">
        
        {/* Colonne Gauche : Photo de profil avec le cercle de fond */}
        <div className="relative">
          <img 
            src={profileImg} 
            className="w-64 h-64 rounded-full object-cover shadow-lg" 
            alt="Julie HARISOA" 
          />
        </div>

        {/* Colonne Droite : Infos principales */}
        <div className="flex-1 text-center md:text-left  relative">
          <h1 className="text-4xl md:text-5xl font-bold  mb-2 tracking-tight">
            HARISOA <span className="text-teal-600 ">Julie</span>
          </h1>
          <h2 className="text-teal-600 text-2xl font-semibold mb-4">
            FullStack php/js
          </h2>
          <hr className="border-teal-600 border-t-4 w-64 mb-2 mx-auto md:mx-0" />
          <p className="opacity-80 italic text-lg leading-relaxed">
            "Nothing will work unless you do" <br />
            <span className="font-semibold">— Maya Angelou</span>
          </p>
          
          {/* Colonne Contact*/}
          <div className="absolute right-0 flex flex-row items-end text-sm relative font-medium">
            <a href="https://github.com/JulieIarisoa" target="_blank" rel="noopener noreferrer">
              <ContactItem icon={gitIcon} text="Julielarisoa" />
            </a>
            <a href="https://wa.me/261349601405" target="_blank" rel="noopener noreferrer">
              <ContactItem icon={phoneIcon} text="+261 34 96 014 05" />
            </a>
            <a href="mailto:julieharisoa9@gmail.com" target="_blank" rel="noopener noreferrer">
              <ContactItem icon={mailIcon} text="julieharisoa9@gmail.com" />
            </a>
          </div>
        </div>

      </div>

      {/* Menu du bas : Navigation avec icônes circulaires */}
      < Navigation />
    </>
  );
}

// Petits composants internes pour éviter la répétition
const ContactItem = ({ icon, text }) => {
  return (
    <div className="group flex items-center cursor-pointer h-10 px-2 rounded-full hover:bg-gray-100 transition-all duration-300 ease-in-out">
      {/* L'icône */}
      <img src={icon} alt="" className="w-6 h-6 min-w-[24px]" />
      
      {/* Le texte : On joue sur max-width et opacity pour l'effet de glissement */}
      <span className="max-w-0 opacity-0 group-hover:max-w-[200px] group-hover:opacity-100 group-hover:ml-2 overflow-hidden transition-all duration-500 ease-in-out whitespace-nowrap text-sm text-teal-600">
        {text}
      </span>
    </div>
  );
};
const NavItem = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 px-6 cursor-pointer group">
      {/* L'icône */}
      <div className="w-12 h-12 rounded-full border border-teal-600 flex items-center justify-center group-hover:bg-teal-50 transition-colors">
        <img src={icon} alt={label} className="w-6 h-6 object-contain" />
      </div>

      {/* Le Label en Teal */}
      <span className="text-teal-600 font-medium text-sm">
        {label}
      </span>
    </div>
  );
};

export default Profile;