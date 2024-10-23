import './ComponentBetween.moudel.css';
import { CiCalendarDate } from 'react-icons/ci';
import { MdOutlineAddCircle } from 'react-icons/md';
import { GrSubtractCircle } from 'react-icons/gr';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from "react";

function ComponentBetween() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const handleIncrement = (setter) => {
        setter((prev) => prev + 1);
    };

    const handleDecrement = (setter, minValue) => {
        setter((prev) => (prev > minValue ? prev - 1 : prev));
    };

    // Function to reset the form
    const handleReset = () => {
        setStartDate(new Date());
        setEndDate(new Date());
        setAdults(1);
        setChildren(0);
    };

    return (
        <div className="component-between flex flex-col md:flex-row justify-center items-center gap-12 bg-gray-100 rounded-lg shadow-md px-9 py-9 mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex gap-8">
                    <div className="check-in">
                        <p className="font-bold text-xl text-gray-700 mb-2">Check - In</p>
                        <div className="flex items-center gap-2">
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="MMMM d, yyyy"
                                className="text-lg text-gray-500"
                                minDate={new Date()} // Prevent past dates
                            />
                            <CiCalendarDate className="text-2xl text-gray-500" />
                        </div>
                    </div>
                    <div className="check-out">
                        <p className="font-bold text-xl text-gray-700 mb-2">Check - Out</p>
                        <div className="flex items-center gap-2">
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => {
                                    if (date > startDate) {
                                        setEndDate(date);
                                    }
                                }}
                                dateFormat="MMMM d, yyyy"
                                className="text-lg text-gray-500"
                                minDate={startDate} // Ensure check-out is after check-in
                            />
                            <CiCalendarDate className="text-2xl text-gray-500" />
                        </div>
                    </div>
                </div>

                {/* Flex items for Adults and Children */}
                <div className="flex items-center justify-around gap-8">
                    <div className="adults text-center">
                        <p className="font-bold text-xl text-gray-700 mb-2">Adults</p>
                        <div className="flex items-center gap-4">
                            <p className="text-3xl text-gray-500">{adults}</p>
                            <div className="flex flex-col items-center">
                                <MdOutlineAddCircle
                                    className="text-3xl text-gray-700 cursor-pointer"
                                    onClick={() => handleIncrement(setAdults)}
                                />
                                <GrSubtractCircle
                                    className="text-3xl text-gray-700 cursor-pointer"
                                    onClick={() => handleDecrement(setAdults, 1)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="children text-center">
                        <p className="font-bold text-xl text-gray-700 mb-2">Children</p>
                        <div className="flex items-center gap-4">
                            <p className="text-3xl text-gray-500">{children}</p>
                            <div className="flex flex-col items-center">
                                <MdOutlineAddCircle
                                    className="text-3xl text-gray-700 cursor-pointer"
                                    onClick={() => handleIncrement(setChildren)}
                                />
                                <GrSubtractCircle
                                    className="text-3xl text-gray-700 cursor-pointer"
                                    onClick={() => handleDecrement(setChildren, 0)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex flex-col items-center">
                <button className="bg-[#1C2C34] text-white px-6 py-2 rounded-md hover:bg-[#334250] transition-all">
                    Check Availability
                </button>
                <button
                    className="mt-2 bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition-all"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}

export default ComponentBetween;
