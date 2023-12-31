import React, { useState } from 'react';

function AddNote(props) {
  const [title,  setTitle] = useState('');
  const [text,  setText] = useState('');

  function addNote(e)
  {
    const note = {
      'title': title,
      'content': text
    }

    props.onAdd(note);
    setTitle('');
    setText('');

    e.preventDefault();
  }

  return (
    <div className='form'>
      <input className='form-heading' placeholder='Add Heading' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea className='form-body' rows={3} placeholder='Add note' value={text} onChange={(e) => setText(e.target.value)}/>
      <button className='add-button' onClick={addNote}>Add</button>
    </div>
  )
}

export default AddNote;
