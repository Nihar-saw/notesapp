import React from 'react'
import { MdDelete } from 'react-icons/md'

const Notecard = ({ note, deleteNote }) => {
  return (
    <div className='bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-700'>
      <h2 className='text-xl font-semibold text-cyan-300 mb-2'>
        {note.title}
      </h2>

      <p className='text-slate-300 mb-4'>
        {note.content}
      </p>

      <button
        onClick={() => deleteNote(note._id)}
        className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 transition'
      >
        <MdDelete />
        Delete
      </button>
    </div>
  )
}

export default Notecard