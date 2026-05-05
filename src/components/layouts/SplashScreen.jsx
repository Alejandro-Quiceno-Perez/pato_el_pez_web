import React, { useEffect, useState } from 'react'
import "../../styles/SplashScreem.css"

const SplashScreen = () => {
    const splashScreem = '/videos/splashScreem.mp4';

    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 8000); // 8 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>
            <video className="splash-video" autoPlay muted>
                <source src={splashScreem} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default SplashScreen
