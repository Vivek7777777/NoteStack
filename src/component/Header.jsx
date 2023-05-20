import React from "react";
import EditNoteIcon from '@mui/icons-material/EditNote';

function Header(){
  return (
    <header>
        <h1> 
          <EditNoteIcon />
          NoteStack 
        </h1>
    </header>
  );
}

export default Header;