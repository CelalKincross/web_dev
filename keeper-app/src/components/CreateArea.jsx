import React, {useState} from 'react';

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("")

    function handleTitle(e) {
        const value=e.target.value;
        console.log(value)
        setTitle(value);
      }
    
    function handleContent(e) {
        const value=e.target.value;
        console.log(value)
        setContent(value);
    }

    return (
        <div>
            <form>
                <input name='title' onChange={handleTitle} placeholder='Title' />
                <textarea name='content' onChange={handleContent} placeholder='Take notes...'/>
                <button onClick={()=>
                    props.addNote(title, content)}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;