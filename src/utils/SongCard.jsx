const SongCard = ({ song }) => {
    return (
        <article className="song-card">
            <a href={song.spotify} target="_blank" rel="noreferrer noopener" className="song-image">
                <img src={song.cover} alt={song.title} loading="lazy" decoding="async" />
            </a>
        </article>
    )
}

export default SongCard
