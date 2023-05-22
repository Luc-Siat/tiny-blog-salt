import React from 'react'

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen p-2 margin-12 bg-slate-100 shadow-lg z-10 bg-opacity-95">
      <ul className="flex gap-8 justify-between container">
        <li><i className="fa-regular fa-bookmark"></i> Tiny blog</li>
        <li>
          <ul className="flex gap-8">
            <li><i className="fa-solid fa-user"></i></li>
            <li><i className="fa-solid fa-bars"></i></li>
          </ul>
          </li>
      </ul>
    </div>
  )
}
