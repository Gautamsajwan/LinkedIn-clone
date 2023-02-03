import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import './Login.css'

function Login() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profilePic, setprofilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL,
      }))
    }).catch((error) => alert(error))
  };

  const joinNow = () => {
    if(!name) {
      return alert("please enter a full name");
    }
    
    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        // these are the properties in the auth. system
        displayName: name,
        photoURL: profilePic, 
      })
      .then(() => {
        dispatch(login({
          // these are the properties in the store
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        }));
      });
    }).catch((error) => alert(error));
  };

  return (
    <div className='login'>
      <div className="login-top-section">
        <img src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019-700x175.png" alt="linkedIn logo" />
      </div>

      <div className="login-bottom-section">
        <div className="tagline">
          <h1>Sign in</h1>
          <p>Stay updated on your professional world</p>
        </div>

        <form className="login-credentials">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Full name (required if registering)'/>
          <input value={profilePic} onChange={(e) => {setprofilePic(e.target.value)}} type="text" placeholder='Profile pic URL (optional)'/>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email or Phone'/>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password'/>
          <button type='submit' onClick={loginToApp}>Sign in</button>
        </form>
        
        <div className="login-seperator">
          <p>or</p>
          <div className="line"></div>
        </div>

        <div className="join">
          <p>New to LinkedIn? <span onClick={joinNow}>Join now</span></p>
        </div>
      </div>


    </div>
  )
}

export default Login