import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/NotesBox.css'

function NotesBox() {
  return (
    <div className='notebox'>
      <div className='notebox__info'>
            <Avatar />
            <h5> Name </h5>
      </div>
      <div className='notebox__note'>
        <h5>
            What is your question or link 
        </h5>
      </div>
    </div>
  )
}

export default NotesBox
