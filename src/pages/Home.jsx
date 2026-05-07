import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";
import Loader from "../components/Loader";

import {
  getNotes,
  createNote,
  deleteNote
} from "../services/noteService";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const data = await getNotes();
      setNotes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (noteData) => {
    try {
      const newNote = await createNote(noteData);
      setNotes([newNote, ...notes]);
    } catch (error) {
      console.log(error);
    }
  };

  const removeNote = async (id) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <NoteForm addNote={addNote} />

        {loading ? (
          <Loader />
        ) : notes.length === 0 ? (
          <div className="text-center text-slate-400 mt-10">
            No Notes Found
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                deleteNote={removeNote}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;