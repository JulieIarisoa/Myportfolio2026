import React from "react";

function Footer() {
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
              <a 
                href="https://github.com/JulieIarisoa" 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-teal-300 transition"
              >
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
            Leave a Comment
          </h4>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="block text-sm mb-1 text-teal-100">Email Address</label>
              <input 
                type="email" 
                id="email"
                className="w-full p-2 rounded bg-teal-900 border border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-teal-500"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-1 text-teal-100">Message</label>
              <textarea 
                id="message"
                rows="3"
                className="w-full p-2 rounded bg-teal-900 border border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-teal-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button className="bg-white text-teal-800 font-bold py-2 px-4 rounded hover:bg-teal-100 transition duration-300 shadow-lg mt-2 uppercase text-sm tracking-wider">
              Send Message
            </button>
          </form>
        </div>

      </div>

      {/* COPYRIGHT SECTION */}
      <div className="mt-12 pt-8 border-t border-teal-700 text-center text-teal-200 text-sm">
        <p>© 2026 Julie HARISOA — All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;