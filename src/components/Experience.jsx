import React, { useRef } from 'react'
import { EDUCATION, EXPERIENCES } from '../components'
import {motion} from "framer-motion"

const Experience = () => {
  const educationRef = useRef(null)
  return (
    <div className="" id="eduacation" ref={educationRef}>
      <div className="mx-auto max-w-full px-4">  
        <motion.h1
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 1.5}}   className="my-20 text-center text-4xl">Education</motion.h1>
        <div className="flex flex-col space-y-8">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="rounded-xl border border-x-purple-300/20 p-6">
              <h3 className="mb-2 text-center lg:text-2xl">{edu.degree}</h3>
              <h4 className="text-center text-sm lg:text-base">{edu.institution}</h4>
              <p className="text-center text-sm lg:text-base">{edu.duration}</p>
              {/* <p className="text-center mt-4">{edu.description}</p> */}
            </div>
          ))}
        </div>
        

      </div>
    </div>
  )
}

export default Experience
