import '../../styles/header.css'
import { Link, NavLink } from 'react-router-dom'
import logo from '/logo_letras_blanco.webp'

const leftNav = [
    { name: "Videos", path: "/videos" },
    { name: "Música", path: "/music" },
    { name: "Recorrido", path: "/recorrido" },
];

const rightNav = [
    { name: "Tienda", path: "/merch" },
    { name: "Fans", path: "/fans" },
    { name: "Press Kit", path: "/press-kit" },
];

const NavGroup = ({ items }) => (
    <>
        {items.map((item) => (
            <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }
            >
                {item.name}
            </NavLink>
        ))}
    </>
)

const Header = () => {
    return (
        <header className='header'>
            <div className="container-header">
                <nav className='nav-left'>
                    <NavGroup items={leftNav} />
                </nav>

                <div className='logo'>
                    <Link to="/">
                        <img className='logo-img' src={logo} alt="Pato el Pez logo"
                            loading="lazy"
                            decoding="async" />
                    </Link>
                </div>

                <nav className='nav-right'>
                    <NavGroup items={rightNav} />
                </nav>
            </div>
        </header>
    )
}

export default Header
