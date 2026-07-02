import React from 'react'

const MerchCard = ({ merch }) => {
    return (
        <article className="merch-card">
            <div className="merch-image">
                <img src={merch.image} alt={merch.name} />
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

                <button className="merch-btn">
                    Comprar
                </button>
            </div>
        </article>
    )
}

export default MerchCard
