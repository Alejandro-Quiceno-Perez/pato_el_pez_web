import React, { useEffect, useState } from 'react'
import '../styles/btnTop.css'

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

        window.addEventListener('scroll', toggleEventVisibility);
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
        <div>
            <button onClick={scrollToTop}
                className={`back-to-top ${isVisible ? 'show' : ''}`}><i class="bi bi-arrow-up-short"></i></button>
        </div>
    )
}

export default BtnTop
