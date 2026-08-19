const VideoCard = ({ video, onSelect }) => {

    return (

        <article

            className="video-card"

            onClick={onSelect}

        >

            {/* ==============================
                MINIATURA
            ============================== */}

            <div className="video-thumbnail">

                <img

                    src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}

                    alt={video.title}
                    loading="lazy"
                    decoding="async"

                />

                <div className="video-play">

                    ▶

                </div>

            </div>

            {/* ==============================
                INFORMACIÓN
            ============================== */}

            <div className="video-card-content">

                <span className="video-card-category">

                    {video.category}

                </span>

                <h3>

                    {video.title}

                </h3>

                <span className="video-card-year">

                    {video.year}

                </span>

            </div>

        </article>

    );

};

export default VideoCard;