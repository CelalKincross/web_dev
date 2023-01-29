import React, {useState} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {
    const [editMode, setEditMode] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChanges(e) {
        const { name, value }=e.target;
        console.log(e.target)
        setNote((prevNotes) => ({
            ...prevNotes, [name]: value
        }));
      }


    return (
        <div>
            <form class="create-note" onSubmit={(e)=>{
                    props.addNote(note);
                    setNote({
                        title: "",
                        content: ""
                        })
                    e.preventDefault();
                    }}>
                {editMode && <input 
                    name='title' 
                    value={note.title} 
                    onChange={handleChanges} 
                    placeholder='Title' 
                />}

                <textarea 
                    name='content' 
                    value={note.content} 
                    onChange={handleChanges} 
                    placeholder='Take notes...'
                    rows={editMode && 3}
                    onClick={()=> setEditMode(true)}
                />
                <Zoom in={editMode}>
                    <Fab type="submit">
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea;