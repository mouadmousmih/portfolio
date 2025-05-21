'use client'




import { FaCode, FaServer, FaDatabase, FaBug } from 'react-icons/fa'

import { cn } from '@/lib/utils'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

const sectionIcons = {
    'Développement Web': <FaCode />,
    'DevOps': <FaServer />,
    'Bases de données': <FaDatabase />,
    'Testing & Monitoring': <FaBug />,
  }
  import { 
    SiNodedotjs, SiExpress, SiJsonwebtokens, SiJavascript,
    SiDocker, SiGithubactions, SiPrometheus, SiGrafana, SiSentry,
    SiMongodb,
    SiJest, SiTestinglibrary
  } from "react-icons/si";
  import { FaBars } from "react-icons/fa";
  
  export const skillIcons = {
    'Développement Web': [
      <SiNodedotjs title="Node.js" key="node" />,
      <SiExpress title="Express.js" key="express" />,
      <SiJsonwebtokens title="JWT" key="jwt" />,
      <SiJavascript title="JavaScript (ES6)" key="javascript" />,
      <SiDocker title="Dockerfile" key="dockerfile" />,
    ],
    'DevOps': [
      <SiGithubactions title="GitHub Actions (CI/CD)" key="githubactions" />,
      <SiDocker title="Docker" key="docker" />,
      <SiPrometheus title="Prometheus" key="prometheus" />,
      <SiGrafana title="Grafana" key="grafana" />,
      <SiSentry title="Sentry" key="sentry" />,
      <FaBars title="Bash / Automatisation" key="bash" />,
    ],
    'Bases de données': [
      <SiMongodb title="MongoDB" key="mongodb" />,
      
    ],
    'Testing & Monitoring': [
      <SiJest title="Jest" key="jest" />,
      <SiTestinglibrary title="Supertest" key="supertest" />,
      <SiPrometheus title="Prometheus (Monitoring)" key="prometheus2" />,
      <SiGrafana title="Grafana (Alerting)" key="grafana2" />,
      <SiSentry title="Sentry (Erreurs applicatives)" key="sentry2" />,
    ],
  };
  

export default function Competences() {
  return (
    
    <section className="pb-20 px-auto sm:px-6  bg-black text-white  scroll-mt-24" id="Competences">
      <div className="max-w-7xl mx-auto  ml-8 mr-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Gauche : Intro */}
        <div>
          <h2
            className={cn(
              'text-4xl font-bold pb-3 text-[#3365ef] font-anta',
              'md:animate-glow'
            )}
          >
            Ce que j’apporte sur la table
          </h2>
          <p className="text-gray-400  text-justify font-lexend ">
          En tant qu’étudiant en Master 1 Informatique, j’ai eu l’opportunité d’explorer à la fois le développement backend et l’automatisation des infrastructures lors de mes stages chez PWIS et NGIT. Ces expériences m’ont permis de poser des bases solides en conception d’API, déploiement conteneurisé, supervision applicative et intégration continue.

Je continue à renforcer mes compétences autour des pratiques DevOps modernes, en combinant développement, tests, gestion des logs, et déploiement multi-environnements.

Voici un aperçu des outils et technologies que j’ai utilisés dans mes projets pour créer, automatiser et fiabiliser des applications web prêtes pour la production.
          </p>
        </div>

        {/* Droite : Accordéon avec logos */}
        <div className="space-y-4">
          {Object.entries(skillIcons).map(([groupTitle, icons], index) => (
      <Disclosure key={index}>
      {({ open }) => (
        <div className="bg-[#121212] rounded-xl px-6 py-4">
          {/* Bouton avec icône à gauche */}
          <DisclosureButton className="flex justify-between items-center w-full text-left font-anta text-white">
            <div className="flex justify-center">
              <span className="flex items-center gap-3 text-lg font-semibold tracking-wide">
                <span
                  className={cn(
                    'transition-colors duration-700',
                    open ? 'text-white' : 'text-[#3365ef]'
                  )}
                >
                  {sectionIcons[groupTitle as keyof typeof sectionIcons]}
                </span>
                {groupTitle}
              </span>
            </div>
            <ChevronDown
              className={`transition-transform duration-300 ${
                open ? 'rotate-180' : ''
              }`}
            />
          </DisclosureButton>
    
          {/* ✅ Le panneau DOIT être dans le même bloc que open */}
          <DisclosurePanel className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {icons.map((icon, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center bg-black/20 p-2 sm:p-3 rounded-xl hover:scale-105 transition text-center"
                >
                  <div
                    className={cn(
                      'text-xl sm:text-2xl mb-1 transition-colors duration-300',
                      open ? 'text-[#3365ef]' : 'text-white'
                    )}
                  >
                    {icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-gray-300 text-center break-words">
                    {icon.props.title}
                  </span>
                </div>
              ))}
            </div>
          </DisclosurePanel>
        </div>
      )}
    </Disclosure>
    
     
          ))}
        </div>
      </div>
    </section>
  )
}
