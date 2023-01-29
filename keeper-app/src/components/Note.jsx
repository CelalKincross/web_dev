import React from "react";
import ClearIcon from '@mui/icons-material/Clear';

function Note(props) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={()=> props.deleteNote(props.id)}>
                
            <ClearIcon/>
            </button>
        </div>
    )
}

export default Note;