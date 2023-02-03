import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="recentItem">
            <span className='hashtag'>#</span>
            <p>{topic}</p>
        </div>
    );

  return (
    <div className='sidebar'>
        <div className="sidebar-top">
            <img src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="background" />
            <Avatar className='hero-img' src={user.photoUrl}> {user.email[0]} </Avatar>
            {/* src = user.profileUrl */}

            <h2 className='name'>{user.displayName}</h2>
            <p className='description'>
                {user.email} <br />
                front-end webDeveloper | ui/ux enthusiast | problem-solving on leetcode | actively searching for 2023 internships
            </p>

            <div className="seperator"></div>
            
            <div className="sidebar-stats">
                <p>who viewed your profile</p>
                <h4>50</h4>
            </div>

            <div className="sidebar-stats">
                <p>connections</p>
                <h4>500</h4>
            </div>
        </div>

        <div className="sidebar-bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('java')}
            {recentItem('tailwind')}
            {recentItem('openSource')}
        </div>
    </div>
  )
}

export default Sidebar