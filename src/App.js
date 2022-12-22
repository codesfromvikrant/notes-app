import { useState } from "react"
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note!",
    date: "12 / 12 / 2022"
  },
  {
    id: nanoid(),
    text: "This is my second note!",
    date: "28 / 12 / 2022"
  },
  {
    id: nanoid(),
    text: "This is my third note!",
    date: "10/1/2023"
  }
  ]);

  const addnote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  }

  return (
    <div className="container">
      <NotesList notes={notes} handleAddNote={addnote} handleDeleteNote={deleteNote} />
    </div>
  )
}

export default App;