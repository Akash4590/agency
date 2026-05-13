import React from 'react'
import assets from '../assets/assets'
import { motion } from 'framer-motion'

const Footer = ({ theme }) => {

    const socialIcons = [
        assets.facebook_icon,
        assets.instagram_icon,
        assets.linkedin_icon,
        assets.twitter_icon
    ]

    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'
        >

            {/* footer top */}

            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

                {/* Left Column */}

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}

                    className='space-y-5 text-sm text-gray-700 dark:text-gray-400'
                >

                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        src={theme === 'dark' ? assets.logo_dark : assets.logo}
                        alt=""
                        className='w-32 sm:w-44'
                    />

                    <p className='max-w-md leading-6'>
                        From strategy to execution we craft digital solution that move your business forward
                    </p>

                    <ul className='flex gap-8 flex-wrap'>

                        {['Home', 'Services', 'Our Work', 'Contact us'].map((item, index) => (

                            <motion.li
                                key={index}
                                whileHover={{
                                    y: -2,
                                    scale: 1.05
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >

                                <a
                                    className='hover:text-primary transition-all duration-300'
                                    href={
                                        item === 'Home'
                                            ? '#hero'
                                            : item === 'Services'
                                            ? '#services'
                                            : item === 'Our Work'
                                            ? '#ourwork'
                                            : '#contact-us'
                                    }
                                >
                                    {item}
                                </a>

                            </motion.li>

                        ))}

                    </ul>

                </motion.div>

                {/* Right Column */}

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}

                    className='text-gray-600 dark:text-gray-400 max-w-md'
                >

                    <h3 className='font-semibold text-lg'>
                        Subscribe to our newsletter
                    </h3>

                    <p className='text-sm mt-2 mb-6 leading-6'>
                        The latest news, articles and resources sent to your inbox weekly.
                    </p>

                    <div className='flex gap-2 text-sm max-sm:flex-col'>

                        <motion.input
                            whileFocus={{
                                scale: 1.02
                            }}
                            type="email"
                            placeholder='Enter your email'
                            className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500 focus:border-primary transition-all duration-300'
                        />

                        <motion.button
                            whileHover={{
                                scale: 1.05
                            }}
                            whileTap={{
                                scale: 0.95
                            }}
                            className='bg-primary text-white rounded px-6 py-3 shadow-lg hover:shadow-primary/30 transition-all duration-300'
                        >
                            Subscribe
                        </motion.button>

                    </div>

                </motion.div>

            </div>

            {/* bottom footer */}

            <hr className='border-gray-300 dark:border-gray-600 my-6' />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}

                className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'
            >

                <p>
                    Copyright 2026 agency.io @Growrise - All rights reserved.
                </p>

                <div className='flex items-center justify-between gap-4'>

                    {socialIcons.map((icon, index) => (

                        <motion.img
                            key={index}
                            src={icon}
                            alt=""
                            whileHover={{
                                scale: 1.2,
                                y: -4,
                                rotate: 5
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300
                            }}
                            className='cursor-pointer'
                        />

                    ))}

                </div>

            </motion.div>

        </motion.div>
    )
}

export default Footer