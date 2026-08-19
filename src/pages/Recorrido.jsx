import { useEffect, useRef, useState } from "react";

import RecorridoDB from "../db/Timeline.js";

import JourneyCard from "../utils/JourneyCard.jsx";
import JourneyModal from "../utils/JourneyModal.jsx";

import "../styles/Timeline.css";

const ITEMS_PER_LOAD = 8;

const Recorrido = () => {

    const [selectedEvent, setSelectedEvent] = useState(null);

    const [visibleItems, setVisibleItems] = useState(ITEMS_PER_LOAD);

    const loaderRef = useRef(null);

    // ==========================================
    // CARGA PROGRESIVA DE TARJETAS
    // ==========================================

    useEffect(() => {

        const observer = new IntersectionObserver(

            ([entry]) => {

                if (

                    entry.isIntersecting &&

                    visibleItems < RecorridoDB.length

                ) {

                    setVisibleItems((prev) =>

                        Math.min(prev + ITEMS_PER_LOAD, RecorridoDB.length)

                    );

                }

            },

            {

                threshold: 0.2

            }

        );

        if (loaderRef.current) {

            observer.observe(loaderRef.current);

        }

        return () => observer.disconnect();

    }, [visibleItems]);

    // ==========================================
    // RENDER
    // ==========================================

    return (

        <main className="journey-page">

            <section className="journey-container">

                {/* ==========================
                    HEADER
                ========================== */}

                <header className="journey-header">

                    <span>

                        Nuestro recorrido

                    </span>

                    <h1>

                        La historia de Pato el Pez

                    </h1>

                    <p>

                        Cada concierto, festival y lanzamiento ha dejado una
                        historia que merece ser contada. Este recorrido reúne
                        algunos de los momentos que han marcado nuestro camino
                        desde que comenzó esta aventura.

                    </p>

                </header>

                {/* ==========================
                    GRID
                ========================== */}

                <section className="journey-grid">

                    {

                        RecorridoDB

                            .slice(0, visibleItems)

                            .map(event => (

                                <JourneyCard

                                    key={event.id}

                                    event={event}

                                    onOpen={() =>

                                        setSelectedEvent(event)

                                    }

                                />

                            ))

                    }

                </section>

                {/* ==========================
                    OBSERVER
                ========================== */}

                {

                    visibleItems < RecorridoDB.length && (

                        <div

                            ref={loaderRef}

                            className="journey-loader"

                        >

                            Cargando más eventos...

                        </div>

                    )

                }

            </section>

            {/* ==========================
                MODAL
            ========================== */}

            {

                selectedEvent && (

                    <JourneyModal

                        event={selectedEvent}

                        onClose={() =>

                            setSelectedEvent(null)

                        }

                    />

                )

            }

        </main>

    );

};

export default Recorrido;