import { useEffect, useState } from 'react'
import '../styles/BtnTop.css'

const BtnTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleEventVisibility = () => {
            if (window.scrollY > window.innerHeight * 0.5) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleEventVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', toggleEventVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            type="button"
            aria-label="Volver arriba"
            onClick={scrollToTop}
            className={`back-to-top ${isVisible ? 'show' : ''}`}
        >
            <i className="bi bi-arrow-up-short"></i>
        </button>
    )
}

export default BtnTop
