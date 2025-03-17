import React from 'react'
import Header from './Header'
import Home from './Home'
import Cards from './cards/Cards'

const Body = () => {
  return (
    <div className="relative w-full min-h-screen">
        {/* Background split applied globally */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-[#dd3e1ac5]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7ecbd5]"></div>
        
    <Header/>
 
    <Cards/>
    </div>
  )
}

export default Body