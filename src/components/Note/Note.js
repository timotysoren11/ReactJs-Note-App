import React from 'react';
import './Note.css';

import deleteIcon from '../../assets/delete.png';

const Note = (props) => {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12; // Convert 24-hour time to 12-hour time

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    let month = monthNames[date.getMonth()]; // Corrected: added parentheses

    return `${hrs}:${min} - ${amPm} | ${day}  ${month}`;
  };

  // For smooth rendering of APP
  let timeout;
  const debounce=(func, timer)=>{
    clearTimeout(timeout);
    timeout=setTimeout(func, timer);
  }

  const updateText=(text)=>{
    debounce(()=>props.updateText(text));
  }

  return (
    <div className='note' style={{ backgroundColor: props.note.color }}>
      <textarea className='note_text' defaultValue={props.note.text} onChange={(event)=>updateText(event.target.value)}/>
      <div className='note_footer'>
        <p>{formatDate(props.note.time)}</p>
        <img src={deleteIcon} alt='Delete' onClick={() => props.deleteNote(props.note.id)} />
      </div>
    </div>
  );
};

export default Note;
