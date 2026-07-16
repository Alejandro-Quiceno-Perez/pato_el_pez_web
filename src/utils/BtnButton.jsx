import React from 'react'
import { Link } from 'react-router-dom'

/*
        Componente Buttom
        Este componente sirve para reutilizar todos los botones de la aplicacion, Dependiendo del valor de la propiedad "componente", Renderiza
        - componente = buttom
        - componente = link
        - componente = a 

        "Si no se especifica el componente, por defecto se renderiza un buttom"
*/

const BtnButton = ({
    children,
    component = "button", // Valor por defecto "button"
    className = "",
    ...props
}) => {

    /*
        Si es un LINK de react router
        se utiliza para navegar entre paginas de nuestra aplicacion sin recargar el navegador

    */

    if (component === "link") {
        return (
            <Link className={className}
                {...props}>
                {children}
            </Link>
        )
    }

    /*
    ------------------------------------------------------------------------
    SI ES UN ENLACE NORMAL (<a>)
    ------------------------------------------------------------------------

    Se utiliza para:

    • Spotify
    • YouTube
    • Instagram
    • Facebook
    • WhatsApp
    • Descargar archivos
    • Abrir cualquier página externa

    */

    if (component === "a") {
        return (
            <a
                className={className}
                {...props}
            >
                {children}
            </a>
        )
    }

    /*
   ------------------------------------------------------------------------
   SI NO ES LINK NI ANCHOR

   Renderiza un botón HTML normal.

   */

    return (
        <button
            className={className}
            {...props}
        >
            {children}
        </button>
    );
}

export default BtnButton;
