import React from 'react'
import { loginEndpoint } from '../../spotify'
import './Login.scss'
import { Images } from '../../static'



const Login = () => {
  return (
    <div className='login'>
      <img 
        src={Images.spotifyLogo} 
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