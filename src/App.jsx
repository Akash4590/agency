import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'

const App = () => {

const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Toaster/>
      <Navbar theme={theme} settheme={settheme}/>
      {/* hero section */}
      <Hero/>
      <Trustedby/>
      <Services />
      <OurWork/>
      <Teams/>
      <ContactUs/>
    </div>
  )
}

export default App