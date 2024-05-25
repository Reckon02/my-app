import React from 'react'
import Image from 'next/image'



const Nav = () => {
  return (
<nav className="sticky top-0 z-10 bg-white">
  <div className="max-w-5xl mx-auto px-2">
    <div className="flex items-center justify-between h-16">
      <img src="/hydrologo.png" alt="Hydratech" width={100} />
      <div className="flex space-x-4 text-gray-900 pl-3">
        <a href="#">Dashboard</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Nav