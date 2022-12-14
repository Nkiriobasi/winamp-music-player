import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../../styles/home.scss'
import { Images } from '../../static'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { TbHome, TbHeadphones } from 'react-icons/tb'
import { MdOutlineAlbum, MdQueueMusic, MdLibraryMusic } from 'react-icons/md'
import { HiPlusCircle } from 'react-icons/hi'
import { NavHeader, PlayBack, RenderArtists, Login } from '../../components'
import { setClientToken } from '../../spotify'
// import apiClient from '../../spotify'


const Home = () => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const [token, setToken] = useState("");


  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";

    if ( !token && hash ){
      let _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }

  }, [])

  
  const handleLogout = () => {
    // before logging out set token state to empty string
    setToken("");
    // also remove the token stored in local-storage
    window.localStorage.removeItem("token");
  }
  

  const searchArtists = async (e) => {
    e.preventDefault();
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchKey,
        type: "artist"
      }
    })

    setArtists(data.artists.items);
  }


  // Execute a function when the user presses a key on the keyboard
  const handleKeyPress = (event) => {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      searchArtists();
    }
  }

  let activeStyle = {
    borderRight: "2px solid rgb(34 211 238)",
    color: "white"
  };

  
  return !token ? (
    <Login />
  ) : (
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
                <NavLink to='/' className="menu__item-link" style={({ isActive }) => isActive ? activeStyle : undefined }>
                  <span className="icon"><TbHome /></span>
                  <span className="item">Home</span>
                </NavLink>
              </li>

              <li>
                <NavLink to='/albums' className="menu__item-link" style={({ isActive }) => isActive ? activeStyle : undefined }>
                  <span className="icon"><MdOutlineAlbum /></span>
                  <span className="item">Albums</span>
                </NavLink>
              </li>

              <li>
                <NavLink to='/artists' className="menu__item-link" style={({ isActive }) => isActive ? activeStyle : undefined }>
                  <span className="icon"><TbHeadphones /></span>
                  <span className="item">Artists</span>
                </NavLink>
              </li>

              <li>
                <NavLink to='/library' className="menu__item-link" style={({ isActive }) => isActive ? activeStyle : undefined }>
                  <span className="icon"><MdLibraryMusic /></span>
                  <span className="item">Library</span>
                </NavLink>
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
        <NavHeader 
          handleKeyPress={handleKeyPress} 
          searchArtists={searchArtists} 
          handleLogout={handleLogout} 
          token={token}
          setSearchKey={setSearchKey}
        />

        <RenderArtists 
          artists={artists} 
        />

        <Outlet />
      </div>

      <PlayBack />
    </React.Fragment>
  )
}

export default Home