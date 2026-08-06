import { useEffect, useState } from 'react'
import "../../styles/SplashScreem.css"

const DISPLAY_DURATION = 7200;
const FADE_DURATION = 800;

const SplashScreen = ({ onFinish }) => {
    // const splashScreem = '/videos/splashScreem.mp4';

    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, DISPLAY_DURATION);

        const finishTimer = setTimeout(() => {
            onFinish?.();
        }, DISPLAY_DURATION + FADE_DURATION);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div className={`splash-container ${fadeOut ? 'fade-out' : ''}`}>

            {/* Desktop */}

            <video
                className="splash-video splash-desktop"
                autoPlay
                muted
                playsInline
            >
                <source
                    src="/videos/splashScreem.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Mobile */}

            <video
                className="splash-video splash-mobile"
                autoPlay
                muted
                playsInline
            >
                <source
                    src="/videos/SplashScreemCelular.mp4"
                    type="video/mp4"
                />
            </video>

        </div>
    );
}

export default SplashScreen
