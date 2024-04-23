import logo from './assets/logo.svg'

export default function EasyChart() {
    const data = '[{"day": "mon","amount": 17.45},{"day": "tue","amount": 34.91},{"day": "wed","amount": 52.36},{"day": "thu","amount": 31.07},{"day": "fri","amount": 23.39},{"day": "sat","amount": 43.28},{"day": "sun","amount": 25.48}]'
    const amounts = [];
    const day = [];
    const newData = JSON.parse(data);
    
    newData.forEach(obj => {
        amounts.push(obj.amount)
        day.push(obj.day)
        let res = (obj.amount / 100) * 160;
        console.log(res);
    });

    return (
        <div className='w-[400px]'>
            <div className='w-full h-auto flex flex-row justify-between bg-[#ec775f] rounded-lg p-5 text-white'>
                <div>
                    <p>My balance</p>
                    <h1 className='text-xl font-semibold'>$921.48</h1>
                </div>
                <div><img src={logo} alt="" /></div>
            </div>

            <div className='w-full h-auto flex flex-col gap-y-5 bg-[#f8e9dd] rounded-lg p-5 mt-3'>
                <h1 className='text-xl font-semibold'>Spending - Last 7 days</h1>
                <div id='bars' className='text-sm text-[#93867b]
                                flex flex-row items-end justify-between min-h-52
                                cursor-pointer'>
                    <div className='group flex flex-col items-center text-center w-10'>
                        <div className='hidden group-hover:block bg-black rounded-md text-[10px] text-white mb-1 w-12'>${amounts[0]}</div>
                        <div className='w-full h-[28px] bg-[#ec775f] rounded-md hover:bg-sky-300'></div>
                        <h1>{day[0]}</h1>
                    </div>
                    <div className='group flex flex-col items-center text-center w-10'>
                        <div className='hidden group-hover:block bg-black rounded-md text-[10px] text-white mb-1 w-12'>${amounts[1]}</div>
                        <div className='w-full h-[56px] bg-[#ec775f] rounded-md hover:bg-sky-300'></div>
                        <h1>{day[1]}</h1>
                    </div>
                    <div className='group flex flex-col items-center text-center w-10'>
                        <div className='hidden group-hover:block bg-black rounded-md text-[10px] text-white mb-1 w-12'>${amounts[2]}</div>
                        <div className='w-full h-[84px] bg-[#ec775f] rounded-md hover:bg-sky-300'></div>
                        <h1>{day[2]}</h1>
                    </div>
                    <div className='group flex flex-col items-center text-center w-10'>
                        <div className='hidden group-hover:block bg-black rounded-md text-[10px] text-white mb-1 w-12'>${amounts[3]}</div>
                        <div className='w-full h-[50px] bg-[#ec775f] rounded-md hover:bg-sky-300'></div>
                        <h1>{day[3]}</h1>
                    </div>
                    <div className='group flex flex-col items-center text-center w-10'>
                        <div className='hidden group-hover:block bg-black rounded-md text-[10px] text-white mb-1 w-12'>${amounts[4]}</div>
                        <div className='w-full h-[37px] bg-[#ec775f] rounded-md hover:bg-sky-300'></div>
                        <h1>{day[4]}</h1>
                    </div>
                    <div className='group flex flex-col items-center text-center w-10'>
                        <div className='hidden group-hover:block bg-black rounded-md text-[10px] text-white mb-1 w-12'>${amounts[5]}</div>
                        <div className='w-full h-[70px] bg-[#ec775f] rounded-md hover:bg-sky-300'></div>
                        <h1>{day[5]}</h1>
                    </div>
                    <div className='group flex flex-col items-center text-center w-10'>
                        <div className='hidden group-hover:block bg-black rounded-md text-[10px] text-white mb-1 w-12'>${amounts[6]}</div>
                        <div className='w-full h-[41px] bg-[#ec775f] rounded-md hover:bg-sky-300'></div>
                        <h1>{day[6]}</h1>
                    </div>
                </div>
                <div className='bg-[#93867b] opacity-50 h-[1px] w-full'></div>
                <div className='flex flex-row justify-between'>
                    <p className='text-sm text-[#93867b]'>Total this month<br/><span className='text-2xl font-semibold text-black'>$478.33</span></p>
                    <p className='flex flex-col items-end justify-end text-sm font-semibold'>+2.4%<br/><span className='text-sm font-normal text-[#93867b]'>from last month</span></p>
                </div>
            </div>
        </div>
    )
}