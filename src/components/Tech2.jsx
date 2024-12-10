import React from 'react'
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import {motion} from "framer-motion"

const iconVariants = (duration) =>({
    initial: { y: -10},
    animate: {
      y:[10, -10],
      transition: {
        duration: duration,
        case: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  
  });


const Tech2 = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
    <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:1.5}}
    className="flex flex-wrap items-center justify-center gap-4">
      <motion.div
       variants={iconVariants(2.5)}
       initial="initial"
       animate="animate"
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
       onHoverStart={() => console.log('hover started!')}
      className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiAdobephotoshop className="text-7xl text-blue-400"/>
       </motion.div>
       <motion.div
       variants={iconVariants(3)}
       initial="initial"
       animate="animate"
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
       onHoverStart={() => console.log('hover started!')}
       className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiAdobeaftereffects className="text-7xl text-purple-600"/>
       </motion.div>
       <motion.div
       variants={iconVariants(5)}
       initial="initial"
       animate="animate"
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95 }}
       onHoverStart={() => console.log('hover started!')}
       className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiAdobepremierepro className="text-7xl text-violet-700"/>
       </motion.div>
    </motion.div>
    </div>
  )
}

export default Tech2
