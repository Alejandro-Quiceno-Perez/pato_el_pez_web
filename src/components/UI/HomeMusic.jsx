import { motion as Motion } from 'framer-motion';

import Albums from '../../db/Music';
import SongCard from '../../utils/SongCard';
import '../../styles/HomeMusic.css';
import BtnButton from '../../utils/BtnButton';

const imgAlbum = '/img_music/Caratula_disco.jpg';

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const item = {
    hidden: {
        opacity: 0,
        y: 25
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5
        }
    }
};

const HomeMusic = () => {

    const album = Albums[0];
    const featuredSongs = album?.songs?.slice(0, 5) ?? [];

    return (

        <Motion.section

            className="home-music-container"

            variants={container}

            initial="hidden"

            whileInView="visible"

            viewport={{

                once: true,

                amount: .25

            }}

        >

            <div className="music-wrapper">

                {/* ===============================
                    ALBUM
                =============================== */}

                <Motion.div

                    className="album-cover"

                >

                    <img

                        src={imgAlbum}

                        alt="La Oveja Negra"

                    />

                </Motion.div>

                {/* ===============================
                    CONTENT
                =============================== */}

                <Motion.div

                    className="music-section-title"

                >

                    <Motion.span variants={item}>

                        Último lanzamiento

                    </Motion.span>

                    <Motion.h2 variants={item}>

                        La Oveja Negra

                    </Motion.h2>

                    <Motion.p variants={item}>

                        Nuestro primer álbum de estudio, 10 canciones que son el
                        reflejo de todo lo que somos y de todo lo que hemos vivido.

                    </Motion.p>

                    <Motion.div

                        className="music-section-link"

                        variants={item}

                    >

                        <BtnButton

                            component="a"

                            href="https://open.spotify.com/artist/4pbnupXCtNilC05RqeFrCO?si=ENr9i_a8Royd1osd2oJseQ"

                            target="_blank"

                        >

                            Escuchar ahora

                        </BtnButton>

                        <BtnButton

                            component="link"

                            to="/music"

                        >

                            Ver más

                        </BtnButton>

                    </Motion.div>

                    <Motion.div

                        className="songs-grid"

                        variants={container}

                    >

                        {

                            featuredSongs.map(song => (

                                <Motion.div

                                    key={song.id}

                                    variants={item}

                                >

                                    <SongCard

                                        song={song}

                                    />

                                </Motion.div>

                            ))

                        }

                    </Motion.div>

                </Motion.div>

            </div>

        </Motion.section>

    );

};

export default HomeMusic;