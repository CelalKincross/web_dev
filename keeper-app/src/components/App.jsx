import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import CreateArea from "./CreateArea";
// note section of app
function App() {
  const [notes, setNotes] = useState([])

  function addNote(title) {
    setNotes((prevItems) => {
      return ([
        ...prevItems, title
      ])
    })
  }

    return (
    <div>
        <Header />
        <CreateArea addNote={addNote} />
        {notes.map((note, index) => 
          <Note 
          key={index}
          id={index}
          title={note.title} 
          content={note.content} 
          />
        )}
        
        <Footer />
    </div>);
}

export default App;