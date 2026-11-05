
import { useState } from "react";
import Albums from "../db/Music";
import AlbumSection from "../utils/AlbumSection";
import "../styles/MusicSection.css";

const Music = () => {
    const [openAlbum, setOpenAlbum] = useState(Albums[0]?.id ?? null);

    const sortedAlbums = [...Albums].sort((a, b) => {
        return (b.year - a.year) || (b.id - a.id);
    });

    const toggleAlbum = (albumId) => {
        setOpenAlbum(current =>
            current === albumId ? null : albumId
        );
    };

    return (
        <section className="music-page">
            <div className="music-container">

                <div className="music-title">
                    <span>Discografía</span>
                </div>

                <div className="albums-list">
                    {sortedAlbums.map(album => (
                        <AlbumSection
                            key={album.id}
                            album={album}
                            isOpen={openAlbum === album.id}
                            onToggle={() => toggleAlbum(album.id)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Music;
