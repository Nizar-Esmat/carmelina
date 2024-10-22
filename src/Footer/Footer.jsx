import React from 'react';
import "/src/Footer/Footer.moudel.css";
import logo from '/src/assets/logo.webp';
import reward1 from '/src/assets/FooterLogos/awards-1.svg';
import reward2 from '/src/assets/FooterLogos/awards-2.svg';
import reward3 from '/src/assets/FooterLogos/awards-3.svg';
import reward4 from '/src/assets/FooterLogos/awards-4.svg';


import baymentOne from '/src/assets/paymentMode/batment_mode1.svg';
import baymentTwo from '/src/assets/paymentMode/batment_mode2.svg';
import baymentThere from '/src/assets/paymentMode/batment_mode3.svg';
import baymentFour from '/src/assets/paymentMode/batment_mode4.svg';
function Footer(props) {
    return (
        <footer className="footer bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4 lg:flex lg:justify-between lg:items-start">
                {/* Logo and Description */}
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                    <div className="mb-4">
                        <img src={logo} className="w-40 h-auto" alt="Logo"/>
                    </div>
                    <p className="text-sm lg:text-base leading-relaxed mb-6 w-2/3">
                        Welcome to Carmelina, where comfort is everything. Beautiful room presentations, straightforward
                        booking & reservation options, and a whole lot more await here.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {[reward1, reward2, reward3, reward4].map((reward, index) => (
                            <div key={index} className="w-16 h-auto hover:scale-105 transition-transform duration-300">
                                <img src={reward} className="grayscale hover:grayscale-0 transition-all duration-300"
                                     alt={`Award ${index + 1}`}/>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="lg:w-1/5 mb-8 lg:mb-0">
                    <h2 className="font-bold text-2xl mb-4">Explore</h2>
                    <ul className="space-y-2 text-sm">
                        {["Service", "Contact", "Offer & Events", "About Us", "Our Rooms", "Home"].map((item, index) => (
                            <li key={index} className="hover:text-gray-400 cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>

                {/* Contact Information */}
                <div className="lg:w-1/4 mb-8 lg:mb-0">
                    <h2 className="font-bold text-2xl mb-4">Contact</h2>
                    <p className="mb-4">3949 State 38b Rte Newark Valley, New York(NY), 1381</p>
                    <p className="mb-4">
                        +99 (0) 344 956 4050
                        <br/>
                        +99 (0) 234 666 7853
                    </p>
                    <p>
                        www.carmelina.com
                        <br/>
                        Carmelina1806@gmail.com
                    </p>
                </div>

                {/* Payment Methods */}
                <div className="lg:w-1/4">
                    <h2 className="font-bold text-2xl text-center mb-6">Payment Methods</h2>
                    <p className="text-center text-sm mb-6">
                        Pay any way you choose, whether it’s <span className="underline text-blue-400">cash or an international payment card</span>,
                        we support all payment options.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[baymentOne, baymentTwo, baymentThere, baymentFour].map((payment, index) => (
                            <div key={index}
                                 className="w-24 md:w-28 lg:w-32 hover:scale-105 transition-transform duration-300">
                                <img src={payment} className="grayscale hover:grayscale-0 transition-all duration-300"
                                     alt={`Payment Option ${index + 1}`}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>

    );
}

export default Footer;