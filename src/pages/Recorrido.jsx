import React, { useState } from "react";

import RecorridoDB from "../db/Timeline.js";

import JourneyCard from "../utils/JourneyCard.jsx";
import JourneyModal from "../utils/JourneyModal.jsx";

import "../styles/Timeline.css";

const Recorrido = () => {

    const [selectedEvent, setSelectedEvent] = useState(null);

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

                        RecorridoDB.map(event => (

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

            </section>

            {/* ==========================
                MODAL
            ========================== */}

            {

                selectedEvent &&

                <JourneyModal

                    event={selectedEvent}

                    onClose={() =>

                        setSelectedEvent(null)

                    }

                />

            }

        </main>

    );

}

export default Recorrido;