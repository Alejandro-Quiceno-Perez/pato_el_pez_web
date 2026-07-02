import React from 'react'
import Merch from '../../db/Merch'
import MerchCard from '../../utils/MerchCard'
import '../../styles/HomeMerch.css'

const HomeMerch = () => {
    const featuredMerch = Merch.slice(0, 4)
    return (
        <div className="home-merch-container">
            <div className="merch-wrapper">
                <h2>Merchandising</h2>
                <div className="merch-grid">
                    {
                        featuredMerch.map(item => (
                            <MerchCard 
                                key={item.id}
                                merch={item}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeMerch
