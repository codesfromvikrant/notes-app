import Note from './Note';
import Addnote from './Addnote'

const NotesList = ({ notes, handleAddNote, handleDeleteNote, darkMode }) => {
  return (
    <div className="notes-list">
      <Addnote handleAddNote={handleAddNote} />
      {notes.map((note) => {
        return (
          <Note
            key={note.id}
            id={note.id}
            text={note.text}
            bgColor={note.bgColor}
            date={note.date}
            handleDeleteNote={handleDeleteNote}
          />
        )
      })}
    </div>
  )
}

export default NotesList;