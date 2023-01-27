import React, {useState} from 'react';

function CreateArea(props) {
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
            <form onSubmit={(e)=>{
                    props.addNote(note);
                    setNote({
                        title: "",
                        content: ""
                        })
                    e.preventDefault();
                    }}>
                <input name='title' value={note.title} onChange={handleChanges} placeholder='Title' />
                <textarea name='content' value={note.content} onChange={handleChanges} placeholder='Take notes...'/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default CreateArea;