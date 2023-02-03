import { Avatar } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import './Posts.css'
import Option from './Option';

import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import NotesIcon from '@mui/icons-material/Notes';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

// import myImage from './stuff/garbage.png'

const Posts = forwardRef(({name, description, message, photoUrl}, ref) => {
  const [color, setColor] = useState("gray");
  const [label, setLabel] = useState("like");

  const changeColor = () => {
    setColor(prevColor => (prevColor === "gray" ? "#0a66c2" : "gray"))
    setLabel(prevLabel => (prevLabel === "like" ? "liked" : "like"))
  }

  return (
    <div ref={ref} className='post-container'>
        <div className="post-header">
          <div className="about-container"> 
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="about">
                <p>{name}</p>
                <p>{description}</p>
            </div>

            {/* <div className="blue-tick">
              <img src="https://cdn-icons-png.flaticon.com/128/2951/2951912.png" alt="blue-tick" />
            </div> */}
          </div>

          <div className="follow">
              <AddIcon/>
              <p>follow</p>
          </div>
        </div>

        <div className="post-body">
          <p>{message}</p>

          {/* <div className="post-image">
            <img src={myImage} alt="img" />
          </div> */}

          <div className="post-buttons">
            <Option Icon={ThumbUpOffAltIcon} title={label} color={color} onClick={changeColor}/>
            <Option Icon={NotesIcon} title="comment" color="gray"/>
            <Option Icon={RepeatIcon} title="repost" color="gray"/>
            <Option Icon={SendIcon} title="send" color="gray"/>
          </div>
        </div>
    </div>
  )
})

export default Posts