import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import BtnButton from '../../../utils/BtnButton'
import Merch from '../../../db/Merch'

import './MerchPromo.css'

const eligibleProducts = Merch.filter(
    product => product.price >= 30000
)

const MerchPromo = () => {

    const [visible, setVisible] = useState(() => (
        sessionStorage.getItem('hasShownMerchPromo') !== 'true'
    ))

    const [product] = useState(() => (
        eligibleProducts[
            Math.floor(Math.random() * eligibleProducts.length)
        ]
    ))

    useEffect(() => {
        if (!visible) return undefined

        sessionStorage.setItem('hasShownMerchPromo', 'true')

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = previousOverflow
        }
    }, [visible])

    if (!visible || !product) return null

    return (
        <div className="merch-promo-overlay" role="presentation">

            <div
                className="merch-promo"
                role="dialog"
                aria-modal="true"
                aria-labelledby="merch-promo-title"
            >

                <span className="merch-promo-sticker">
                    SOLO POR TIEMPO LIMITADO
                </span>

                <BtnButton
                    className="merch-promo-close"
                    onClick={() => setVisible(false)}
                    aria-label="Cerrar promoción"
                >
                    ×
                </BtnButton>

                <div className="merch-promo-image">
                    <img
                        src={product.image}
                        alt={product.name}
                    />
                </div>

                <div className="merch-promo-info">

                    <span className="merch-promo-label">
                        PATO EL PEZ
                    </span>

                    <h2 id="merch-promo-title">
                        MERCH + CONCIERTO
                    </h2>

                    <p>
                        Compra <strong>$30.000 o más</strong> en nuestra
                        Merch y recibe
                    </p>

                    <div className="merch-promo-discount">
                        10% OFF
                    </div>

                    <span className="merch-promo-ticket">
                        en la boletería del concierto de lanzamiento
                        del disco.
                    </span>

                    <strong className="merch-promo-product">
                        {product.name}
                    </strong>

                    <span className="merch-promo-price">
                        Desde ${product.price.toLocaleString('es-CO')}
                    </span>

                    <Link
                        to="/merch"
                        className="merch-promo-button"
                        onClick={() => setVisible(false)}
                    >
                        VER MERCH
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default MerchPromo