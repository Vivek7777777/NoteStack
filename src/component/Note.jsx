import React from "react";

function Note (params){

    return (
        <div className="note">
            <h1 className="">
                {params.title}   
            </h1>
            <p className="">
                {params.content}
            </p>
        </div>
    )
}

export default Note;