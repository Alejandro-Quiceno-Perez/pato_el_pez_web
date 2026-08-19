import { useState } from "react";

import FanForm from "../utils/FanForm";
import SuccessModal from "../utils/SuccessModal";

import "../styles/Fans.css";

const Fans = () => {

    /**
     * ==========================================
     * ESTADO DEL MODAL
     * ==========================================
     */

    const [modal, setModal] = useState({

        open: false,

        success: false,

        title: "",

        message: ""

    });

    /**
     * ==========================================
     * ABRIR MODAL
     * ==========================================
     */

    const showModal = ({ success, title, message }) => {

        setModal({

            open: true,

            success,

            title,

            message

        });

    };

    /**
     * ==========================================
     * CERRAR MODAL
     * ==========================================
     */

    const closeModal = () => {

        setModal({

            open: false,

            success: false,

            title: "",

            message: ""

        });

    };

    return (

        <main className="fans-page">

            <section className="fans-container">

                {/*=========================================
                    INFORMACIÓN
                =========================================*/}

                <div className="fans-content">

                    <span className="fans-subtitle">

                        Comunidad Oficial

                    </span>

                    <h1>

                        Únete a la familia de Pato el Pez

                    </h1>

                    <p>

                        Forma parte de nuestra comunidad y recibe antes que nadie
                        noticias, lanzamientos, conciertos, descuentos y contenido
                        exclusivo de la banda.

                    </p>

                    <ul className="fans-benefits">

                        <li>

                            Lanzamientos exclusivos

                        </li>

                        <li>

                            Preventa de conciertos

                        </li>

                        <li>

                            Sorteos y regalos

                        </li>

                        <li>

                            Contenido detrás de cámaras

                        </li>

                        <li>

                            Descuentos en merchandising

                        </li>

                    </ul>

                </div>

                {/*=========================================
                    FORMULARIO
                =========================================*/}

                <div className="fans-form-container">

                    <FanForm

                        showModal={showModal}

                    />

                </div>

            </section>

            {/*=========================================
                MODAL
            =========================================*/}

            {

                modal.open &&

                <SuccessModal

                    success={modal.success}

                    title={modal.title}

                    message={modal.message}

                    onClose={closeModal}

                />

            }

        </main>

    );

};

export default Fans;