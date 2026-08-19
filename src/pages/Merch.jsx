import { useState } from 'react'
import MerchPato from '../db/Merch'
import MerchCard from '../utils/MerchCard'
import { FaSearch } from 'react-icons/fa'
import '../styles/MerchSection.css'

const Merch = () => {
    // Texto que escribe el usuario en el input de búsqueda
    const [search, setSearch] = useState('')

    // filtrar los productos segun el texto
    const filteredMerch = MerchPato.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className="merch-page">
            <div className="container-merch">
                <div className="merch-header">
                    <h1>Merch Oficial</h1>
                    <p><span className='merch-span'>Lleva un pedazo de Pato el Pez contigo.</span><br></br>
                        Camisetas, accesorios y artículos exclusivos.</p>
                    <div className="merch-search-container">

                        <input
                            type="text"
                            placeholder="Buscar camisetas, busos..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="merch-search"
                        />

                        <FaSearch className="merch-search-icon" />

                    </div>
                </div>


                <div className="merch-grid">
                    {
                        filteredMerch.length > 0 ? (
                            filteredMerch.map((item) => (
                                <MerchCard
                                    key={item.id}
                                    merch={item}
                                />
                            ))
                        ) : (
                            <p className='no-results'>No encontramos productos con ese nombre.</p>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Merch