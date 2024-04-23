import Card from './Card.jsx'
import EasyChart from './EasyChart.jsx'
import AgeCalculator from './AgeCalculator.jsx'
function App() {
  
  return (
    <div className='w-full h-auto grid gap-5 grid-cols-3 grid-rows-2 bg-zinc-800'>
      <div className='flex justify-center items-center p-5'><Card /></div>
      <div className='flex justify-center items-center p-5'><EasyChart /></div>
      <div className='flex justify-center items-center p-5'><AgeCalculator /></div>
      <div className='flex justify-center items-center p-5'></div>
      <div className='flex justify-center items-center p-5'></div>
      <div className='flex justify-center items-center p-5'></div>
      <div className='flex justify-center items-center p-5'></div>
      <div className='flex justify-center items-center p-5'></div>
      <div className='flex justify-center items-center p-5'></div>
    </div>
  )
}

export default App
