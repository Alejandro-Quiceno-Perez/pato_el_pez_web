import React from 'react'
import BtnButton from './BtnButton'

const MerchCard = ({ merch }) => {
    return (
        <article className="merch-card">
            <div className="merch-image">
                <img
                    className="primary-image"
                    src={merch.image}
                    alt={merch.name}
                />

                <img
                    className="secondary-image"
                    src={merch.image2}
                    alt={`${merch.name} Posterior`}
                />
            </div>

            <div className="merch-info">
                <h3>{merch.name}</h3>

                <p className="merch-price">
                    ${merch.price.toLocaleString()}
                </p>

                <div className="merch-sizes">
                    <span className="sizes-label">
                        Tallas:
                    </span>

                    <div className="sizes-container">
                        {merch.sizes.map((size) => (
                            <span
                                key={size}
                                className="size-badge"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                </div>

                <BtnButton
                    component="a"
                    className="merch-btn"
                    href={`http://wa.me/573126957657?text=!Hola%20Deseo%20adquirir%20este%20producto😎🤘%20${merch.name}`}>
                    Comprar
                </BtnButton>
            </div>
        </article>
    )
}

export default MerchCard
