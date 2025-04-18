import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import {Mail, Download} from 'lucide-react'
import DevopsFloat from './DevopsFloat'

import { hero } from '@/content/data'
import { projects } from '@/content/data'





const Section_hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">
    {/* Spotlights  */}
    <DevopsFloat/>
    <Spotlight className="absolute top-0 w-40 h-40 md:w-[600px] md:h-[600px] blur-2xl opacity-70  " fill="blue" />
    <Spotlight className="absolute top-[80px] left-[1000px] w-40 h-40 md:w-[600px] md:h-[600px] blur-2xl opacity-50  rotate-180" fill="blue" />
    
    

   
     

    {/* Grid Background */}
    <div
      className={cn(
        "absolute inset-0 z-0",
        "[background-size:40px_40px]",
        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        "dark:[background-image:linear-gradient(to_right,#0e0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0e0c0c_1px,transparent_1px)]"
      )} 
    />
    {/* Radial Gradient Overlay */}
    <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-10"></div>
    
   
    <div className="relative z-20 mt-10 text-center">
    
    <h1 className="text-4xl font-bold pb-5 sm:pb-3 text-[#3365ef] font-anta px-4 mx-16 sm:px-0 sm:mx-0"><span className=' animate-glow'>{hero.titleParts.beforeEmoji}<span className='inline-block animate-wave origin-[70%_70%]'>{hero.titleParts.emoji}</span>{hero.titleParts.afterEmoji}</span> </h1>
      <h2 className=" pr-3 pl-3 font-blod  mx-8 sm:mx-0 tracking-widest text-[14px] text-blue-100 mb-2 ">{hero.subtitle.before} <span className='text-[#3365ef] font-bold'> {hero.subtitle.highlight1}
        </span> {hero.subtitle.middle} <span className='text-[#3365ef] font-bold'> {hero.subtitle.highlight2}</span> {hero.subtitle.after}
      </h2>
      <h2 className="   pr-3 pl-3   mx-4 sm:mx-0   tracking-widest text-[14px]  text-blue-100 mb-2">  
        {hero.description}</h2>
   </div>

   <div className=' gap-4 mt-6  sm:flex px-16 sm:px-0  items-center z-20 '>
      <a href="/cv.pdf" download className=' font-anta text-sm  mb-4 sm:mb-0 items-center flex  gap-1 px-6 py-2 border-[1.5px] hover:font-medium border-[#3365ef]  bg-[#3365ef] rounded-[16px]    text-white hover:bg-transparent hover:border hover:border-[#3365ef] hover:text-[#3365ef] transition duration-300 shadow-md '> <Download size={18}/> Télécharger CV</a>
      <a href="" className='  font-anta text-sm items-center flex gap-1 px-6 py-2 border-[1.5px]   font-medium   border-[#3365ef] text-[#3365ef] rounded-[16px]  hover:bg-[#3365ef] hover:text-white transition duration-300 shadow-md  '> <Mail size={18} />  Contacter moi </a>
    </div>
  </section>
  )
}

export default Section_hero
