import React from 'react';

function Note(props){
  return (
    <div className="note">
      <h1 className='note-heading'>{props.title}</h1>
      <p className='note-text'>{props.content}</p>
      <button className='delete-button' onClick={() => props.deleteNote(props.id)}>DELETE</button>
    </div>
  );
}

export default Note;