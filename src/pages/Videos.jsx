import React, { useRef, useState } from "react";

import VideosDB from "../db/Videos";

import VideoPlayer from "../utils/VideoPlayer";
import VideoCard from "../utils/VideoCard";

import "../styles/Videos.css";

const Videos = () => {

    const playerRef = useRef(null);

    // ==============================
    // VIDEO DESTACADO
    // ==============================

    const featuredVideo =

        VideosDB.find(video => video.featured) ||

        VideosDB[0];

    // ==============================
    // STATES
    // ==============================

    const [selectedVideo, setSelectedVideo] = useState(featuredVideo);

    const [autoPlay, setAutoPlay] = useState(false);

    // ==============================
    // CAMBIAR VIDEO
    // ==============================

    const handleSelectVideo = (video) => {

        setAutoPlay(true);

        setSelectedVideo(video);

        setTimeout(() => {

            playerRef.current?.scrollIntoView({

                behavior: "smooth",

                block: "center"

            });

        }, 150);

    };

    // ==============================
    // RENDER
    // ==============================

    return (

        <main className="videos-page">

            <section className="videos-container">

                {/* ==============================
                    HEADER
                ============================== */}

                <header className="videos-header">

                    <span>

                        Videoteca

                    </span>

                    <h1>

                        Revive nuestra historia

                    </h1>

                    <p>

                        Conciertos, videoclips, live sessions y momentos inolvidables
                        que han acompañado el camino de
                        <strong> Pato el Pez.</strong>

                    </p>

                </header>

                {/* ==============================
                    VIDEO PRINCIPAL
                ============================== */}

                <section ref={playerRef}>

                    <VideoPlayer

                        video={selectedVideo}

                        autoPlay={autoPlay}

                    />

                </section>

                {/* ==============================
                    MÁS VIDEOS
                ============================== */}

                <section className="videos-list">

                    <h2>

                        Explora nuestro contenido

                    </h2>

                    <div className="videos-grid">

                        {

                            VideosDB

                                .filter(video =>

                                    video.id !== selectedVideo.id

                                )

                                .sort((a, b) =>

                                    a.order - b.order

                                )

                                .map(video => (

                                    <VideoCard

                                        key={video.id}

                                        video={video}

                                        onSelect={() => handleSelectVideo(video)}

                                    />

                                ))

                        }

                    </div>

                </section>

            </section>

        </main>

    );

};

export default Videos;