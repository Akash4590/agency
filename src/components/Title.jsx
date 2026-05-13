import React from 'react'
import { motion } from 'framer-motion'

const Title = ({ title, desc }) => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='flex flex-col items-center'
        >

            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.2
                }}
                viewport={{ once: true }}
                className='text-3xl sm:text-5xl font-medium text-center'
            >
                {title}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    delay: 0.4
                }}
                viewport={{ once: true }}
                className='max-w-xl text-center text-gray-500 dark:text-white/75 mb-6 mt-4'
            >
                {desc}
            </motion.p>

        </motion.div>
    )
}

export default Title