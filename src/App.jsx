import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/Services'
import OurWork from './components/OurWork'

const App = () => {

const [theme, settheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} settheme={settheme}/>
      {/* hero section */}
      <Hero/>
      <Trustedby/>
      <Services />
      <OurWork/>
    </div>
  )
}

export default App