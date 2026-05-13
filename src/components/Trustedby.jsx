import React from 'react'
import { company_logos } from '../assets/assets'
import { motion } from "framer-motion";

const Trustedby = () => {

  return (

    <div className='flex flex-col items-center px-4 sm:px-12 md:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>

      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='font-semibold'
      >
        Trusted by Leading Companies
      </motion.h3>


      {/* Logos */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.15 }}
        className='flex items-center justify-center flex-wrap gap-10 m-4'
      >

        {company_logos.map((logo, index) => (

          <motion.img
            key={index}
            src={logo}
            alt=""
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className='max-h-5 sm:max-h-6 dark:drop-shadow-xl cursor-pointer'
          />

        ))}

      </motion.div>

    </div>
  )
}

export default Trustedby