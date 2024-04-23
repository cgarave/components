import { useState } from "react"

export default function AgeCalculator() {
    const [day, setDay] = useState(1)
    const [month, setMonth] = useState(1)
    const [year, setYear] = useState(1900)
    const dayDate = new Date().getDate()
    const monthDate = new Date().getMonth() + 1
    const yearDate = new Date().getFullYear()

    function handleDayChange(event){
        setDay(event.target.value);
    }
    function handleMonthChange(event){
        setMonth(event.target.value);
    }
    function handleYearChange(event){
        setYear(event.target.value);
    }

    function calculateAge(){
        let dayAge = 0;
        let monthAge = 0;
        let yearAge = yearDate - year;

        if (dayDate < day) {
            let sum = 31 - day
            dayAge = dayDate + sum;
            document.getElementById('day').innerHTML = dayAge; 
        } else if(dayDate > day) {
            dayAge = dayDate - day;
            document.getElementById('day').innerHTML = dayAge; 
        } else if (dayDate == day) {
            document.getElementById('day').innerHTML = '0'; 
        }

        if(monthDate < month){
            let sum = 12 - month
            monthAge = monthDate + sum;
            yearAge = yearAge - 1;
            document.getElementById('month').innerHTML = monthAge;
            document.getElementById('year').innerHTML = yearAge;
            
            if(dayAge > dayDate){
                monthAge -= 1;
                document.getElementById('month').innerHTML = monthAge;
            }
        } else if (monthDate > month) {
            monthAge = monthDate - month;
            document.getElementById('month').innerHTML = monthAge; 
            document.getElementById('year').innerHTML = yearAge;
        } else if (monthDate == month) {
            document.getElementById('month').innerHTML = '0'; 
        }

        if (dayDate == day && monthDate == month){
            document.getElementById('year').innerHTML = yearAge;
        }
    }

    return (
        <div className="w-96 h-auto bg-white rounded-lg rounded-br-[4rem] p-5">
            <h1 className="font-poppins font-extrabold text-purple-600 mb-5">Age Calculator</h1>
            <form className="flex flex-row gap-x-5 text-xs font-semibold">
                <label htmlFor="day" className="flex flex-col text-gray-600 gap-y-1">Day
                    <input id="dayInput" value={day} onChange={handleDayChange} type="number" min={1} max={31} className="w-24 h-10 rounded-md outline-none p-2 border border-gray-300 font-poppins font-extrabold text-sm"/>
                </label>
                <label htmlFor="month" className="flex flex-col text-gray-600 gap-y-1">Month
                    <input id="monthInput" value={month} onChange={handleMonthChange} type="number" min={1} max={12} className="w-24 h-10 rounded-md outline-none p-2 border border-gray-300 font-poppins font-extrabold text-sm"/>
                </label>
                <label htmlFor="year" className="flex flex-col text-gray-600 gap-y-1">Year
                    <input id="yearInput" value={year} onChange={handleYearChange} type="number" min={1900} max={3000} className="w-24 h-10 rounded-md outline-none p-2 border border-gray-300 font-poppins font-extrabold text-sm"/>
                </label>
            </form>
            <div className="flex flex-row items-center my-5">
                <div className="w-full h-[1px] bg-gray-300"></div>
                <button type="submit" onClick={calculateAge} className="bg-purple-600 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="26" viewBox="0 0 32 32" fill="white">
                    <path d="M 15 1 L 15 24.314453 C 14.248481 23.120803 13.385446 22.03699 12.416016 21.158203 C 9.9362289 18.910283 7.0906164 17.619385 5.3046875 17.046875 L 4.6953125 18.953125 C 6.2253836 19.443615 8.8810515 20.652342 11.072266 22.638672 C 13.263479 24.625002 15 27.320167 15 31 L 17 31 C 17 27.320167 18.736521 24.625002 20.927734 22.638672 C 23.118948 20.652342 25.774616 19.443615 27.304688 18.953125 L 26.695312 17.046875 C 24.909385 17.619385 22.063771 18.910283 19.583984 21.158203 C 18.614554 22.03699 17.751519 23.120803 17 24.314453 L 17 1 L 15 1 z"></path>
                    </svg>
                </button>
            </div>
            <div className="font-poppins font-extrabold italic text-4xl text-purple-600">
                <h1 className="inline-block" id="day">---</h1><span className="text-black">days</span><br />
                <h1 className="inline-block" id="month">---</h1><span className="text-black">months</span><br />
                <h1 className="inline-block" id="year">---</h1><span className="text-black">years</span>
            </div>
        </div>
    )
}