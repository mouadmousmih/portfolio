'use client'

import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import {projects, projects_paragraphe} from  '@/content/data'

export default function Projets() {
  return (
    <section className="pb-20 pt-6 sm:pt-8 px-6 bg-black text-white" id="projets">
      {/* Titre */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#3365ef] font-anta md:animate-glow">
          Mes Projets
        </h2>
        <p className="text-gray-400 mt-3 font-lexend">
        {projects_paragraphe.text}
        </p>
      </div>

      {/* Grille de projets */}
      <div className="grid md:grid-cols-3 gap-8 sm:ml-8 sm:mr-8 max-w-7xl mx-auto">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#121212] rounded-xl  border-[1.5px] border-[#181818] overflow-hidden  shadow-[0_4px_20px_rgba(51,101,239,0.2)] hover:shadow-[0_6px_28px_rgba(51,101,239,0.4)] transition duration-300"
          >
            {/* Image du projet */}
            <Image
              src={proj.image}
              alt={proj.title}
              width={800}
              height={400}
              className="w-full h-52   object-cover"
            />

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 font-lexend">{proj.title}</h3>
              <p className="text-sm text-gray-300  font-lexend ">{proj.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-1 bg-[#1e1e1e] text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex gap-4 mt-5">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
            
                    className=" flex items-center gap-1 text-sm  hover:underline  text-[#3365ef] font-semibold bg-[#3365ef]/20 px-2 py-0.5 rounded-lg    "
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    className="flex items-center gap-1 text-sm  hover:underline  text-[#3365ef] font-semibold bg-[#3365ef]/20 px-2 py-0.5 rounded-lg "
                  >
                    <FaExternalLinkAlt /> Démo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
