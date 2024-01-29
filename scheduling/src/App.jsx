import React,{useState} from 'react'
import Layout from './components/Layout'

export default function App() {
  const [display,setDisplay] = useState(false)
  return (
     
    <div className='bg-black min-h-screen w-screen flex'>
      <button 
      className='bg-white w-16 h-10 '
      onClick={()=>setDisplay(!display)}>CLick</button>
    {display&&<Layout />}
    </div>)
}
