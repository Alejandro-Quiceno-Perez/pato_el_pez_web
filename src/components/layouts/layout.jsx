import { Outlet } from 'react-router-dom'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import BtnTop from '../../utils/BtnTop'

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <BtnTop />
        </>
    )
}

export default Layout
