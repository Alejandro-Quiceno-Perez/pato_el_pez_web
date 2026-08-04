import { motion } from 'framer-motion';

import { pageTransition } from '../animations/PageAnimations';

import BannerBienvenida from '../components/UI/BannerBienvenida';
import AboutSection from '../components/UI/AboutSection';
import FotoBannerBanda from '../components/UI/FotoBannerBanda';
import HomeMusic from '../components/UI/HomeMusic';
import HomeMerch from '../components/UI/HomeMerch';

const Home = () => {

    return (

        <motion.main

            variants={pageTransition}

            initial="initial"

            animate="animate"

            exit="exit"

            transition={pageTransition.transition}

        >

            <BannerBienvenida />

            <AboutSection />

            <HomeMusic />

            <HomeMerch />

            <FotoBannerBanda />

        </motion.main>

    );

};

export default Home;