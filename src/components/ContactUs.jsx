import React, { useState } from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

const ContactUs = () => {

    const [loading, setLoading] = useState(false)

    const onSubmit = async (event) => {

        event.preventDefault()

        setLoading(true)

        const formData = new FormData(event.target)

        formData.append(
            "access_key",
            "2e368b3c-d59d-4d3e-8818-635f0b0d165a"
        )

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            )

            const data = await response.json()

            if (data.success) {

                toast.success('Thank you for your submission!')

                event.target.reset()

            } else {

                toast.error(data.message)

            }

        } catch (error) {

            toast.error(error.message)

        } finally {

            setLoading(false)

        }

    }

    return (

        <div
            id='contact-us'
            className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >

            <Title
                title='Reach out to us'
                desc='From strategy to execution,we craft digital solution that move your business forward.'
            />

            <motion.form
                onSubmit={onSubmit}

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}

                className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'
            >

                {/* Name */}

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >

                    <p className='mb-2 text-sm font-medium'>
                        Your name
                    </p>

                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus-within:border-primary transition-all duration-300'>

                        <img src={assets.person_icon} alt="" />

                        <input
                            name="name"
                            type="text"
                            placeholder='Enter your name'
                            className='w-full p-3 text-sm outline-none bg-transparent'
                            required
                        />

                    </div>

                </motion.div>

                {/* Email */}

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >

                    <p className='mb-2 text-sm font-medium'>
                        Email id
                    </p>

                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus-within:border-primary transition-all duration-300'>

                        <img src={assets.email_icon} alt="" />

                        <input
                            name="email"
                            type="email"
                            placeholder='Enter your email'
                            className='w-full p-3 text-sm outline-none bg-transparent'
                            required
                        />

                    </div>

                </motion.div>

                {/* Message */}

                <motion.div
                    className='sm:col-span-2'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >

                    <p className='mb-2 text-sm font-medium'>
                        Message
                    </p>

                    <textarea
                        name="message"
                        rows={8}
                        placeholder='Enter your message'
                        className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 focus:border-primary transition-all duration-300'
                        required
                    />

                </motion.div>

                {/* Button */}

                <motion.button
                    type='submit'

                    whileHover={{
                        scale: 1.05
                    }}

                    whileTap={{
                        scale: 0.95
                    }}

                    className='w-max flex items-center gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer shadow-lg hover:shadow-primary/40 transition-all duration-300'
                >

                    {loading ? 'Sending...' : 'Submit'}

                    <motion.img
                        src={assets.arrow_icon}
                        alt=""
                        className='w-4'
                        animate={{
                            x: [0, 5, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5
                        }}
                    />

                </motion.button>

            </motion.form>

        </div>
    )
}

export default ContactUs