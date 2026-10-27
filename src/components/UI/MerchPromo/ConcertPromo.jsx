import { useEffect, useState } from "react";
import "./ConcertPromo.css";

const WHATSAPP_NUMBER = "573126957657";

const POSTER = `${import.meta.env.BASE_URL}images/Recorrido/ctoLanzamientoNoEraParaTanto.jpeg`;

const ConcertPromo = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleShowConcert = () => {
      if (sessionStorage.getItem("hasShownConcertPromo") === "true") {
        return;
      }

      sessionStorage.setItem("hasShownConcertPromo", "true");
      setVisible(true);
    };

    window.addEventListener("showConcertPromo", handleShowConcert);

    return () => {
      window.removeEventListener("showConcertPromo", handleShowConcert);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [visible]);

  if (!visible) return null;

  const whatsappMessage = encodeURIComponent(
    "¡Hola, Pato el Pez! Quiero comprar mi boleta para el concierto de lanzamiento de su nuevo álbum.",
  );

  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <div className="concert-promo-overlay">
      <section
        className="concert-promo"
        role="dialog"
        aria-modal="true"
        aria-labelledby="concert-promo-title"
      >
        <button
          className="concert-promo-close"
          onClick={() => setVisible(false)}
          aria-label="Cerrar promoción del concierto"
        >
          ×
        </button>

        <img
          className="concert-promo-poster"
          src={POSTER}
          alt="Afiche del próximo concierto de Pato el Pez"
        />

        <div className="concert-promo-actions">
          <h2 id="concert-promo-title">¡NOS VEMOS EN EL TOQUE!</h2>

          <p>Escríbenos y pregunta por la boletería.</p>

          <a
            className="concert-promo-whatsapp"
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            CONSULTAR BOLETERÍA POR WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};

export default ConcertPromo;
