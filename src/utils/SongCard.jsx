import React from 'react'

const SongCard = ({ song }) => {

    const year = new Date(song.realseDate).getFullYear()
    return (
        <article className="song-card">
            <a href={song.spotify} target="_blank" rel="noreferrer" className="song-image">
                <img src={song.cover} alt={song.title} />
            </a>
        </article>
    )
}

export default SongCard
