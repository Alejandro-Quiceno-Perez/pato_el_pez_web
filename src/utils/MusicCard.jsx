import React from 'react'
import BtnButton from './BtnButton'

const MusicCard = ({ song, number }) => {
    return (
        <article className="song-card">

            {/* Número */}

            <div className="song-number">

                <span>
                    {String(number).padStart(2, "0")}
                </span>

            </div>

            {/* Portada */}

            <div className="song-cover">

                <img
                    src={song.cover}
                    alt={song.title}
                    loading="lazy"
                    decoding="async"
                />

            </div>

            {/* Información */}

            <div className="song-info">

                <h3>
                    {song.title}
                </h3>

                <div className="song-meta">

                    <span>
                        ⏱ {song.duration}
                    </span>

                    <span>
                        📅 {song.releaseDate}
                    </span>

                </div>

            </div>

            {/* Acciones */}

            <div className="song-actions">

                <BtnButton
                    component="a"
                    href={song.spotify}
                    target="_blank"
                    className="btn btn-spotify"
                >
                    Spotify
                </BtnButton>

                <BtnButton
                    component="a"
                    href={song.youtube}
                    target="_blank"
                    className="btn btn-youtube"
                >
                    YouTube
                </BtnButton>

            </div>

        </article>
    )
}

export default MusicCard