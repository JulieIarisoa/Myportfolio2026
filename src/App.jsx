import { useEffect, useState } from 'react'
import './App.css'
import Profile from './components/profile'
import AboutMe from './components/about'
import Experience from './components/exprerience'
import Projet from './components/projet'
import Footer from './components/footer'

// petit composant interne pour le boutton 
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Le bouton apparaît après 300px de scroll
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 bg-teal-600 text-white p-4 rounded-full shadow-2xl hover:bg-teal-700 transition-all duration-300 hover:scale-110 group"
          aria-label="Black to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
      </>
  );
};
function App(){
  return (
    <>
        < Profile />
        < AboutMe />
        < Experience />
        < Projet />
        < Footer />
        <ScrollToTop />
    </>
  )
}

export default App
