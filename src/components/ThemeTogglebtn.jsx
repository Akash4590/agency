import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeTogglebtn = ({theme ,settheme}) => {
useEffect(()=>{
   if(theme === 'dark'){
       document.documentElement.classList.add('dark')       
   } else{
     document.documentElement.classList.remove('dark')         
   } 
   localStorage.setItem('theme',theme)          
},[theme])
  
  return (
  <>
  <button>
   {theme === 'dark' ? ( <img onClick={()=>settheme('light')} src={assets.sun_icon } className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" srcset="" />) : ( <img  onClick={()=>settheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full' alt="" srcset="" />)}           
  </button>
  </>
  )
}

export default ThemeTogglebtn
