import { motion } from 'framer-motion';

import AboutSectionTitle from '../../utils/AboutSectionTitle';
import MemberSlider from '../../utils/MemberSlider';

import '../../styles/AboutSection.css';

const AboutSection = () => {

    return (

        <motion.section

            className="about-section-container"

            initial={{
                opacity: 0,
                filter: "blur(8px)",
                scale: 0.98
            }}

            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                scale: 1
            }}

            viewport={{
                once: true,
                amount: 0.25
            }}

            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}

        >

            <div className="about-section-title-container">

                <AboutSectionTitle />

            </div>

            <div className="about-section-slider-container">

                <MemberSlider />

            </div>

        </motion.section>

    );

};

export default AboutSection;