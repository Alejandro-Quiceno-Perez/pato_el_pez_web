import React from 'react'
import BannerBienvenida from '../components/UI/BannerBienvenida'
import AboutSection from '../components/UI/AboutSection'
import FotoBannerBanda from '../components/UI/FotoBannerBanda'

const Home = () => {
    return (
        <div>
            <BannerBienvenida />
            <AboutSection />
            <FotoBannerBanda />
        </div>
    )
}

export default Home
