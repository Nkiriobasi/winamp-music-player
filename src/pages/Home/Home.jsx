import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../styles/home.scss'
import { Images } from '../../static'
import { Link } from 'react-router-dom'
import { TbHome, TbHeadphones } from 'react-icons/tb'
import { MdOutlineAlbum, MdQueueMusic } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiPlusCircle } from 'react-icons/hi'
import { RenderArtists, UserProfile } from '../../components'


const Home = () => {
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])
  const [token, setToken] = useState("")
  const [profile, setProfile] = useState({})


  const CLIENT_ID = "af601f7b315e470c9e44a971eb5ee5e5"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    
    // If statement to check and set the access token returned from authentication
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    
    setToken(token)

    // const handleUserProfile = async () => {
    //   const {profileData} = await axios.get("https://api.spotify.com/v1/me", {
    //     headers: {
    //       Authorization: `Bearer ${token}`
    //     },
    //     params: {
    //       type: "user"
    //     }
    //   })
  
    //   setProfile(profileData);
    // }
  
    // handleUserProfile()
  }, [])

  
  // logout function, when logging out set the token setter function to empty string, and remove the token variable stored in localStorage
  const handleLogout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }
  

  const searchArtists = async (e) => {
    e.preventDefault()
    const {artistsData} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    })

    setArtists(artistsData.artists.items);
  }


  // Execute a function when the user presses a key on the keyboard
  const handleKeyPress = (event) => {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "enter") {
      // Cancel the default action, if needed
      event.preventDefault()
      // Trigger the button element with a click
      searchArtists()
    }
  }

  
  return (
    <React.Fragment>
      <aside>
        <div className="wrapper">
          <div className="logo__wrapper">
            <img src={Images.WinampRedLogo} alt="logo" />
            <h4>winamp</h4>
          </div>

          <div className="menu">
            <h4 className="menu__title">MENU</h4>

            <ul>
              <li>
                <Link to='/' className="menu__item-link">
                  <span className="icon"><TbHome /></span>
                  <span className="item">Home</span>
                </Link>
              </li>

              <li>
                <Link to='/albums' className="menu__item-link">
                  <span className="icon"><MdOutlineAlbum /></span>
                  <span className="item">Albums</span>
                </Link>
              </li>

              <li>
                <Link to='/artists' className="menu__item-link">
                  <span className="icon"><TbHeadphones /></span>
                  <span className="item">Artists</span>
                </Link>
              </li>
            </ul>
          </div>

          
          <div className='menu'>
            <div className="menu-wrapper">
              <h4 className="menu__title">WINAMP PLAYLIST</h4>
              <span className=""><HiPlusCircle className="playlist__icon" /></span>
            </div>
            
            <ul>
              <li>
                <Link to='/music-player' className="menu__item-link">
                  <span className="icon"><MdQueueMusic /></span>
                  <span className="item">Nostalgia</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player' className="menu__item-link">
                  <span className="icon"><MdQueueMusic /></span>
                  <span className="item">Nostalgia</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player' className="menu__item-link">
                  <span className="icon"><MdQueueMusic /></span>
                  <span className="item">Nostalgia</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div className='home__player'>
        <div className="top__wrapper">
          <div className="top__left">
            <form className="input__container" onSubmit={searchArtists} onKeyDown={handleKeyPress}>
              <input type="text" placeholder="What do you want to listern to?" onChange={e => setSearchKey(e.target.value)} />
              <AiOutlineSearch className='search__icon' />
              <button type={"submit"}>Search</button>
            </form>
          </div>
          
          <div className="top__right">
            {!token ? 
              <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} 
                className='btn btnPrimaryLink'
              >
                Login to Spotify
              </a> : 
              // <UserProfile handleLogout={handleLogout} profile={profile} />
              <button onClick={handleLogout} className='btn btnPrimaryLink'>Logout</button>
            }
          </div>
        </div>

        <RenderArtists artists={artists} />
      </div>
    </React.Fragment>
  )
}

export default Home