import React from 'react'
import '../../styles/header.css'
import { Link } from 'react-router-dom'
import logo from '/logo_letras_negro.png'

const Header = () => {
    const leftNav = [
        { name: "Videos", path: "/videos" },
        { name: "Musica", path: "/music" },
        { name: "Recorrido", path: "/recorrido" },
    ];

    const rightNav = [
        { name: "Tienda", path: "/merch" },
        { name: "Fans", path: "/subscribe" },
        { name: "Press Kit", path: "/press-kit" },
    ];

    const NavGroup = ({ items }) => {
        return (
            <>
                {items.map((item, index) => (
                    <Link className='nav-link' key={index} to={item.path}>{item.name}</Link>
                ))}
            </>
        )
    }


    return (
        <header className='header'>
            {/* Lado Izquierdo  */}
            <div className="container-header">
                <nav className='nav-left'>
                    <NavGroup className='nav-link' items={leftNav} />
                </nav>

                {/* Logo */}
                <div className='logo'>
                    <Link to="/">
                        <img className='logo-img' src={logo} alt="Pato el Pez logo" />
                    </Link>
                </div>

                {/* Lado Derecho */}
                <nav className='nav-right'>
                    <NavGroup className='nav-link' items={rightNav} />
                </nav>
            </div>
        </header>
    )
}

export default Header
