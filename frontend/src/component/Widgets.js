import React from 'react'
import WidgetContent from './WidgetContent'
import './css/Widget.css';

function Widgets() {
  return (
    <div className='widget'>
      <div className='widget__header'>
          <h5> Spaces to follow</h5>
      </div>
      <div className='widget__contents '>
        <WidgetContent />
        <WidgetContent />
        <WidgetContent />
      </div>
    </div>
  )
}

export default Widgets
