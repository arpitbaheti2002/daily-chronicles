import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header';
import Note from './components/Note';
import Footer from './components/Footer';
import AddNote from './components/AddNote';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message = "You have unsaved changes. Are you sure you want to leave?";
      event.returnValue = message;
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [notes]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
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
      <Footer />
    </div>
  );
}

export default App;
