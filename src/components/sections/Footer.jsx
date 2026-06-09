import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/footer.css'
import FotoPato from '../../../public/logo_letras_blanco.png'

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer-container">

                {/* Logo */}

                <div className="footer-column footer-brand">

                    <img
                        src={FotoPato}
                        alt="Pato el Pez"
                        className="footer-logo"
                    />

                    <p>
                        Punk Rock <br />
                        <b className="footer-brand-name">La Oveja Negra</b> disponible ahora
                    </p>

                </div>

                {/* Navegación */}

                <div className="footer-column">

                    <h3>Navegación</h3>

                    <Link to="/music">Música</Link>

                    <Link to="/videos">Videos</Link>

                    <Link to="/recorrido">Recorrido</Link>

                    <Link to="/merch">Merch</Link>

                    <Link to="/press-kit">Press Kit</Link>

                </div>

                {/* Redes */}

                <div className="footer-column">

                    <h3>Síguenos</h3>

                    <a href="#">Instagram</a>

                    <a href="#">Spotify</a>

                    <a href="#">YouTube</a>

                    <a href="#">TikTok</a>

                </div>

                {/* Contacto */}

                <div className="footer-column">

                    <h3>Contacto</h3>

                    <a href="#">WhatsApp</a>

                    <a href="#">patodelpez@gmail.com</a>

                    <span>Medellín, Colombia</span>

                </div>

            </div>

            <div className="footer-bottom">

                <p>
                    © 2026 Pato el Pez · Todos los derechos reservados
                </p>

            </div>

        </div>
    )
}

export default Footer
