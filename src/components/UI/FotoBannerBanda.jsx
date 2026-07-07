import React from 'react'
import FotoBanda from '/public/images/foto_de_todos.png'
import FotoBandota from '/public/images/BannerBienvenida/portada3.jpg'
import '../../styles/FotoBannerBanda.css'

const FotoBannerBanda = () => {
    return (
        <div className="foto-banner-banda-container">
            <div className="foto-banner-banda">
                <img src={FotoBandota} alt="Banda" />
            </div>
        </div>
    )
}

export default FotoBannerBanda
