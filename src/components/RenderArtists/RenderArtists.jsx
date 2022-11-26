import './RenderArtists.scss'
import { Images } from '../../static'


const RenderArtists = ({ artists }) => {
    return (
        <div className='artist'>
            {artists.map(artist => (
            <div key={artist.id} className="artist__wrapper">
                {artist.images.length ? 
                    <img src={artist.images[0].url} alt="artist profile"/> : 
                    <img src={Images.DefaultImg} alt="default profile" />
                }
                <div className='artist__name'>{artist.name}</div>
                <p>{artist.type}</p>
            </div>
            ))}
       </div>
    )
}

export default RenderArtists;