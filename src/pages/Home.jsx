import React from 'react'
import BannerBienvenida from '../components/UI/BannerBienvenida'
import AboutSection from '../components/UI/AboutSection'
import FotoBannerBanda from '../components/UI/FotoBannerBanda'
import HomeMusic from '../components/UI/HomeMusic'
import HomeMerch from '../components/UI/HomeMerch'

const Home = () => {
    return (
        <div>
            <BannerBienvenida />
            <AboutSection />
            <HomeMusic />
            <HomeMerch />
            <FotoBannerBanda />
        </div>
    )
}

export default Home
