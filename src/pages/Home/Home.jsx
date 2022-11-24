import React, {useEffect, useState} from 'react'
import '../../styles/musicPlayer.scss'
import { Images } from '../../static'
import { Link } from 'react-router-dom'
import { TbHome, TbHeadphones } from 'react-icons/tb'
import { MdOutlineAlbum, MdMusicNote, MdQueueMusic } from 'react-icons/md'
import { AiOutlineCloudDownload, AiOutlineSearch } from 'react-icons/ai'
import { HiPlusCircle } from 'react-icons/hi'


const Home = () => {

  const CLIENT_ID = "af601f7b315e470c9e44a971eb5ee5e5"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")
    
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }
    
    setToken(token)
    
  }, [])


  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
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
                <Link to='/music-player' className="menu__item-link">
                  <span className="icon"><TbHome /></span>
                  <span className="item">Home</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player/albums' className="menu__item-link">
                  <span className="icon"><MdOutlineAlbum /></span>
                  <span className="item">Albums</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player/artists' className="menu__item-link">
                  <span className="icon"><TbHeadphones /></span>
                  <span className="item">Artists</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player/downloaded' className="menu__item-link">
                  <span className="icon"><AiOutlineCloudDownload /></span>
                  <span className="item">Downloaded</span>
                </Link>
              </li>

              <li>
                <Link to='/music-player/trending' className="menu__item-link">
                  <span className="icon"><MdMusicNote /></span>
                  <span className="item">Trending</span>
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
            <div className="input__container">
              <input type="text" placeholder="Search" />
              <AiOutlineSearch className='search__icon' />
            </div>
          </div>
          
          <div className="top__right">
            {!token ? 
              <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} 
                className='btn btnPrimaryLink'
              >
                Login to Spotify
              </a> : <button onClick={logout} className='btn btnPrimaryLink'>Logout</button>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home