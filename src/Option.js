import React from 'react'
import './Option.css'

function Option({Icon, title, color, onClick}) {
  return (
    <div onClick={onClick} className='option'>
      {Icon && <Icon style={{color: color}} className="item-icon"/>}
      <p style={{color: color}}>{title}</p>
    </div>
  )
}

export default Option