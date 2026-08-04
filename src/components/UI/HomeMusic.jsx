import { motion } from 'framer-motion';

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

const left = {
    hidden: {
        opacity: 0,
        x: -80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
            ease: "easeOut"
        }
    }
};

const right = {
    hidden: {
        opacity: 0,
        x: 80
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: .8,
            ease: "easeOut"
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

        <motion.section

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

                <motion.div

                    className="album-cover"

                    variants={left}

                >

                    <img

                        src={imgAlbum}

                        alt="La Oveja Negra"

                    />

                </motion.div>

                {/* ===============================
                    CONTENT
                =============================== */}

                <motion.div

                    className="music-section-title"

                    variants={right}

                >

                    <motion.span variants={item}>

                        Último lanzamiento

                    </motion.span>

                    <motion.h2 variants={item}>

                        La Oveja Negra

                    </motion.h2>

                    <motion.p variants={item}>

                        Nuestro primer álbum de estudio, 10 canciones que son el
                        reflejo de todo lo que somos y de todo lo que hemos vivido.

                    </motion.p>

                    <motion.div

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

                    </motion.div>

                    <motion.div

                        className="songs-grid"

                        variants={container}

                    >

                        {

                            featuredSongs.map(song => (

                                <motion.div

                                    key={song.id}

                                    variants={item}

                                >

                                    <SongCard

                                        song={song}

                                    />

                                </motion.div>

                            ))

                        }

                    </motion.div>

                </motion.div>

            </div>

        </motion.section>

    );

};

export default HomeMusic;