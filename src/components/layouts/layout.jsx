import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import BtnTop from '../../utils/BtnTop'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                {/* Aquí va el contenido principal de cada página */}
                <Outlet />
            </main>
            <Footer />
            <BtnTop />
        </>
    )
}

export default Layout
