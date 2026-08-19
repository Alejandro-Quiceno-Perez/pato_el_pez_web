import { motion as Motion } from 'framer-motion';

import Merch from '../../db/Merch';
import MerchCard from '../../utils/MerchCard';

import '../../styles/HomeMerch.css';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.18
        }
    }
};

const titleVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .7,
            ease: "easeOut"
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        scale: .92
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: .55,
            ease: "easeOut"
        }
    }
};

const HomeMerch = () => {

    const featuredMerch = Merch.slice(0, 4);

    return (

        <Motion.section

            className="home-merch-container"

            variants={containerVariants}

            initial="hidden"

            whileInView="visible"

            viewport={{

                once: true,

                amount: .2

            }}

        >

            <div className="merch-wrapper">

                <Motion.h2

                    variants={titleVariants}

                >

                    Merchandising

                </Motion.h2>

                <Motion.div

                    className="merch-grid"

                    variants={containerVariants}

                >

                    {

                        featuredMerch.map(item => (

                            <Motion.div

                                key={item.id}

                                variants={cardVariants}

                            >

                                <MerchCard

                                    merch={item}

                                />

                            </Motion.div>

                        ))

                    }

                </Motion.div>

            </div>

        </Motion.section>

    );

};

export default HomeMerch;