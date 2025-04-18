'use client'



import { FaCode, FaServer, FaDatabase, FaBug } from 'react-icons/fa'

import { cn } from '@/lib/utils'
import {
  FaNodeJs,
  FaGitAlt,
  FaReact,
  FaDocker,
  FaLinux,
  FaGitlab,
} from 'react-icons/fa'
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrometheus,
  SiGrafana,
  SiVault,
  SiJest,
  SiElasticsearch,
  SiKibana,
  SiTailwindcss,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiGithubactions,
  SiVitest,
  SiEslint,
  SiSentry,
  SiMinio,
} from 'react-icons/si'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'

const sectionIcons = {
    'Développement Web': <FaCode />,
    'DevOps': <FaServer />,
    'Bases de données': <FaDatabase />,
    'Testing & Monitoring': <FaBug />,
  }
const skillIcons = {
  'Développement Web': [
    <SiHtml5 title="HTML5" key="html" />,
    <SiCss3 title="CSS3" key="css" />,
    <SiJavascript title="JavaScript" key="js" />,
    <FaReact title="React" key="react" />,
    <SiNextdotjs title="Next.js" key="next" />,
    <SiTailwindcss title="Tailwind" key="tailwind" />,
  ],
  'DevOps': [
    <FaDocker title="Docker" key="docker" />,
    <FaGitlab title="GitLab CI/CD" key="gitlab" />,
    <SiSentry title="Sentry" key="sentry" />,
    <FaLinux title="Linux" key="linux" />,
    <SiVault title="Vault" key="vault" />,
  ],
  'Bases de données': [
    <SiMongodb title="MongoDB" key="mongo" />,
    <SiPostgresql title="PostgreSQL" key="pg" />,
    <SiMinio title="MinIO" key="minio" />,
    <FaDatabase title="HDFS" key="hdfs" />,
  ],
  'Testing & Monitoring': [
    <SiJest title="Jest" key="jest" />,
    <SiVitest title="Vitest" key="vitest" />,
    <SiSentry title="Sentry" key="sentry2" />,
    <SiEslint title="ESLint" key="eslint" />,
    <SiPrometheus title="Prometheus" key="prometheus" />,
    <SiGrafana title="Grafana" key="grafana" />,
    <SiElasticsearch title="Elastic" key="elastic" />,
    <SiKibana title="Kibana" key="kibana" />,
  ],
}

export default function Competences() {
  return (
    
    <section className="pb-20 px-auto sm:px-6  bg-black text-white" id="competences">
      <div className="max-w-7xl mx-auto  ml-8 mr-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Gauche : Intro */}
        <div>
          <h2
            className={cn(
              'text-4xl font-bold pb-3 text-[#3365ef] font-anta',
              'animate-glow'
            )}
          >
            Ce que j’apporte sur la table
          </h2>
          <p className="text-gray-400  text-justify ">
            Au fil de mes expériences en développement backend et en
            automatisation d’infrastructure, j’ai construit une boîte à outils
            moderne, polyvalente et prête à l’action. Je combine des compétences
            en développement d’API, déploiement conteneurisé, supervision et
            gestion de la donnée pour répondre aux exigences des projets
            techniques actuels. Voici un aperçu des technologies et pratiques
            que j’utilise au quotidien pour créer, sécuriser, automatiser et
            maintenir des applications fiables et scalables.
          </p>
        </div>

        {/* Droite : Accordéon avec logos */}
        <div className="space-y-4">
          {Object.entries(skillIcons).map(([groupTitle, icons], index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="bg-[#121212] rounded-xl px-6 py-4">
                  <DisclosureButton className="flex justify-between items-center w-full text-left font-anta text-white">
                    <div className='flex justify-center '>
                   
                    <span className="flex items-center gap-3 text-lg font-semibold tracking-wide">
                    <span className="text-[#3365ef]">
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
                  <DisclosurePanel className="mt-4">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 text-white">
  {icons.map((icon, i) => (
    <div
      key={i}
      className="flex items-center gap-2 bg-black/20 p-2 sm:p-3 rounded-xl hover:scale-105 transition"
    >
      <div className="text-xl sm:text-2xl">{icon}</div>
      <span className="text-[11px] sm:text-xs font-semibold text-gray-300 whitespace-nowrap">
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
