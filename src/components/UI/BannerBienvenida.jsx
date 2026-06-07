import React, { useState, useEffect } from 'react'
import '../../styles/BannerBienvenida.css'


const BannerBienvenida = () => {
    const imagesBanner = [
        { id: 1, src: '/public/images/BannerBienvenida/DejarteIr.jpg', alt: 'DEJARTE IR' },
        { id: 2, src: '/public/images/BannerBienvenida/ElPobreSebas.jpg', alt: 'EL POBRE SEBAS' },
        { id: 3, src: '/public/images/BannerBienvenida/MejorQueEsto.jpg', alt: 'MEJOR QUE ESTO' },
        { id: 4, src: '/public/images/BannerBienvenida/FotoBanda.jpg', alt: 'FOTO BANDA' }
    ]
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === imagesBanner.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="bannerBienvenida-container">
            {imagesBanner.map((image, index) => (
                <img key={image.id}
                    src={image.src}
                    alt={image.alt}
                    className={index === currentSlide ? "imagesBanner active" : "imagesBanner"} 
                />
            ))}
        </div>
    )
}

export default BannerBienvenida
