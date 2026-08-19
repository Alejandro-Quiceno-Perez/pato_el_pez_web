import { useEffect, useState } from 'react'
import BtnButton from './BtnButton'
import '../styles/MerchCard.css'

const MerchCard = ({ merch }) => {

    const [secondaryLoaded, setSecondaryLoaded] = useState(false)

    useEffect(() => {

        if (!merch.image2) {
            setSecondaryLoaded(true)
            return
        }

        const image = new Image()

        image.src = merch.image2

        image.onload = () => {
            setSecondaryLoaded(true)
        }

        image.onerror = () => {
            setSecondaryLoaded(true)
        }

        return () => {
            image.onload = null
            image.onerror = null
        }

    }, [merch.image2])


    return (

        <article
            className={`merch-card ${
                secondaryLoaded ? 'merch-ready' : ''
            }`}
        >

            <div className="merch-image">

                {/* ==========================================
                    IMAGEN PRINCIPAL
                ========================================== */}

                <img
                    className="primary-image"
                    src={merch.image}
                    alt={merch.name}
                    loading="eager"
                    decoding="async"
                />


                {/* ==========================================
                    IMAGEN SECUNDARIA
                ========================================== */}

                <img
                    className="secondary-image"
                    src={merch.image2}
                    alt={`${merch.name} Posterior`}
                    loading="eager"
                    decoding="async"
                />

            </div>


            <div className="merch-info">

                <h3>
                    {merch.name}
                </h3>


                <p className="merch-description">
                    {merch.descripcion}
                </p>


                <p className="merch-price">
                    ${merch.price.toLocaleString()}
                </p>


                <BtnButton
                    component="a"
                    className="merch-btn"
                    href={`http://wa.me/573126957657?text=Hola!!%20Deseo%20adquirir%20este%20producto%20😎🤘%20${merch.name}%20${merch.descripcion}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Comprar
                </BtnButton>

            </div>

        </article>

    )

}

export default MerchCard