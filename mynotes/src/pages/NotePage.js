import React from 'react'
import notes from '../assets/data'
import {Link} from 'react-router-dom'
import { ReactComponent as Arrowleft } from '../assets/arrow-left.svg'

const NotePage = ({match}) => {
    let noteId = match.params.id
    let note = notes.find(note => note.id === Number(noteId))
    console.log("props",noteId)
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to='/'>
                        <Arrowleft />
                    </Link>
                </h3>
            </div>
            <p>{note.body}</p>
        </div>
    )
}

export default NotePage