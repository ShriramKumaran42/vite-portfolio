import React from 'react'
import { delay, motion } from "framer-motion"
import { HERO_CONTENT } from '.'
import pic from "../assets/PORTRAIT.jpg"

// const textVariants = {
//   hidden: {opacity: 0, y: 50},
//   visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}}
// }

const container =(delay)=>({
  hidden: {x: -100, opacity:0},
  visible: {
    x:0,
    opacity:1,
    transition:{duration: 0.5, delay: delay},
  },
});



const Hero = () => {
  return (
  <div className="border-b border-neutral-900 pb-4 lg:mb:36">
    <div className="flex flex-wrap">
        <div className="mx-auto w-full lg:w-1/2">
           <div className=" mx flex flex-col items-center lg:items-start">
              <motion.h1
              id="Title"
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              style={{fontFamily:"revert-layer"}}
              
              className=" pb- text-6xl font-bold bg-gradient-to-r from-pink-500 via-slate-500 to-rose-500 bg-clip-text text-transparent tracking-tight lg:mt-16 lg:text-7xl ">ShriramKumaran.R</motion.h1>
              <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-shadow text-shadow-blur-2 text-shadow-white bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Developer</motion.span>
              <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className=" my-2 max-w-xl py- font- tracking-tight">{HERO_CONTENT.introduction}</motion.p>
              <motion.a 
               variants={container(1)}
               initial="hidden"
               animate="visible"
              className=" bg-stone-50 text-stone-900 p-3  mt-4 inline-block rounded-2xl hover:bg-rose-600"
              href={HERO_CONTENT.resumeLink}
              download
              rel="noopener noreferrer"
              target="_blank">
                <span relative="relative z-10">
                {HERO_CONTENT.resumeLinkText}
                </span>
              </motion.a>
           </div>
           
        </div>
        <div className=" mx-auto w-full lg:w-1/4 lg:p-8 ">
          <motion.img 
          initial={{x:100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{duration:1, delay:1.2}}
          className="rounded-2xl " src={pic} alt="ShriramKumaran.jpg">
         </motion.img>
        </div>
        
    </div>
  </div>
  )
}

export default Hero
