import BtnButton from "./BtnButton";

const VideoPlayer = ({ video, autoPlay }) => {

    return (

        <section className="video-player">

            {/* ==================================
                VIDEO
            ================================== */}

            <div className="video-frame">

                <iframe
                    key={video.videoId}
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=${autoPlay ? 1 : 0}&rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />

            </div>

            {/* ==================================
                INFORMACIÓN
            ================================== */}

            <div className="video-info">

                <div className="video-meta">

                    <span className="video-category">

                        {video.category}

                    </span>

                    <span className="video-year">

                        {video.year}

                    </span>

                </div>

                <h2>

                    {video.title}

                </h2>

                <p className="video-subtitle">

                    {video.subtitle}

                </p>

                <p className="video-description">

                    {video.description}

                </p>

                <div className="video-actions">

                    <BtnButton

                        component="a"

                        href={`https://www.youtube.com/watch?v=${video.videoId}`}

                        target="_blank"

                    >

                        Ver en YouTube

                    </BtnButton>

                </div>

            </div>

        </section>

    );

};

export default VideoPlayer;
