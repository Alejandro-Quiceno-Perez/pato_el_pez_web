import Albums from "../db/Music"
import AlbumSection from '../utils/AlbumSection'
import '../styles/MusicSection.css'

const Music = () => {
    return (
        <section className="music-page">

            <div className="music-container">

                <div className="music-title">

                    <span>Discografía</span>

                </div>

                {
                    Albums.map(album => (

                        <AlbumSection
                            key={album.id}
                            album={album}
                        />

                    ))
                }

            </div>

        </section>
    )
}

export default Music
