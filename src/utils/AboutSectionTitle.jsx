import React from 'react'
import logo from '/logo_letras_blanco.png'
import Datos from '../db/Band.js'

const AboutSectionTitle = () => {
    return (
        <div className="about-section-title">

            <img
                src={Datos.logo}
                alt={Datos.name}
                className="about-section-logo"
            />

            <h2 className="about-section-slogan">
                "{Datos.slogan}"
            </h2>

            <p className="about-section-description">
                {Datos.description}
            </p>

            <div className="about-section-info">

                <span>{Datos.genre}</span>

                <span className="separator">•</span>

                <span>Desde {Datos.founded}</span>

                <span className="separator">•</span>

                <span>{Datos.city}</span>

            </div>

        </div>
    )
}

export default AboutSectionTitle
