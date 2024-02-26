import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Note from './components/Note';
import AddNote from './components/AddNote';
import Quote from './components/Quote';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let savedNotes = localStorage.getItem('chronicles')
    savedNotes = savedNotes?JSON.parse(savedNotes):[]
    setNotes(savedNotes)
  }, []);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    const updatedNotes = notes.filter((note, index) => index !== id);
    setNotes(updatedNotes)
    localStorage.setItem('chronicles', JSON.stringify(updatedNotes))
  }

  return (
    <div className="App">
      <Header />
      <div className='add-note'>
        <AddNote onAdd={addNote} />
      </div>
      <div className='Notes'>
        {notes.map((note, index) => (
          <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote} />
          ))}
      </div>
      <Quote />
    </div>
  );
}

export default App;
