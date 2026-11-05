
import { useId } from "react";
import BtnButton from "./BtnButton";
import MusicCard from "./MusicCard";

const AlbumSection = ({ album, isOpen, onToggle }) => {
    const contentId = useId();

    return (
        <article className={`album-accordion ${isOpen ? "is-open" : ""}`}>

            {/* CABECERA DESPLEGABLE */}
            <button
                type="button"
                className="album-accordion-header"
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={contentId}
            >
                <div className="album-accordion-cover">
                    <img
                        src={album.cover}
                        alt={`Portada de ${album.title}`}
                        loading="lazy"
                    />
                </div>

                <div className="album-accordion-info">

                    {album.comingSoon && (
                        <span className="album-accordion-badge">
                            PRÓXIMAMENTE
                        </span>
                    )}

                    <span className="album-accordion-year">
                        {album.year}
                    </span>

                    <h2>{album.title}</h2>

                    <span className="album-accordion-meta">
                        {album.genre} · {album.songs.length} canciones
                    </span>

                </div>

                <span className="album-accordion-icon">
                    <span>{isOpen ? "−" : "+"}</span>
                </span>
            </button>

            {/* CONTENIDO DEL ÁLBUM */}
            <div
                id={contentId}
                className="album-accordion-content"
                hidden={!isOpen}
            >

                {album.comingSoon ? (

                    <div className="album-coming-soon">

                        <div className="album-coming-soon-content">

                            <div className="album-coming-soon-image">

                                <img
                                    src={album.cover}
                                    alt={album.title}
                                    loading="lazy"
                                />

                                <span className="album-coming-soon-badge">
                                    PRÓXIMAMENTE
                                </span>

                            </div>

                            <div className="album-coming-soon-info">

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
                                    <span>{album.genre}</span>
                                    <span>{album.songs.length} Canciones</span>
                                </div>

                                <div className="album-coming-soon-message">
                                    NUESTRO NUEVO DISCO ESTÁ POR LLEGAR.
                                </div>

                            </div>

                        </div>

                    </div>

                ) : (

                    <section className="album-section">

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
                                    <span>{album.songs.length} Canciones</span>
                                    <span>{album.genre}</span>
                                    <span>{album.year}</span>
                                </div>

                                <div className="album-buttons">

                                    <BtnButton
                                        component="a"
                                        href={album.spotify}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="music-btn music-btn-primary"
                                    >
                                        Escuchar en Spotify
                                    </BtnButton>

                                    <BtnButton
                                        component="a"
                                        href={album.youtube}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="music-btn music-btn-outline"
                                    >
                                        YouTube
                                    </BtnButton>

                                </div>

                            </div>

                        </div>

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

                )}

            </div>

        </article>
    );
};

export default AlbumSection;
