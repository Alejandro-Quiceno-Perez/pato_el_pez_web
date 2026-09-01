import { useEffect, useState } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

import {
    HiOutlineBars3,
    HiOutlineXMark
} from "react-icons/hi2";

import "../../styles/header.css";

const logo = `${import.meta.env.BASE_URL}logo_letras_blanco.webp`;

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

const mobileNav = [...leftNav, ...rightNav];

const NavGroup = ({ items, onClick }) => {

    return (

        <>

            {
                items.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        onClick={onClick}
                        className={({ isActive }) =>
                            isActive
                                ? "nav-link active-link"
                                : "nav-link"
                        }
                    >
                        {item.name}
                    </NavLink>

                ))
            }

        </>

    );

};

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const location = useLocation();


    // ============================
    // CERRAR AL CAMBIAR DE PÁGINA
    // ============================

    useEffect(() => {

        const closeMenuFrame = requestAnimationFrame(() => {

            setMenuOpen(false);

        });

        return () => cancelAnimationFrame(closeMenuFrame);

    }, [location.pathname]);


    // ============================
    // CERRAR CON ESC
    // ============================

    useEffect(() => {

        const handleKeyDown = (e) => {

            if (e.key === "Escape") {

                setMenuOpen(false);

            }

        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {

            window.removeEventListener("keydown", handleKeyDown);

        };

    }, []);


    // ============================
    // BLOQUEAR SCROLL
    // ============================

    useEffect(() => {

        document.body.style.overflow = menuOpen
            ? "hidden"
            : "auto";

        return () => {

            document.body.style.overflow = "auto";

        };

    }, [menuOpen]);


    return (

        <header className="header">

            <div className="container-header">


                {/* ==========================
                    NAV IZQUIERDO
                ========================== */}

                <nav className="nav-left">

                    <NavGroup items={leftNav} />

                </nav>


                {/* ==========================
                    LOGO
                ========================== */}

                <div className="logo">

                    <Link to="/">

                        <img
                            className="logo-img"
                            src={logo}
                            alt="Pato el Pez"
                            loading="lazy"
                            decoding="async"
                        />

                    </Link>

                </div>


                {/* ==========================
                    NAV DERECHO
                ========================== */}

                <nav className="nav-right">

                    <NavGroup items={rightNav} />

                </nav>


                {/* ==========================
                    BOTÓN HAMBURGUESA
                ========================== */}

                <button
                    type="button"
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={
                        menuOpen
                            ? "Cerrar menú"
                            : "Abrir menú"
                    }
                    aria-expanded={menuOpen}
                >

                    {
                        menuOpen
                            ? <HiOutlineXMark />
                            : <HiOutlineBars3 />
                    }

                </button>

            </div>


            {/* ==========================
                OVERLAY
            ========================== */}

            {
                menuOpen && (

                    <div
                        className="menu-overlay"
                        onClick={() => setMenuOpen(false)}
                    />

                )
            }


            {/* ==========================
                MENÚ MÓVIL
            ========================== */}

            <aside
                className={
                    menuOpen
                        ? "mobile-menu open"
                        : "mobile-menu"
                }
            >

                {/* ==========================
                    CABECERA MENÚ
                ========================== */}

                <div className="mobile-header">

                    <div>

                        <img
                            src={logo}
                            alt="Pato el Pez"
                        />

                        <p>
                            Punk Rock Colombiano
                        </p>

                    </div>


                    {/* ==========================
                        BOTÓN CERRAR MENÚ
                    ========================== */}

                    <button
                        type="button"
                        className="mobile-close"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Cerrar menú"
                    >

                        <HiOutlineXMark />

                    </button>

                </div>


                {/* ==========================
                    NAVEGACIÓN
                ========================== */}

                <nav className="mobile-nav">

                    <NavGroup
                        items={mobileNav}
                        onClick={() => setMenuOpen(false)}
                    />

                </nav>

            </aside>

        </header>

    );

};

export default Header;