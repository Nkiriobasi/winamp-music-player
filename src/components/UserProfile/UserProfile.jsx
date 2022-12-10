import React, { useState} from 'react'
import './UserProfile.scss'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'


const UserProfile = ({handleLogout, image, displayName}) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };



  return (
    <div className="user__profile" onClick={handleToggle} onBlur={handleToggle}>
      <img src={image} alt="profile" className='user__proile-img' />
      <h4 className="user__profile-name">{displayName}</h4>
      <h4 className="name__tooltip">{displayName}</h4>
      {isActive ? <MdArrowDropDown className="arrowDown" /> : <MdArrowDropUp className="arrowDown" />}

      <div className={`user__profile-dropdown ${isActive ? "hide" : "show"}`}>
        <h3 className='user__profile-log' onClick={handleLogout}>Log out</h3>
      </div>
    </div>
  )
}

export default UserProfile