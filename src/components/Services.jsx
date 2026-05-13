import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'

const Services = () => {

    const servicesData = [
        {
            title: "Advertising",
            description: "We turn bold ideas into powerful digital solutions that connect engage..",
            icon: assets.ads_icon
        },
        {
            title: "Content writing",
            description: "We help you create a marketing strategy thatdrives results ",
            icon: assets.marketing_icon
        },
        {
            title: "social media marketing",
            description: "We help you build a strong social media presence and connect with your audience",
            icon: assets.content_icon
        },
        {
            title: "Content marketing",
            description: "We help you execute your plan and deliver results",
            icon: assets.social_icon
        },
    ]

    return (
        <div
            id='services'
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >

            <img
                src={assets.bgImage2}
                alt=""
                className='absolute -top-110 -left-70 -z-1 dark-hidden'
            />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <Title
                    title='How can we help?'
                    desc='From strategy to execution,we craft digital solutions that move your business forward.'
                />
            </motion.div>

            <div className='flex flex-col md:grid grid-cols-2 gap-6'>
                {servicesData.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2
                        }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <ServiceCard service={service} index={index} />
                    </motion.div>
                ))}
            </div>

        </div>
    )
}

export default Services