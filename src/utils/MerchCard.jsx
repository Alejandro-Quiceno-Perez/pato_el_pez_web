import BtnButton from './BtnButton'
import '../styles/MerchCard.css'

const MerchCard = ({ merch }) => {
    return (
        <article className="merch-card">
            <div className="merch-image">
                <img
                    className="primary-image"
                    src={merch.image}
                    alt={merch.name}
                    loading="lazy"
                    decoding="async"
                />

                <img
                    className="secondary-image"
                    src={merch.image2}
                    alt={`${merch.name} Posterior`}
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className="merch-info">
                <h3>{merch.name}</h3>

                <p className='merch-description'>
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
                >
                    Comprar
                </BtnButton>
            </div>
        </article>
    )
}

export default MerchCard
