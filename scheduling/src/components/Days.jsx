import React, { useContext, useState } from 'react'
import { Checkbox } from "@material-tailwind/react";
import Timings from './Timings';
import { ScheduleContext } from './contexts/ScheduleContext';

const Days = ({ data }) => {
  const { setRefresher } = useContext(ScheduleContext)
  const [checked, setChecked] = useState(true)
  const deteteOne = (id) => {
    console.log(id)
    data.times.splice(id, 1)
    console.log(data.times)
    localStorage.setItem(data.day, JSON.stringify(data.times))
    !data.times.length && setChecked(false)
    setRefresher()
  }
  const addData = () => {
    let times = data.times
    let lastTime = times[times.length - 1].end
    let hour
    if (lastTime.includes('pm')) {
      hour = (parseInt(lastTime.split(':')[0]) % 12) + 12
    }
    else {
      hour = parseInt(lastTime.split(':')[0]) % 12
    }
    let stHour = (hour+1)%12 ||12
    let stampm = (hour+1)%24>11? "pm": "am"
    let startTime = `${stHour}:00${stampm}`
    let endHour = (hour+2)%12 ||12
    let endampm = (hour+2)%24>11? "pm": "am"
    let endTime = `${endHour}:00${endampm}`


    data.times.push({ start: startTime, end: endTime })
    localStorage.setItem(data.day, JSON.stringify(data.times))
    console.log(data.times)
  }
  const removeData = () => {
    localStorage.setItem(data.day, JSON.stringify([]))
    setChecked(true)
  }
  const addOne = () => {
    checked ? addData() : removeData()
    setRefresher()
  }
  return (
    <div className='flex  min-h-[46px] py-[10px] box-content w-full'>
      <div className='w-full flex'>
        <div className='w-[88px] mr-[10px]'>
          <Checkbox
            color='blue'
            label={<span className='font-bold text-[14px] uppercase text-[rgb(26,26,26)]'>{data.day}</span>}
            ripple={false}
            className='w-4 h-4 rounded hover:before:opacity-0 font-bold text-[14px] text-[rgb(0,0,0)]'
            onChange={() => setChecked(!checked)}
            checked={checked}
          />
        </div>
        <div className='flex flex-col justify-center gap-[10px]'>
          {
            checked ? data.times.map((e, i) => {
              return <Timings key={i} time={e} id={i} delThis={deteteOne} />
            }) : "undefined"
          }
        </div>
      </div>
      <div className='relative flex text-[rgb(26,26,26)] text-[16px] leading-[1.5]'>
        {/* -------ADD timing button-------- */}
        <button
          onClick={addOne}
          className='relative flex justify-center items-center w-11 h-11 p-1 rounded text-[rgb(26,26,26)] '>
          <svg className='w-4 h-4 stroke-[.8]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path fillRule="evenodd" clipRule="evenodd" d="M9.97461 3.64999C10.3888 3.64999 10.7246 3.98578 10.7246 4.39999V15.65C10.7246 16.0642 10.3888 16.4 9.97461 16.4C9.5604 16.4 9.22461 16.0642 9.22461 15.65V4.39999C9.22461 3.98578 9.5604 3.64999 9.97461 3.64999Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M3.59961 10.025C3.59961 9.61078 3.9354 9.27499 4.34961 9.27499H15.5996C16.0138 9.27499 16.3496 9.61078 16.3496 10.025C16.3496 10.4392 16.0138 10.775 15.5996 10.775H4.34961C3.9354 10.775 3.59961 10.4392 3.59961 10.025Z" fill="currentColor"></path></svg>
        </button>
        <button
          className='relative flex justify-center items-center w-11 h-11 p-1 rounded text-[rgb(26,26,26)] '>
          <svg className='w-4 h-4 stroke-[.8]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" role="img"><path fillRule="evenodd" clipRule="evenodd" d="M0 5C0 4.44772 0.447715 4 1 4H15C15.5523 4 16 4.44772 16 5V19C16 19.5523 15.5523 20 15 20H1C0.447715 20 0 19.5523 0 19V5ZM2 6V18H14V6H2Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M4.1543 1C4.1543 0.447715 4.60201 0 5.1543 0H17.6163C18.2486 0 18.855 0.251171 19.302 0.698257C19.7491 1.14534 20.0003 1.75172 20.0003 2.384V14.846C20.0003 15.3983 19.5526 15.846 19.0003 15.846C18.448 15.846 18.0003 15.3983 18.0003 14.846V2.384C18.0003 2.28216 17.9598 2.18449 17.8878 2.11247C17.8158 2.04046 17.7181 2 17.6163 2H5.1543C4.60201 2 4.1543 1.55228 4.1543 1Z" fill="currentColor"></path></svg>
        </button>
      </div>
    </div>
  )
}

export default Days