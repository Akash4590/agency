import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [theme, settheme] = useState('light')

  return (
    <div className='dark:bg-black relative'>
      <Navbar theme={theme} settheme={settheme}/>
    </div>
  )
}

export default App