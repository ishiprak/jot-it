import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function delNote(id) {
    setNotes((prevNotes) => {
      return (prevNotes.filter((note, index) => id !== index));
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNewNotes={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={delNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
