import React, { useState } from 'react'

const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !content) return

    addNote({
      title,
      content
    })

    setTitle('')
    setContent('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-700 mb-8'
    >
      <div className='mb-4'>
        <input
          type='text'
          placeholder='Enter note title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full p-3 rounded-lg bg-slate-900 border border-slate-600 outline-none focus:border-cyan-400'
        />
      </div>

      <div className='mb-4'>
        <textarea
          rows='5'
          placeholder='Write your note...'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='w-full p-3 rounded-lg bg-slate-900 border border-slate-600 outline-none focus:border-cyan-400'
        ></textarea>
      </div>

      <button
        type='submit'
        className='bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg font-semibold transition'
      >
        Add Note
      </button>
    </form>
  )
}

export default NoteForm