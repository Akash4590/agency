import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ServiceCard = ({ service, index }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        const bounds = divRef.current.getBoundingClientRect()

        setPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        })
    }

    return (

        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}

            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: index * 0.2
            }}
            viewport={{ once: true }}

            whileHover={{
                scale: 1.03,
                y: -5
            }}

            className='relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10'
        >

            {/* Glow Effect */}
            <motion.div
                animate={{
                    opacity: visible ? 0.7 : 0,
                    scale: visible ? 1 : 0.8
                }}
                transition={{ duration: 0.3 }}
                className='pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 mix-blend-lighten'
                style={{
                    top: position.y - 150,
                    left: position.x - 150
                }}
            />

            {/* Content */}
            <motion.div
                whileHover={{
                    padding: "1.7rem"
                }}
                transition={{ duration: 0.3 }}
                className='flex items-center gap-10 p-8 rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'
            >

                <motion.div
                    whileHover={{ rotate: 8, scale: 1.08 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className='bg-gray-100 dark:bg-gray-700 rounded-full'
                >

                    <img
                        src={service.icon}
                        alt=""
                        className='bg-white max-w-24 dark:bg-gray-900 rounded-full m-2'
                    />

                </motion.div>

                <div className='flex-1'>
                    <h3 className='font-bold text-lg'>
                        {service.title}
                    </h3>

                    <p className='text-sm mt-2 opacity-80'>
                        {service.description}
                    </p>
                </div>

            </motion.div>

        </motion.div>
    )
}

export default ServiceCard