import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes1 from "../notes"
import CreateArea from "./CreateArea";
// note section of app
function App() {
  const [notes, setNotes] = useState({})

  function addNote(title, content) {
    const newNote= {'title': title, 'content': content};
    console.log(newNote)
    // setNotes((prevNotes) => {
    //   return ({...prevNotes, newNote})});
  }

    return (
    <div>
        <Header />
        <CreateArea addNote={addNote} />
        {/* {notes.map(noteItem => (
      <Note 
      key={noteItem.key}
      title={noteItem.title}
      content={noteItem.content}
      />)
      )} */}
        <Footer />
    </div>);
}

export default App;