import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import HeaderOpt from './HeaderOpt';
import './Header.css'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from "./features/userSlice"

function Header() {
    const dispatch = useDispatch();

    const logOutofApp = () => {
        dispatch(logout())
        auth.signOut();
    };
 
  return (
    <div className='header'>
        <div className="header-left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedIn icon" />

            <div className="search-box">
                <SearchIcon/>
                <input type="text"/>
            </div>
        </div>

        <div className="header-right">
            <HeaderOpt Icon={HomeIcon} title="home"/>
            <HeaderOpt Icon={GroupIcon} title="network"/>
            <HeaderOpt Icon={WorkIcon} title="jobs"/>
            <HeaderOpt Icon={MarkUnreadChatAltIcon} title="messaging"/>
            <HeaderOpt Icon={NotificationsActiveIcon} title="alerts"/>
            <HeaderOpt avator={true} title="me" onClick={logOutofApp}/>
        
        </div>

        <div className="back-up">
            <HeaderOpt avator={true} title="me" onClick={logOutofApp}/>
        </div>
    </div>
  )
}

export default Header