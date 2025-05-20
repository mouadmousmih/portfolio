'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {experiences}  from '@/content/data'
 

export default function ExperienceTimeline() {
  const [active, setActive] = useState(0)
  const current = experiences[active]

  return (
    <section className="bg-black pb-20  pt-6 sm:pt-10 px-6 text-white" id="experience">
      <h2 className="text-4xl font-bold text-center text-[#3365ef] mb-12 font-anta animate-glow">
        Mon expérience
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Timeline à gauche */}
        <div className="relative border-l-2 border-[#3365ef]/30 pl-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              onClick={() => setActive(i)}
              className={`relative mb-8 cursor-pointer transition-all duration-300 ${
                active === i ? 'scale-[1.03]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <span
                className={`absolute  left-1 top-1 w-3 h-3 rounded-full ${
                  active === i
                    ? 'bg-[#3365ef] shadow-[0_0_10px_#3365ef]'
                    : 'bg-[#1e1e1e]'
                }`}
              ></span>

              <div className="bg-[#121212] p-4 rounded-lg shadow-md">
                <h3 className=" font-lexend font-semibold text-white">{exp.title}</h3>
                <p className="text-sm text-gray-400">{exp.entreprise}</p>
                <p className="text-xs text-[#3365ef] mt-2">{exp.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contenu dynamique à droite */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-2 bg-[#121212] p-6 rounded-xl shadow-[0_6px_28px_rgba(51,101,239,0.2)] hover:shadow-[0_6px_28px_rgba(51,101,239,0.4)] transition duration-300"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-lexend font-bold text-white">{current.title}</h3>
            <span className="text-sm text-[#3365ef] bg-[#3365ef]/10 px-3 py-1 rounded-md">
              {current.date}
            </span>
          </div>
          <p className="text-sm italic font-lexend text-gray-400 mb-4">{current.entreprise}</p>

          <div className="text-gray-300 font-lexend space-y-4 text-sm leading-relaxed">
            <p>
              <span className="font-semibold font-lexend text-white">Contexte :</span>{' '}
              {current.contexte}
            </p>
            <div>
              <span className="font-semibold font-lexend text-white">Tâches :</span>
              <ul className="list-disc pl-5 mt-1">
                {current.taches.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
            <p>
              <span className="font-semibold font-lexend text-white">Action :</span>{' '}
              {current.action}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
