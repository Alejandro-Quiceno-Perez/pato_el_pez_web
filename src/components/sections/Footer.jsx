import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/footer.css'
import Band from '../../db/Band'
import FotoPato from '../../../public/logo_letras_blanco.png'
import BtnButton from '../../utils/BtnButton';

const Footer = () => {

    const navLinks = [
        { name: "Música", path: "/music" },
        { name: "Videos", path: "/videos" },
        { name: "Recorrido", path: "/recorrido" },
        { name: "Merch", path: "/merch" },
        { name: "Press Kit", path: "/press-kit" },
    ];

    return (
        <div className="footer">

            <div className="footer-container">

                {/* Logo */}

                <div className="footer-column footer-brand">

                    <img
                        src={FotoPato}
                        alt="Pato el Pez"
                        className="footer-logo"
                        loading="lazy"

                        decoding="async"
                    />

                    <p>
                        Punk Rock <br />
                        <b className="footer-brand-name">La Oveja Negra</b> disponible ahora
                    </p>

                </div>

                {/* Navegación */}

                <div className="footer-column">

                    <h3>Navegación</h3>

                    {
                        navLinks.map((link) => (
                            <BtnButton
                                key={link.name}
                                component="a"
                                href={link.path}
                            >
                                {link.name}
                            </BtnButton>
                        ))
                    }

                </div>

                {/* Redes */}

                <div className="footer-column">

                    <h3>Síguenos</h3>

                    {Band.redes.map((red) => (
                        <BtnButton
                            key={red.nombre}
                            component="a"
                            href={red.url}
                            target="_blank"
                        >
                            {red.nombre}
                        </BtnButton>
                    ))
                    }


                </div>

                {/* Contacto */}

                <div className="footer-column">

                    <h3>Contacto</h3>

                    {Band.contact.map((contact) => (
                        <BtnButton
                            key={contact.nombre}
                            component="a"
                            href={contact.url}
                            target="_blank"
                        >
                            {contact.nombre}
                        </BtnButton>
                    ))}

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
