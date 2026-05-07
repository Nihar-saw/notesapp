import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-slate-900 border-b border-slate-700 px-6 py-4 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-cyan-400'>
        NoteApp
      </h1>

      <p className='text-slate-300'>
        MERN Notes
      </p>
    </div>
  )
}

export default Navbar