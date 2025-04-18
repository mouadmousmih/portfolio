'use client'

import { motion } from 'framer-motion'
import {
  FaDocker,
  FaGithub,
  FaLinux,
  FaGitlab,
  FaTerminal,
  FaServer
} from 'react-icons/fa'

const devopsIcons = [
  FaDocker,
  FaGithub,
  FaLinux,
  FaGitlab,
  FaTerminal, // Terminal/bash
  FaServer    // Serveur / infra
]

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase
} from 'react-icons/fa'

const devIcons = [
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase
]


const DevopsFloat = () => {
  
  return (
    
    <div className=" hidden lg:flex">
      <div className='   left-4 absolute  top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20 pointer-events-none'>
      {devopsIcons.map((Icon, i) => {
        const delay = i * 0.3

        return (
          <motion.div
            key={i}
            className="text-[#3365ef]   drop-shadow-[0_0_6px_#3365ef] "
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <Icon size={25} />
          </motion.div>
        )
      })}
</div>
<div className=' right-4 absolute   top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 z-20 pointer-events-none'>
{devIcons.map((Icon, i) => {
        const delay = i * 0.3

        return (
          <motion.div
            key={i}
            className="text-[#3365ef] drop-shadow-[0_0_10px_#3365ef]"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          >
            <Icon size={25} />
          </motion.div>
        )
      })}
      </div>
    </div>
    
  )
}

export default DevopsFloat
