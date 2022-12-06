import React, { useEffect, useState } from "react";
import apiClient from '../../spotify'
import '../../styles/library.scss'
import { Spinner } from '../../components'


const Library = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
    
  useEffect(() => {
    // Getting current's user playlists
    apiClient.get("me/playlists").then(response => {
      setLoading(false)
      setPlaylists(response.data.items)
    })   
  }, [])

  console.log(playlists)


  return loading ? (
    <Spinner /> 
  ) : (
    <React.Fragment>
      <h1 className="library__heading">Current's User Playlists</h1>
      <div className="playlist">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist__wrapper">
            <span className="playlist__name">{playlist.name}</span>
            <img src={playlist.images[0]?.url} width="100" alt="playlist" className="playlist__img" />
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Library