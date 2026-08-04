import React, { useState } from "react";
import BtnButton from "./BtnButton";
import { registerFan } from "../services/FanService";

const FanForm = ({ showModal }) => {

    const [form, setForm] = useState({

        nombre: "",

        correo: "",

        noticias: false

    });

    const [loading, setLoading] = useState(false);

    /**
     * ==========================================
     * VALIDAR EMAIL
     * ==========================================
     */

    const validateEmail = (email) => {

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    };

    /**
     * ==========================================
     * HANDLE CHANGE
     * ==========================================
     */

    const handleChange = (e) => {

        const { name, value, checked, type } = e.target;

        setForm(prev => ({

            ...prev,

            [name]:

                type === "checkbox"

                    ? checked

                    : value

        }));

    };

    /**
     * ==========================================
     * ENVIAR FORMULARIO
     * ==========================================
     */

    const handleSubmit = async (e) => {

        e.preventDefault();

        /**
         * Nombre
         */

        if (!form.nombre.trim()) {

            showModal({

                success: false,

                title: "Nombre requerido",

                message:
                    "Debes ingresar tu nombre para poder registrarte."

            });

            return;

        }

        /**
         * Correo
         */

        if (!form.correo.trim()) {

            showModal({

                success: false,

                title: "Correo requerido",

                message:
                    "Debes ingresar un correo electrónico."

            });

            return;

        }

        /**
         * Formato del correo
         */

        if (!validateEmail(form.correo)) {

            showModal({

                success: false,

                title: "Correo inválido",

                message:
                    "Ingresa un correo electrónico válido."

            });

            return;

        }

        /**
         * Tratamiento de datos
         */

        if (!form.noticias) {

            showModal({

                success: false,

                title: "Autorización requerida",

                message:
                    "Debes aceptar el tratamiento de datos personales para poder unirte a la comunidad."

            });

            return;

        }

        setLoading(true);

        try {

            const response = await registerFan({

                nombre: form.nombre.trim(),

                correo: form.correo.trim().toLowerCase(),

                noticias: form.noticias

            });

            if (response.success) {

                setForm({

                    nombre: "",

                    correo: "",

                    noticias: false

                });

                showModal({

                    success: true,

                    title: "¡Registro exitoso!",

                    message:
                        "Bienvenido a la comunidad oficial de Pato el Pez. Ya puedes acceder a nuestro grupo exclusivo de WhatsApp."

                });

            }

            else {

                showModal({

                    success: false,

                    title: "No fue posible registrar",

                    message:
                        response.message || "Inténtalo nuevamente más tarde."

                });

            }

        }

        catch (error) {

            console.error(error);

            showModal({

                success: false,

                title: "Error",

                message:
                    "No fue posible completar tu registro. Inténtalo nuevamente en unos minutos."

            });

        }

        finally {

            setLoading(false);

        }

    };

    return (

        <form

            className="fan-form"

            onSubmit={handleSubmit}

        >

            {/*=========================================
                HEADER
            =========================================*/}

            <div className="form-header">

                <span>

                    Comunidad Oficial

                </span>

                <h2>

                    Haz parte de la familia

                </h2>

            </div>

            {/*=========================================
                NOMBRE
            =========================================*/}

            <div className="form-group">

                <input

                    type="text"

                    name="nombre"

                    placeholder="Nombre completo"

                    value={form.nombre}

                    onChange={handleChange}

                />

            </div>

            {/*=========================================
                CORREO
            =========================================*/}

            <div className="form-group">

                <input

                    type="email"

                    name="correo"

                    placeholder="Correo electrónico"

                    value={form.correo}

                    onChange={handleChange}

                />

            </div>

            {/*=========================================
                TRATAMIENTO DE DATOS
            =========================================*/}

            <label className="checkbox-group">

                <input

                    type="checkbox"

                    name="noticias"

                    checked={form.noticias}

                    onChange={handleChange}

                />

                <span className="custom-checkbox"></span>

                <span className="checkbox-text">

                    Quiero recibir noticias y contenido exclusivo de la banda.

                </span>

            </label>

            <p className="privacy-text">

                Al registrarte aceptas el tratamiento de tus datos personales
                conforme a la <strong>Ley 1581 de 2012</strong> y autorizas a
                Pato el Pez a utilizar tu información únicamente para mantenerte
                informado sobre las actividades oficiales de la banda. Tus datos
                no serán vendidos ni compartidos con terceros.

            </p>

            {/*=========================================
                BOTÓN
            =========================================*/}

            <BtnButton

                type="submit"

                disabled={loading}

                className="btn-register"

            >

                {

                    loading

                        ? "Registrando..."

                        : "Unirme a la comunidad"

                }

            </BtnButton>

        </form>

    );

};

export default FanForm;