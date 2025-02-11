import React from 'react';
import './NoteContainer.css';
import Note from '../Note/Note';

const NoteContainer = (props) => {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };

  const notes = reverseArray(props.notes);

  return (
    <div className='note-container'>
      <div className='note-header'>
        <h2>Notes</h2>
        <nav>
          <a href="/" className="navbar-logo">Home</a>
          <a href="/logout" className="navbar-logout">Logout</a>
        </nav>
      </div>
      <div className='note-container_notes custom-scroll'>
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note key={item.id} note={item} 
            deleteNote={props.deleteNote} updateText={props.updateText}/>
          ))
        ) : (
          <h3>No Notes present</h3>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
