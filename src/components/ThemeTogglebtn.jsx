import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeTogglebtn = ({ theme, settheme }) => {
useEffect(()=>{
  const preferdarkmode =  window.matchMedia('(prefers-color-scheme: dark)').matches;
  settheme(theme || (preferdarkmode ? "dark" :"light"))
},[])

  useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', theme)
}, [theme])

  return (
    <button
      onClick={() =>
        settheme(theme === 'dark' ? 'light' : 'dark')
      }
      className='cursor-pointer'
    >

      {
        theme === 'dark' ? (
          <img
            src={assets.sun_icon}
            className='w-8 h-8 p-1.5 border border-gray-500 rounded-full'
            alt="sun"
          />
        ) : (
          <img
            src={assets.moon_icon}
            className='w-8 h-8 p-1.5 border border-gray-500 rounded-full'
            alt="moon"
          />
        )
      }

    </button>
  )
}

export default ThemeTogglebtn