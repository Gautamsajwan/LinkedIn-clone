import { Avatar } from '@mui/material'
import PanoramaIcon from '@mui/icons-material/Panorama';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import React, { useEffect, useState } from 'react'
import './Feed.css'
import Posts from './Posts';
import Option from './Option';
import { db } from './firebase'
import firebase from 'firebase/compat/app';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from "react-flip-move"

function Feed() {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // .onsnapshot() is a method used to listen to any changes made to 'posts' collection in the firebase firestore database
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
         id: doc.id,
         data: doc.data(),
        }))
      )
    );
  }, []);
  // this empty array means that every time the feed component renders the effect is going to re-run

  const sendPost = (e) => {
    e.preventDefault();
    
    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  }

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <div className='feed'>
        {/* upload section */}
        <div className="upload-section">
            <div className="top-section">
                <Avatar className='user-img' src={user?.photoUrl}>{user?.email[0]}</Avatar>
                <form>
                  <input value={input} onChange={handleInput} type="text" placeholder="Start a post"/>
                  <button onClick={sendPost} type='submit'> send </button>
                </form>
            </div>

            <div className="bottom-section">
                {/* this is the media component */}
                <Option Icon={PanoramaIcon} title="photo" color="dodgerblue"/>
                <Option Icon={MovieCreationIcon} title="video" color="green"/>
                <Option Icon={CalendarMonthIcon} title="event" color="orange"/>
                <Option Icon={NewspaperIcon} title="write article" color="red"/>
            </div>
        </div>

        {/* posts section */}
        <FlipMove>
          {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Posts
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
            // in this snippet the map method is used to iterate over the posts array. The map method takes a callback function as an argument which receives an object in the destructured manner for every element of posts array containing id and data properties. Here data property destructures all the properties inside data property of the database . After all this, the Posts component is rendered with all the props passed to it such as name , message etc.
          ))}
        </FlipMove>
    </div>
  )
}

export default Feed