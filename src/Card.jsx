import icon from './assets/avatar-jessica.jpeg'

export default function Card() {
    return (
        <div className="flex flex-col justify-between items-center h-auto min-w-72 p-4 rounded-lg 
                        bg-zinc-900 text-white gap-y-4">
            <img src={icon} className='w-auto h-16 rounded-full' />
            <h1 className='text-xl font-semibold'>Jessica Randall</h1>
            <p className='text-xs font-semibold text-lime-300'>London, United Kingdom</p>
            <p className='text-xs font-light'>"Front-end developer and avid reader"</p>
            <div className='flex flex-col w-full gap-y-2'>
                <button className='p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 text-xs font-medium'>Github</button>
                <button className='p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 text-xs font-medium'>Frontend Mentor</button>
                <button className='p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 text-xs font-medium'>Linkedin</button>
                <button className='p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 text-xs font-medium'>Twitter</button>
                <button className='p-2 bg-zinc-800 rounded-md hover:bg-zinc-700 text-xs font-medium'>Instagram</button>
            </div>
        </div>
    )
}