import React, { useState} from 'react'
import './UserProfile.scss'
// import { CgProfile } from 'react-icons'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'


const UserProfile = ({handleLogout, userProfile}) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="user__profile" onClick={handleToggle} onBlur={handleToggle}>
      <img src={userProfile.images[0].url} alt="profile" className='user__proile-img' />
      <h4 className="user__profile-name">{userProfile.display_name}</h4>
      {isActive ? <MdArrowDropDown className="arrowDown" /> : <MdArrowDropUp className="arrowDown" />}

      <div className={`user__profile-dropdown ${isActive ? "hide" : "show"}`}>
        <h3 className="user__profile-pro">Profile</h3>
        <h3 className='user__profile-log' onClick={handleLogout}>Log out</h3>
      </div>
    </div>
  )
}

export default UserProfile