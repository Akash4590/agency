import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'
import { motion } from 'framer-motion'

const Teams = () => {
    return (
        <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <Title
                    title='Meet the team'
                    desc='A passionate team of digital experts dedicated to your brands success.'
                />
            </motion.div>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>

                {teamData.map((team, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05,
                            y: -5
                        }}
                        className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5'
                    >

                        <img
                            src={team.image}
                            alt=""
                            className='w-12 h-12 rounded-full'
                        />

                        <div className='flex-1'>
                            <h3 className='font-bold text-sm'>{team.name}</h3>
                            <p className='text-xs opacity-60'>{team.title}</p>
                        </div>

                    </motion.div>

                ))}

            </div>

        </div>
    )
}

export default Teams