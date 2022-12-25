import { useState } from "react";

const Addnote = ({ handleAddNote }) => {
  const [noteText, setNotetext] = useState({
    text: '',
    bgColor: ''
  });
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNotetext((prevNote) => {
        return {
          ...prevNote,
          text: event.target.value
        }
      });
    }
  }

  let bgColor;
  const handleSaveClick = () => {
    if (noteText.text.trim().length > 0) {
      //console.log(bgColor)
      handleAddNote(noteText);
      setNotetext(prevNote => ({
        text: '',
        bgColor: ''
      }));
    }
  }

  //console.log(typeof (noteText.text.length))


  return (
    <div className="note-new">
      <textarea
        placeholder="Type to add a note"
        value={noteText.text}
        onChange={handleChange}
      >
      </textarea>
      <div className="note-footer">
        {<small>{characterLimit - noteText.text.length} Remaining</small>}
        <button className="save" onClick={handleSaveClick}>Save</button>
        <div id="colors" onClick={(event) => {
          setNotetext(prevNote => ({
            ...prevNote,
            bgColor: window.getComputedStyle(event.target).backgroundColor
          }))
        }}>
          <div className="color red"></div>
          <div className="color blue"></div>
          <div className="color yellow"></div>
          <div className="color green"></div>
        </div>
      </div>
    </div>
  )
}

export default Addnote;