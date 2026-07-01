import React from 'react'

const SongCard = ({ song }) => {

    const year = new Date(song.realseDate).getFullYear()
    return (
        <article className="song-card">
            <div className="song-image">
                <img src={song.cover} alt={song.title} />

                <div className="song-overlay">
                    <div className="song-info">
                        <h3>{song.title}</h3>

                        <div className="song-details">
                            <span>{song.duration}</span>
                            <span>{song.releaseDate}</span>
                        </div>

                        <div className="song-buttons">
                            <a
                                href={song.spotify}
                                target="_blank"
                                rel="noreferrer"
                                className="spotify-btn"
                            >
                                
                                Spotify
                            </a>

                            <a
                                href={song.youtube}
                                target="_blank"
                                rel="noreferrer"
                                className="youtube-btn"
                            >
                                
                                YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default SongCard
