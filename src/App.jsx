import React from 'react'
import MilkChoco from './components/MilkChoco'
import DarkChoco from './components/DarkChoco'
import WhiteChoco from './components/WhiteChoco'
import Chocolate from './components/Chocolate'

function App() {
  return (
    <>
    <div className='bg-white w-screen'>
   <MilkChoco/>
   <DarkChoco/>
   <WhiteChoco/>
   <Chocolate/>
   </div>
    </>
  )
}

export default App
