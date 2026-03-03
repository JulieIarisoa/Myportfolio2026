import { useState } from "react";
import aboutIcon from "../assets/about.png";
import skillIcon from "../assets/skill.png";
import projetIcon from "../assets/projet.png";

function Navigation() {
  return (
    <>
      {/* Menu du bas : Navigation avec icônes circulaires */}
      <div className="text-teal-600 mt-20 flex justify-center border-t pt-8">
        <a href="#about"><NavItem icon={aboutIcon} label="About" /></a>
        <a href="#experience"><NavItem icon={skillIcon} label="Experiences" /></a>
        <a href="#project"><NavItem icon={projetIcon} label="Projects" /></a>
      </div>
    </>
  );
}

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

export default Navigation;