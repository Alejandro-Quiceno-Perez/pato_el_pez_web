import { useEffect, useState } from 'react'

import BtnButton from './BtnButton'

import '../styles/MerchCard.css'

const MerchCard = ({ merch = {} }) => {

    const imagePrimary = merch?.image
    const imageSecondary = merch?.image2
    const productName = merch?.name || 'Producto'
    const productDescription = merch?.descripcion || ''
    const productPrice = merch?.price ?? 0

    const [secondaryLoaded, setSecondaryLoaded] = useState(false)

    // Controla la imagen en tablet y celular
    const [showSecondary, setShowSecondary] = useState(false)


    /*
    ======================================================
       PRECARGAR IMAGEN SECUNDARIA
    ======================================================
    */

    useEffect(() => {

        if (!imageSecondary) {

            setSecondaryLoaded(false)

            return

        }

        const image = new Image()

        image.src = imageSecondary

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

    }, [imageSecondary])


/*
======================================================
   CAMBIAR IMAGEN EN TABLET Y CELULAR
======================================================
*/

const toggleImage = () => {

    if (!imageSecondary) return

    setShowSecondary(prev => !prev)

}


return (

    <article
        className={`merch-card ${
            secondaryLoaded || !merch.image2
                ? 'merch-ready'
                : ''
        }`}
    >

        {/* ======================================================
           IMÁGENES
        ====================================================== */}

        <div className="merch-image">

            {/* IMAGEN PRINCIPAL */}

            <img
                className={`primary-image ${
                    showSecondary
                        ? 'mobile-hidden'
                        : ''
                }`}
                src={imagePrimary}
                alt={productName}
                loading="eager"
                decoding="async"
            />


            {/* IMAGEN SECUNDARIA */}

            {imageSecondary && (

                <img
                    className={`secondary-image ${
                        showSecondary
                            ? 'mobile-visible'
                            : ''
                    }`}
                    src={imageSecondary}
                    alt={`${productName} Posterior`}
                    loading="eager"
                    decoding="async"
                />

            )}

        </div>


        {/* ======================================================
           INFORMACIÓN
        ====================================================== */}

        <div className="merch-info">

            <h3>
                {productName}
            </h3>


            <p className="merch-description">
                {productDescription}
            </p>


            <p className="merch-price">
                ${productPrice.toLocaleString()}
            </p>


            {/* ======================================================
               BOTÓN CAMBIAR IMAGEN

               SOLO TABLET Y CELULAR
            ====================================================== */}

            {imageSecondary && (

                <button
                    type="button"
                    className="merch-image-toggle"
                    onClick={toggleImage}
                >
                    {showSecondary
                        ? 'Ver imagen 1'
                        : 'Ver imagen 2'
                    }
                </button>

            )}


            {/* ======================================================
               BOTÓN COMPRAR

               NO SE MODIFICA
            ====================================================== */}

            <BtnButton
                component="a"
                className="merch-btn"
                href={`http://wa.me/573126957657?text=Hola!!%20Deseo%20adquirir%20este%20producto%20😎🤘%20${productName}%20${productDescription}`}
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