import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import noteContent from "../notes";



function App(){
  return (
      <div>
        <Header />
        {noteContent.map(noteItem => (
          <Note 
            key = {noteItem.key}
            title = {noteItem.title}
            content = {noteItem.content}
          />
        ))}
        <Footer />
      </div>
  )

}

export default App;