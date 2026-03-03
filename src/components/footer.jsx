import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // On récupère les variables depuis le fichier .env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          alert("Message sent! 🚀");
          form.current.reset();
      }, (error) => {
          console.error("FAILED...", error);
          alert("Error: " + error.text);
      });
  };

  return (
    <footer className="bg-teal-800 text-white w-full py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* CONTACT SECTION */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold border-b border-teal-600 pb-2 inline-block">
            Contact Me
          </h4>
          <ul className="space-y-3 text-teal-100">
            <li className="flex items-center gap-2">
              <span className="font-semibold text-white">GitHub:</span> 
              <a href="https://github.com/JulieIarisoa" target="_blank" rel="noreferrer" className="hover:text-teal-300 transition">
                JulieIarisoa
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold text-white">Phone:</span> +261 34 96 014 05
            </li>
            <li className="flex items-center gap-2">
              <span className="font-semibold text-white">Email:</span> 
              <a href="mailto:julieharisoa9@gmail.com" className="hover:text-teal-300 transition">
                julieharisoa9@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* QUICK LINKS SECTION */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold border-b border-teal-600 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="#profil" className="text-teal-100 hover:text-white hover:pl-2 transition-all block">→ Profile</a></li>
            <li><a href="#about" className="text-teal-100 hover:text-white hover:pl-2 transition-all block">→ About Me</a></li>
            <li><a href="#experience" className="text-teal-100 hover:text-white hover:pl-2 transition-all block">→ My Experiences</a></li>
            <li><a href="#project" className="text-teal-100 hover:text-white hover:pl-2 transition-all block">→ My Projects</a></li>
          </ul>
        </div>

        {/* FEEDBACK SECTION */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold border-b border-teal-600 pb-2 inline-block">
            Leave a Message
          </h4>
          <form className="flex flex-col gap-3" ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="user_name" 
              placeholder="Full Name"
              className="w-full p-2 rounded bg-teal-900 border border-teal-600 text-white"
              required 
            />
            <input 
              type="email" 
              name="user_email" 
              placeholder="Your Email"
              className="w-full p-2 rounded bg-teal-900 border border-teal-600 text-white"
              required 
            />
            <textarea 
              name="message" 
              rows="3"
              placeholder="Your message..."
              className="w-full p-2 rounded bg-teal-900 border border-teal-600 text-white"
              required 
            ></textarea>
            <button type="submit" className="bg-white text-teal-800 font-bold py-2 px-4 rounded hover:bg-teal-100 transition shadow-lg mt-2 uppercase text-sm">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;