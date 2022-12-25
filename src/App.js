import { useState, useEffect } from "react"
import { nanoid } from 'nanoid'
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const handleSearchText = (text) => {
    setSearchText(text);
  }

  const addnote = ({ text, bgColor }) => {
    if (!bgColor) {
      bgColor = "#ffffff";
    }
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      bgColor: bgColor,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    console.log(id)
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`} >
      <div className='container'>
        <Header
          handleToggleDarkMode={setDarkMode}
          darkMode={darkMode} />
        <Search
          handleSearchText={handleSearchText}
          searchtext={searchText}
          darkMode={darkMode} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNote={addnote}
          handleDeleteNote={deleteNote} />
      </div>
    </div >
  )
}

export default App;