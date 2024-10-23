import React from 'react';
import img1 from '../../src/assets/Home/start_bootstrap02.webp';
import img2 from '../../src/assets/Home/start_bootstrap03.webp';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Home.moudel.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

function Home() {
    const slidesData = [
        {
            background: img1,
            title: "Carmelina Luxury Hotel & Resort",
            subtitle: "Maximum luxury. Exclusive sensation.",
            description: "When you get into a hotel room, you lock the door, and you know there is a secrecy, there is luxury, there is fantasy. There is comfort. There is reassurance.",
        },
        {
            background: img2,
            title: "Carmelina Luxury Hotel & Resort",
            subtitle: "Maximum luxury. Exclusive sensation.",
            description: "When you get into a hotel room, you lock the door, and you know there is a secrecy, there is luxury, there is fantasy. There is comfort. There is reassurance.",
        },
    ];

    return (
        <div className="swiper-container ">
            <Swiper
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper">
                {slidesData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            style={{
                                backgroundImage: `url(${slide.background})`,
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                            className="slide-container relative flex flex-col text-white items-center justify-center h-screen w-screen gap-12 p-6 md:p-12 bg-gradient-to-b from-gray-900 to-gray-700"
                        >
                            {/* Overlay */}
                            <div className="overlay"></div>

                            <span className="text-lg md:text-xl underline relative z-10">{slide.title}</span>
                            <h2 className="text-3xl md:text-5xl underline text-yellow-400 text-center relative z-10">
                                {slide.subtitle}
                            </h2>
                            <p className="text-center max-w-2xl text-2xl relative z-10">
                                {slide.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Home;
