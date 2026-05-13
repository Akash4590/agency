import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const OurWork = () => {

    const workData = [
        {
            title: 'Mobile app marketing',
            description: "we turn bold ideas into powerful digital solutions that connect engage and convert",
            img: assets.work_mobile_app
        },
        {
            title: 'Dashboard management',
            description: "we help you execute your plan and deliver results",
            img: assets.work_dashboard_management
        },
        {
            title: 'Fitness app promotion',
            description: "we help you create a marketing strategy that drives results",
            img: assets.work_fitness_app
        },
    ]

    return (
        <div
            id='ourwork'
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <Title
                    title='Our latest work'
                    desc='From strategy to execution we craft digital solution that move your business forward'
                />
            </motion.div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>

                {workData.map((work, index) => (

                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.04,
                            y: -8
                        }}
                        className='cursor-pointer'
                    >

                        <img
                            src={work.img}
                            className='w-full rounded-xl'
                            alt=""
                        />

                        <h3 className='mt-3 mb-2 text-lg font-semibold'>
                            {work.title}
                        </h3>

                        <p className='text-sm opacity-60 w-5/6'>
                            {work.description}
                        </p>

                    </motion.div>

                ))}

            </div>

        </div>
    )
}

export default OurWork