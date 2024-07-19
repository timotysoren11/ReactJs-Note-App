import React, { useEffect, useState } from 'react';
import './App.css';
import NoteContainer from './components/NoteContainer/NoteContainer';
import Sidebar from './Sidebar/Sidebar';

function App() {

  const [notes,setNotes]=useState(JSON.parse(localStorage.getItem('notes-app')) || []);

  const addNote =(color)=>{
    const tempNotes = [...notes];

    tempNotes.push({
      id:Date.now() + "" +Math.floor(Math.random()*78),
      text:"",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  }
  
  //To delete the Notes
  const deleteNote =(id) =>{
    const tempNotes=[...notes]

    const index=tempNotes.findIndex(item=>item.id===id)
    if(index<0) return
    tempNotes.splice(index,1);
    setNotes(tempNotes)
  };

  const updateText =(text, id) =>{
    const tempNotes =[...notes];

    const index = tempNotes.findIndex((item) =>item.id===id);
    if(index <0) return;

    tempNotes[index].text =text;
    setNotes(tempNotes);
  }


  // To store the change in Notes in the local storage
  useEffect(() =>{
    localStorage.setItem('notes-app',JSON.stringify(notes));
  })

  return (
    <div className="App">
      <Sidebar addNote={addNote}/>
      <NoteContainer notes={notes} deleteNote={deleteNote}
      updateText={updateText}/>
    </div>
  );
}

export default App;
