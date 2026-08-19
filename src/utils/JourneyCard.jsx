import { motion as Motion } from "framer-motion";
import BtnButton from "./BtnButton";

const JourneyCard = ({ event, onOpen }) => {

    return (

        <Motion.article

            className="journey-card"

            initial={{
                opacity: 0,
                y: 12,
                scale: 0.99
            }}

            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
            }}

            transition={{
                duration: 0.3,
                ease: "easeOut"
            }}

            viewport={{
                once: true,
                amount: .25
            }}



        >

            {/* ==========================
                DESTACADO
            ========================== */}

            {

                event.featured &&

                <span className="journey-featured">

                    ★ Destacado

                </span>

            }

            {/* ==========================
                IMAGE
            ========================== */}

            <div className="journey-image">

                <img

                    src={event.image}

                    alt={event.title}

                    loading="lazy"

                    decoding="async"

                />

            </div>

            {/* ==========================
                CONTENT
            ========================== */}

            <div className="journey-content">

                <div className="journey-meta">

                    <span className="journey-year">

                        {event.year}

                    </span>

                    <span className="journey-category">

                        {event.category}

                    </span>

                </div>

                <h2 className="journey-title">

                    {event.title}

                </h2>

                <p className="journey-subtitle">

                    {event.subtitle}

                </p>

                <div className="journey-location">

                    <span>

                        📍 {event.location}

                    </span>

                </div>

                <div className="journey-actions">

                    <BtnButton

                        onClick={onOpen}

                        className="btn-journey"

                    >

                        Leer historia

                    </BtnButton>

                </div>

            </div>

        </Motion.article>

    );

};

export default JourneyCard;