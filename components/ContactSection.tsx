'use client'

import { Mail, Download, Linkedin } from 'lucide-react'

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="relative pt-0 sm:pt-6 pb-6 px-6 bg-black text-white overflow-hidden scroll-mt-24"
      >
        {/* Boîte principale avec animation à l’intérieur */}
        <div className="relative z-10 max-w-3xl mx-auto text-center rounded-xl p-6 overflow-hidden border border-white/10 shadow-[0_4px_20px_rgba(51,101,239,0.15)] hover:shadow-[0_6px_28px_rgba(51,101,239,0.4)] transition duration-300"
          >
          {/*  Glow en arrière-plan uniquement dans la boîte */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(51,101,239,0.15)_0%,_transparent_70%)] pointer-events-none z-0" />

          {/* Contenu au-dessus */}
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-[#3365ef] font-anta md:animate-glow mb-4">
              Parlons de ton prochain projet
            </h2>
            <p className="text-gray-400 mb-8 font-anta">
              Vous avez une idée ou vous cherchez un alternant motivé en DevOps / Web ? <br />
              Je suis ouvert aux opportunités et toujours prêt à échanger !
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/Mouad_Mousmih_CV.pdf"
                download
                className="flex items-center font-anta gap-2 px-6 py-2 bg-[#3365ef] text-white rounded-lg font-medium hover:bg-[#264fd4] transition duration-300"
              >
                <Download size={18} /> Télécharger mon CV
              </a>

              <a
                href="mailto:mouadmousmih@gmail.com"
                className="flex font-anta items-center gap-2 px-6 py-2 border border-[#3365ef] text-[#3365ef] rounded-lg hover:bg-[#3365ef] hover:text-white transition duration-300"
              >
                <Mail size={18} /> Me contacter
              </a>

              <a
                href="https://www.linkedin.com/in/mouadmousmih/"
                target="_blank"
                className="flex items-center font-anta gap-2 px-6 py-2 border border-[#3365ef] text-[#3365ef] rounded-lg hover:bg-[#3365ef] hover:text-white transition duration-300"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mini footer */}
      <footer className="w-full bg-[#15192d] py-5 text-center text-xs text-gray-400 font-anta">
        © {new Date().getFullYear()} - made with love ❤️.
      </footer>
    </>
  )
}
