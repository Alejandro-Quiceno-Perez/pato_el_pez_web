import BtnButton from "./BtnButton";

const JourneyCard = ({ event, onOpen }) => {

    return (

        <article className="journey-card">

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

        </article>

    );

}

export default JourneyCard;
