import React, { useContext, useEffect, useState } from 'react'
import Times from './Times';

const Timings = ({ time, id, delThis }) => {
  const [dispStart, setDispStart] = useState(false)
  const [dispEnd, setDispEnd] = useState(false)
  const [startTime, setStartTime] = useState(time.start)
  const [endTime, setEndTime] = useState(time.end)
  const [warn,setwarn] = useState(false)
  useEffect(()=>{
    let stdstHour
    let stdEndHour
  if(startTime.includes('pm')){
    stdstHour = (parseInt(startTime.split(':')[0])%12)+12
  }
  else{
    stdstHour = parseInt(startTime.split(':')[0])%12
  }
  if(endTime.includes('pm')){
    stdEndHour = (parseInt(endTime.split(':')[0])%12)+12
  }
  else{
    stdEndHour = parseInt(endTime.split(':')[0])%12
  }
  let startMin = parseInt(startTime.split(':')[1])
  let endMin = parseInt(endTime.split(':')[1])

if(stdstHour==stdEndHour){
  if(startMin==endMin){
    setwarn(true)
  }
  else if(startMin>endMin){
    setwarn(true)
  }
  else{
    setwarn(false)
  }
}
else if(stdstHour>stdEndHour){
  setwarn(true)
}
else{
  setwarn(false)
}
  },[startTime,endTime])
  return (
    <div>
      <div className='flex items-center '>
        <div className='relative'>
          <input type="text"
            className='h-[46px] w-[94px] border text-center border-[#b2b2b2] rounded-[8px] focus:outline-none focus:border-[rgb(0,105,255)] shadow-[inset 0 0 0 1px rgb(0,105,255)] mx-1'
            value={startTime}
            readOnly
            onFocus={() => setDispStart(true)}
            onBlur={() => {
              setTimeout(() => {
                setDispStart(false)
              }, 150);
            }} />
          {dispStart && <Times getData={(time) => setStartTime(time)} />}
        </div>
        -
        <div className='relative'>
          <input type="text"
            className='h-[46px] w-[94px] border text-center border-[#b2b2b2] rounded-[8px] focus:outline-none focus:border-[rgb(0,105,255)] shadow-[inset 0 0 0 1px rgb(0,105,255)] mx-1'
            value={endTime}
            readOnly
            onFocus={() => setDispEnd(true)}
            onBlur={() => {
              setTimeout(() => {
                setDispEnd(false)
              }, 150);
            }} />
          {dispEnd && <Times getData={(time) => setEndTime(time)} />}
        </div>
        {/*----------- close button -----------*/}
        <button
          onClick={() => { delThis(id) }}
          className='ml-2 flex justify-center items-center w-11 h-11 p-1 rounded text-[rgb(26,26,26)]'>
          <svg className='w-4 h-4 stroke-[.8]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
            <path fill="#fff" fillOpacity="0.01" d="M0 0h16v16H0z"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M3.298 11.855c-.316.315-.381.76-.147.995.235.234.68.169.995-.146l3.855-3.856 3.855 3.855c.315.316.76.381.995.147.234-.234.169-.68-.147-.995L8.85 8l3.854-3.855c.316-.315.381-.76.147-.995-.235-.234-.68-.169-.995.147L8 7.15 4.146 3.297c-.315-.316-.76-.381-.995-.147-.234.235-.168.68.147.995L7.152 8l-3.854 3.855Z" fill="currentColor"></path></svg>
        </button>
      </div>
      {warn && <p className='text-red-300'>Choose an end time later than the start time</p>}
    </div>
  )
}

export default Timings