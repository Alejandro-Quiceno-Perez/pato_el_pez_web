const API_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

/**
 * ==========================================
 * Registrar Fan
 * ==========================================
 */

export const registerFan = async (fan) => {

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {

                "Content-Type": "text/plain;charset=utf-8"

            },

            body: JSON.stringify(fan)

        });

        const data = await response.json();

        return data;

    }

    catch (error) {

        console.error(error);

        throw error;

    }

}