import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOpt.css'

function HeaderOpt({avator, Icon, title, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOpt'>
        {/* if icon found then render it else not */}
        {Icon && <Icon className="headerOpt-icon"/>} 
        {avator && (
          <Avatar className="headerOpt-icon avator" src={user?.photoUrl}>
          {user?.email[0]}
          </Avatar>
        )}
        <p className='headerOpt-title'>{title}</p>
    </div>
  )
}

export default HeaderOpt