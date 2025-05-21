'use client'

import {Github ,Linkedin } from 'lucide-react'


export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/20 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-white font-bold text-2xl tracking-wide">
          <span className=" text-[#3365ef] font-anta">M</span><span className="text-[#3365ef] font-anta ">M</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex ml-10 gap-6 text-white text-[16px] font-anta font-normal">
          <a href="#Section_hero" className="hover:text-[#3365ef] hover:font-bold  ">Accueil</a>
          <a href="#Competences" className="hover:text-[#3365ef] hover:font-bold ">Compétences</a>
          <a href="#projets" className="hover:text-[#3365ef] hover:font-bold  ">Projets</a>
          <a href="#ExperienceTimeline" className="hover:text-[#3365ef] hover:font-bold ">Expériences</a>
        </nav>

        {/* Icônes + Bouton */}
        <div className="flex items-center gap-3">
          {/* Icônes sociales */}
          
          <a href="https://github.com/mouadmousmih" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition text-white">
            <Github size={16} />
          </a>
          <a href="https://www.linkedin.com/in/mouadmousmih/" className="p-2 rounded-full border  bg-white/10 hover:bg-white/20 transition text-white">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
