import React from "react";

function Footer(){
    return(
        <div className="bg-teal-700 w-full pl-30 pr-30 pt-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                <div>
                    <h4>Contact</h4>
                    <ul>
                        <li>Git: JulieIarisoa</li>
                        <li>Tél: +261 34 96 014 05</li>
                        <li>E-mail: julieharisoa9@gmail.com</li>
                    </ul>
                </div>
                <div>
                    <h4>Link</h4>
                    <ul>
                        <li><a href="#profil">Profil</a></li>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#experience">My experiences</a></li>
                        <li><a href="project">My projects</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Commentaire</h4>
                    <form action="">
                        <label htmlFor="email">Email</label>
                        <input type="text" />
                        <label htmlFor="message">Message</label>
                        <textarea name="" id=""></textarea>
                    </form>
                </div>
            </div>
            <p className="text-center m-5">Julie HARISOA - copy right 2026</p>
        </div>
    )
}

export default Footer;