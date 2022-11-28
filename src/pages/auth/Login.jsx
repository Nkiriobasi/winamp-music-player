import React from 'react'
import { loginEndpoint } from '../../spotify'
import '../../styles/login.scss'


const Login = () => {
  return (
    <div className='login'>
      <img 
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
        alt="logo-spotify" 
        className='login__img'
      />
      <a href={loginEndpoint} className='login__btn'>
        <span>Login to Spotify</span>
      </a>
    </div>
  )
}

export default Login