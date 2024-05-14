import React from 'react'
import NotesHeader from './NotesHeader'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import'./css/Notes.css'




function Notes() {
  return (
    <div className='note'>
      <NotesHeader/>
      <div className='notes__contents'>
        <div className='notes__content'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      </div>
    </div>
  )
}

export default Notes
