import { useState } from 'react'
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
       CONTROL DE IMAGEN
       
       false = imagen principal
       true  = imagen secundaria

       Este estado se utiliza únicamente para
       tabletas y celulares.
    ======================================================
    */

    const [showSecondary, setShowSecondary] = useState(false)


    /*
    ======================================================
       CAMBIAR IMAGEN
    ======================================================
    */

    const toggleImage = () => {

        if (!imageSecondary) {
            return
        }

        setShowSecondary(prev => !prev)

    }


    return (

        <article className="merch-card">


            {/* ======================================================
               IMÁGENES
            ====================================================== */}

            <div className="merch-image">


                {/* ==================================================
                   IMAGEN PRINCIPAL
                ================================================== */}

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


                {/* ==================================================
                   IMAGEN SECUNDARIA
                ================================================== */}

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


                {/* ==================================================
                   BOTÓN VER IMAGEN 2

                   Solamente será visible mediante CSS
                   en tabletas y celulares.
                ================================================== */}

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


                {/* ==================================================
                   BOTÓN COMPRAR

                   SE MANTIENE SIN MODIFICACIONES
                ================================================== */}

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