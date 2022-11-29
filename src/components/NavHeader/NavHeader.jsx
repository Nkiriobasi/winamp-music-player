import React, {useEffect, useState} from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './NavHeader.scss'
import { UserProfile } from '../../components'
import apiClient from '../../spotify'


const NavHeader = ({ handleKeyPress, searchArtists, handleLogout, setSearchKey }) => {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXnq6DDj1lWX6YTLN5kvm2ylrKNRMUV-PI9bv53WtZGcewKImhLRDAqtvbKnf5ehBDWto&usqp=CAU"
  );
  const [displayName, setDisplayName] = useState("User");


  useEffect(() => {
    apiClient.get("me").then(response => {
      const userData = response.data;

      setImage(userData.images[0].url);
      setDisplayName(userData.display_name);
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
        <UserProfile handleLogout={handleLogout} image={image} displayName={displayName} />
      </div>
    </div>
  )
}

export default NavHeader