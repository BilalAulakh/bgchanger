import { useState } from 'react'



function App() {
  const [color, setColor] = useState('olive')

  return (
    
    <div className='bg-slate-600 w-full h-screen ' style={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

      <div className='flex justify-center flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-md'>
        <button className='px-2 py-1 bg-red-500 rounded-lg' onClick={()=>setColor('red')}>Red</button>
        <button className='px-2 py-1 bg-green-700 rounded-lg' onClick={()=>setColor('green')}>Green</button>
        <button className='px-2 py-1 bg-purple-500 rounded-lg' onClick={()=>setColor('#800080')}>Purple</button>
        <button className='px-2 py-1 bg-yellow-600 rounded-lg' onClick={()=>setColor('#FFFF00')}>Yellow</button>
      </div>
    </div>
    
    </div>
    
  )
}

export default App
