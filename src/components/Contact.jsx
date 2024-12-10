import React from 'react'
import { CONTACT } from '.'
import {motion} from "framer-motion"
import { RiLinkedinBoxFill } from 'react-icons/ri'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration: 0.5}}
        className="my-10 text-center text-4xl">Contact</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}
            className="my-4">{CONTACT.address}</motion.p>
            {/* <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}} 
            className="my-4">{CONTACT.phoneNo}</motion.p> */}
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:1}}>
            <a href="mailto:shriramkumaran142000@gmail.com" className="border-b">{CONTACT.email}</a></motion.p>

            <p>
              <div className="mt-8 flex justify-center space-x-0">
                <a href="https://www.linkedin.com/in/shriram-kumaran-9491b32b3"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-icon"
                aria-label="Visit my Linkedin profile">
                  <RiLinkedinBoxFill className="text-3xl"></RiLinkedinBoxFill>
                </a>

              </div>
            </p>


        
        </div>
    </div>
  )
}

export default Contact
