import BtnButton from './BtnButton'
import MusicCard from './MusicCard'

const AlbumSection = ({ album }) => {
    return (
        <section className="album-section">

            {/* ===========================
                HEADER
            ============================ */}

            <div className="album-header">

                <div className="album-info">

                    <span className="album-year">
                        {album.year}
                    </span>

                    <h2 className="album-title">
                        {album.title}
                    </h2>

                    <p className="album-description">
                        {album.description}
                    </p>

                    <div className="album-details">

                        <span>
                            {album.songs.length} Canciones
                        </span>

                        <span>
                            {album.genre}
                        </span>

                        <span>
                            {album.year}
                        </span>

                    </div>

                    <div className="album-buttons">

    <BtnButton
        component="a"
        href={album.spotify}
        target="_blank"
        className="music-btn music-btn-primary"
    >
        Escuchar en Spotify
    </BtnButton>

    <BtnButton
        component="a"
        href={album.youtube}
        target="_blank"
        className="music-btn music-btn-outline"
    >
        YouTube
    </BtnButton>

</div>

                </div>

            </div>

            {/* ===========================
                SONG LIST
            ============================ */}

            <div className="album-songs">

                {album.songs.map((song, index) => (

                    <MusicCard
                        key={song.id}
                        song={song}
                        number={index + 1}
                    />

                ))}

            </div>

        </section>
    )
}

export default AlbumSection