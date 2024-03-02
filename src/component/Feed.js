import React from 'react'
import NotesBox from './NotesBox'
import './css/Feed.css'
import Post from './Post'

function Feed() {
  return (
    <div className='feed'>
      <NotesBox/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed
