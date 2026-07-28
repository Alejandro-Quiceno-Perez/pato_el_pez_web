import React from "react";
import BtnButton from "./BtnButton";

const SuccessModal = ({
    success,
    title,
    message,
    onClose
}) => {

    return (

        <div className="modal-overlay">

            <div className={`success-modal ${success ? "success" : "error"}`}>

                {/*=========================================
                    ICONO
                =========================================*/}

                <div className={`success-icon ${success ? "success" : "error"}`}>

                    {

                        success

                            ? "✓"

                            : "!"

                    }

                </div>

                {/*=========================================
                    TITULO
                =========================================*/}

                <h2>

                    {title}

                </h2>

                {/*=========================================
                    MENSAJE
                =========================================*/}

                <p>

                    {message}

                </p>

                {/*=========================================
                    BOTONES
                =========================================*/}

                <div className="success-buttons">

                    {

                        success &&

                        <BtnButton

                            component="a"

                            href="https://chat.whatsapp.com/LRMzRcWFgJpD1ykSm9Pg7r"

                            target="_blank"

                            className="btn-whatsapp"

                        >

                            Unirme al grupo de WhatsApp

                        </BtnButton>

                    }

                    <BtnButton

                        onClick={onClose}

                        className="btn-close"

                    >

                        {

                            success

                                ? "Cerrar"

                                : "Aceptar"

                        }

                    </BtnButton>

                </div>

            </div>

        </div>

    );

};

export default SuccessModal;