import React from 'react'
import './UserProfile.scss'
// import { CgProfile } from 'react-icons'
// import { MdArrowDropDown, MdArrowDropUp } from 'react-icons'


const UserProfile = ({handleLogout, profile}) => {

  return (
    <div className='user__profile'>
        <img src="" alt="profile" />
        <h3 className="user__profile-name">{}</h3>

        <div className="user__profile-dropdown">
            <h3 className="user__profile-email">{}</h3>
            <h3 className="user__profile-country">{}</h3>
            <h3 className='user__profile-log' onClick={handleLogout}>Log out</h3>
        </div>
    </div>
  )
}

export default UserProfile