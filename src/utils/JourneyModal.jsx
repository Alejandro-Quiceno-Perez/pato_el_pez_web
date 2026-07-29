import { useEffect } from "react";
import BtnButton from "./BtnButton";

const JourneyModal = ({ event, onClose }) => {

    useEffect(() => {

        document.body.style.overflow = "hidden";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, []);

    return (

        <div
            className="journey-modal-overlay"
            onClick={onClose}
        >

            <div
                className="journey-modal"
                onClick={(e) => e.stopPropagation()}
            >

                {/* ==========================================
                    CERRAR
                ========================================== */}

                <button
                    className="journey-close"
                    onClick={onClose}
                    aria-label="Cerrar"
                >

                    ✕

                </button>

                {/* ==========================================
                    IMAGEN
                ========================================== */}

                <div className="journey-modal-image">

                    <img

                        src={event.image}

                        alt={event.title}

                    />

                    <div className="journey-image-info">

                        <span>

                            {event.year}

                        </span>

                        <span>

                            {event.category}

                        </span>

                    </div>

                </div>

                {/* ==========================================
                    INFORMACIÓN
                ========================================== */}

                <div className="journey-modal-info">

                    <span className="journey-location">

                        📍 {event.location}

                    </span>

                    <h2>

                        {event.title}

                    </h2>

                    <p className="journey-description">

                        {event.description}

                    </p>

                    {

                        event.instagram &&

                        <div className="journey-modal-buttons">

                            <BtnButton

                                component="a"

                                href={event.instagram}

                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ver-publicacion"

                            >

                                Ver publicación

                            </BtnButton>

                        </div>

                    }

                </div>

            </div>

        </div>

    );

}

export default JourneyModal;