import React from "react";


//print notes

function Note(props) {
    function handleClick() {
        props.del(props.id);
    }

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}


export default Note;
