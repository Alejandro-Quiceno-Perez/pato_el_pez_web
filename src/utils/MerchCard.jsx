import { useEffect, useState } from 'react'
import BtnButton from './BtnButton'
import '../styles/MerchCard.css'

const MerchCard = ({ merch = {} }) => {

    const imagePrimary = merch?.image
    const imageSecondary = merch?.image2

    const productName = merch?.name || 'Producto'
    const productDescription = merch?.descripcion || ''
    const productPrice = merch?.price ?? 0

    /*
    ======================================================
       ESTADO

       false = imagen principal
       true  = imagen secundaria
    ======================================================
    */

    const [showSecondary, setShowSecondary] = useState(false)


    /*
    ======================================================
       PRECARGAR IMAGEN SECUNDARIA

       La descarga comienza inmediatamente cuando
       aparece la tarjeta.

       fetchPriority = high ayuda a darle prioridad
       a la segunda imagen.
    ======================================================
    */

    useEffect(() => {

        if (!imageSecondary) return

        const preloadImage = new Image()

        preloadImage.fetchPriority = 'high'
        preloadImage.decoding = 'async'

        preloadImage.src = imageSecondary

        return () => {

            preloadImage.onload = null
            preloadImage.onerror = null

        }

    }, [imageSecondary])


    /*
    ======================================================
       CAMBIAR IMAGEN

       SOLO SE UTILIZA EN TABLET Y CELULAR.

       En PC el cambio continúa siendo mediante CSS hover.
    ======================================================
    */

    const toggleImage = () => {

        if (!imageSecondary) return

        setShowSecondary(prev => !prev)

    }


    return (

        <article className="merch-card">

            {/* ======================================================
               IMÁGENES
            ====================================================== */}

            <div className="merch-image">

                {/* IMAGEN PRINCIPAL */}

                <img
                    className={`primary-image ${
                        showSecondary ? 'mobile-hidden' : ''
                    }`}
                    src={imagePrimary}
                    alt={productName}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                />


                {/* IMAGEN SECUNDARIA */}

                {imageSecondary && (

                    <img
                        className={`secondary-image ${
                            showSecondary ? 'mobile-visible' : ''
                        }`}
                        src={imageSecondary}
                        alt={`${productName} Posterior`}
                        loading="eager"
                        fetchPriority="high"
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

                   SOLAMENTE TABLET Y CELULAR
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

                   CONSERVADO
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
