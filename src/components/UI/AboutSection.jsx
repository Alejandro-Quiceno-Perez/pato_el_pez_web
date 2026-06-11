import React from 'react'
import AboutSectionTitle from '../../utils/AboutSectionTitle'
import MemberSlider from '../../utils/MemberSlider'
import '../../styles/AboutSection.css'

const AboutSection = () => {
    return (
        <div className="about-section-container">
            <div className="about-section-title-container">
                <AboutSectionTitle />
            </div>
            <div className="about-section-slider-container">
                <MemberSlider />
            </div>

        </div>
    )
}

export default AboutSection