import React from 'react'
import { Link } from 'react-router-dom'

const ListIteam = ({note}) => {
  return (
    <Link to={`/notes/${note.id}`}>
      <div className='notes-list-iteam'>
        <h3>{note.body}</h3>
      </div>
    </Link>
  )
}

export default ListIteam