import { useState } from "react";

const Addnote = ({ handleAddNote }) => {
  const [noteText, setNotetext] = useState('');
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNotetext(event.target.value);
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNotetext('');
    }
  }

  return (
    <div className="note-new">
      <textarea
        placeholder="Type to add a note"
        value={noteText}
        onChange={handleChange}
      >
      </textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  )
}

export default Addnote;