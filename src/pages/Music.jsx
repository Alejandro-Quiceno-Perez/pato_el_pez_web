import React from 'react'
import Albums from "../db/Music"
import AlbumSection from '../utils/AlbumSection'
import '../../src/styles/MusicSection.css'

const Music = () => {
    return (
        <section className="music-page">

            <div className="music-container">

                <div className="music-title">

                    <span>Discografía</span>

                    {/* <h1>Nuestra Música</h1>

                    <p>
                        Cada álbum representa una etapa de nuestra historia.
                        Explora nuestras canciones y escúchalas en tu plataforma favorita.
                    </p> */}

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
