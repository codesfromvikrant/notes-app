import { MdDeleteForever } from 'react-icons/md'

const Note = ({ id, text, bgColor, date, handleDeleteNote }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className="note">
      <p >{text}</p>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.5em'
          onClick={() => handleDeleteNote(id)} />
      </div>
    </div >
  )
}

export default Note;