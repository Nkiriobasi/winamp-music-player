import React, {useEffect, useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './NavHeader.scss'
import { UserProfile } from '../../components'
import apiClient from '../../spotify'


const NavHeader = ({ handleKeyPress, searchArtists, handleLogout, setSearchKey }) => {
  const [userProfile, setUserProfile] = useState({})


  useEffect(() => {
    apiClient.get("me").then(response => {
      setUserProfile(response.data);
    })
  }, [])



  return (
    <div className="top__wrapper">
      <div className="top__left">
        <form className="input__container" onSubmit={searchArtists} onKeyDown={handleKeyPress}>
          <input type="text" placeholder="What do you want to listern to?" onChange={e => setSearchKey(e.target.value)} />
          <AiOutlineSearch className='search__icon' />
          <button type={"submit"}>Search</button>
        </form>
      </div>
          
      <div className="top__right">
        <UserProfile handleLogout={handleLogout} userProfile={userProfile} />
      </div>
    </div>
  )
}

export default NavHeader