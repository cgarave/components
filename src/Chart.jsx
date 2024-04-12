import logo from './assets/logo.svg'
import datas from '../data.json'

export default function Chart() {
    function setBarHeight(data){
        let fixedHeight = 160;
        let setNewHeight = data[0].amount / 100 * fixedHeight;

        return setNewHeight;
    }
    
    fetch('data.json')
    .then(response => response.json())
    .then(y => setBarHeight(y))
    
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
                <div className='text-sm text-[#93867b]
                                flex flex-row items-end justify-between min-h-52'>
                    {datas.map((data, i) => {
                        return (
                            <div className='group flex flex-col items-center text-center w-10' key={i}>
                                <div className='hidden group-hover:block bg-black rounded-md text-[10px] text-white mb-1 w-12'>${data.amount}</div>
                                <div className='w-full h-40 bg-[#ec775f] rounded-md'></div>
                                <h1>{data.day}</h1>
                            </div>
                        )
                    })}
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