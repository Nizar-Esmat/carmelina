// Discovery.jsx
import React from 'react';
import './discovety.moudel.css'; // Ensure correct file name
import Signature from '../../src/assets/Discover/signature.png';
import img1 from '../../src/assets/Discover/start_bootstrap04.webp';
import img2 from '../../src/assets/Discover/start_bootstrap05.webp';
import img3 from '../../src/assets/Discover/start_bootstrap06.webp';

function Discovery() {
    return (
        <div className="container mx-auto p-6 md:p-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                {/* Left Column */}
                <div className="w-full md:w-1/2  md:text-left">
                    <p className="font-bold text-lg md:text-2xl text-[#BAACA0] mb-2 underline">We are the best 5-star hotel for you</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">A Boutique Hotel In The Heart of New York</h2>
                    <p className="mb-6">
                        Carmelina Hotels & Resorts is a modern, upscale hospitality company that is passionate about
                        ‘making moments’, recognizing that small gestures make a big difference to our guests, our owners,
                        and our people. We do ordinary things in an extraordinary way – a philosophy that has defined our
                        brand’s success from the very start.
                    </p>
                    <button className="btn-discover">Discover More</button> {/* Updated button class */}
                </div>
                {/* Right Column */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="italic mb-4">
                        “Our mission as a premier New York hotel is to provide peace of mind, consistency, and build loyalty
                        based on the value of our relationships with guests. We strive to be unique and the place you want
                        to come back, Aliquam porttitor sit amet diam non placerat.”
                    </p>
                    <img src={Signature} alt="Signature of Dave Bautista" className="w-1/2 mx-auto md:mx-0 mb-4" />
                    <p><span className="font-bold">Dave Bautista</span> – General Manager, Carmelina Hotel</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-12 my-4">
                <div>
                    <img src={img1} alt="Carmelina Hotel Image 1" className="hover:scale-105 transition-all duration-300 shadow-lg" />
                </div>
                <div>
                    <img src={img2} alt="Carmelina Hotel Image 2" className="hover:scale-105 transition-all duration-300 shadow-lg" />
                </div>
                <div>
                    <img src={img3} alt="Carmelina Hotel Image 3" className="hover:scale-105 transition-all duration-300 shadow-lg" />
                </div>
            </div>
        </div>
    );
}

export default Discovery;
