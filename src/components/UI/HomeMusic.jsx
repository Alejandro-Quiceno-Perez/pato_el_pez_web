import React from 'react'
import Songs from '../../db/Music'
import SongCard from '../../utils/SongCard'
import '../../styles/HomeMusic.css'

const imgAlbum = '/img_music/Caratula_disco.jpg'

const HomeMusic = () => {
    const featuredSongs = Songs.slice(0, 5) // Get the first 5 songs as featured songs
    return (
        < section className="home-music-container" >

            <div className="music-wrapper">

                <div className="album-cover">
                    <img src={imgAlbum} alt="" href="https://open.spotify.com/track/3amvCY9WRx4oRG75iqmjhH?si=d2d55072fac34677" />
                </div>

                <div className="music-section-title">
                    <span>Último lanzamiento</span>

                    <h2>La Oveja Negra</h2>

                    <p>
                        Nuestro primer álbum de estudio, 10 canciones que son el
                        reflejo de todo lo que somos y de todo lo que hemos vivido.
                    </p>

                    <div className="music-section-link">
                        <a href="">Escuchar ahora</a>
                        <a href="/music">Ver más</a>
                    </div>
                    <div className="songs-grid">
                        {featuredSongs.map(song => (
                            <SongCard
                                key={song.id}
                                song={song}
                            />
                        ))}
                    </div>
                </div>
            </div>



        </section >
    )
}

export default HomeMusic
