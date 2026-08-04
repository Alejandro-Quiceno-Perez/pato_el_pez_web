import React, { useMemo } from 'react'
import SliderModule from 'react-slick'
import Members from '../db/Members.js'
import CardMember from './CardMember'

import "slick-carousel/slick/slick.css";

const Slider = SliderModule.default?.default ?? SliderModule.default ?? SliderModule


const MemberSlider = () => {
    // const settings = {
    //     customPaging: function (i) {
    //         return (
    //             <a>
    //                 <img src={Members[i].image} alt={Members[i].name} />
    //             </a>
    //         );
    //     },
    //     dots: true,
    //     dotsClass: "slick-dots slick-thumb",
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     autoplay: true,
    //     autoplaySpeed: 10000
    // }

    const settings = useMemo(() => ({

        customPaging: function (i) {

            return (

                <a>

                    <img
                        src={Members[i].image}
                        alt={Members[i].name}
                        loading="lazy"
                        decoding="async"
                    />

                </a>

            );

        },

        dots: true,

        dotsClass: "slick-dots slick-thumb",

        infinite: true,

        speed: 500,

        slidesToShow: 1,

        slidesToScroll: 1,

        arrows: false,

        autoplay: true,

        autoplaySpeed: 10000

    }), []);
    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    Members.map((member) => (
                        <CardMember key={member.id} member={member} />
                    ))
                }
            </Slider>
        </div>
    )
}

export default MemberSlider
