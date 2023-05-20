import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(ind){
    setNotes(prevNotes => {
      return (prevNotes.filter((val, index) => {
        return index != ind
      }))
    })
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote} />
      {notes.map((noteItem, index) => {
        // console.log(noteItem.content);
        return <Note key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} del = {deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
