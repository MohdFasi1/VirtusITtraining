import React, { useEffect, useState } from 'react'
import Days from './Days'
import { ScheduleContext } from './contexts/ScheduleContext'
const Layout = () => {
  const [schedule,setSchedule] = useState([])
  const [refresh,setRefresh] = useState(false)
    useEffect(()=>{
      console.log('refreshed')
      setSchedule([
        {day: "sun", times:
        JSON.parse(localStorage.getItem('sun')).length>0?
        JSON.parse(localStorage.getItem('sun')) : [ 
          {start: "09:00am", end: "12:00pm"}
        ]},
        {day: "mon", times:
        JSON.parse(localStorage.getItem('mon')).length>0?
        JSON.parse(localStorage.getItem('mon')) : [ 
          {start: "09:00am", end: "12:00pm"}
        ]},
        {day: "tue", times:
        JSON.parse(localStorage.getItem('tue')).length>0?
        JSON.parse(localStorage.getItem('tue')) : [ 
          {start: "09:00am", end: "12:00pm"}
        ]},
        {day: "wed", times:
        JSON.parse(localStorage.getItem('wed')).length>0?
        JSON.parse(localStorage.getItem('wed')) : [ 
          {start: "09:00am", end: "12:00pm"}
        ]},
        {day: "thu", times: 
        JSON.parse(localStorage.getItem('thu')).length>0?
        JSON.parse(localStorage.getItem('thu')) : [ 
          {start: "09:00am", end: "12:00pm"}
        ]},
        {day: "fri", times: 
        JSON.parse(localStorage.getItem('fri')).length>0?
        JSON.parse(localStorage.getItem('fri')) : [ 
          {start: "09:00am", end: "12:00pm"}
        ]},
        {day: "sat", times: 
        JSON.parse(localStorage.getItem('sat')).length>0?
        JSON.parse(localStorage.getItem('sat')) : [ 
          {start: "09:00am", end: "12:00pm"}
        ]},
    ])
    console.log(schedule)
    
    },[refresh])
    const setRefresher = ()=>{
      setRefresh(!refresh)
    }

    

  return (
    <ScheduleContext.Provider value={{setRefresher,schedule}}>
    <div className=' w-[100%] max-w-[632px] flex flex-col top m-auto bg-white py-6 pr-6 pl-3 overflow-scroll h-'>
        <h1 className='text-[20px] font-bold line leading-[1.4] pl-3'>Weekly hours</h1>
        { schedule.map((e,i)=><Days key={i} data={e} refresh={refresh}/>)}
    </div>
    </ScheduleContext.Provider>
  )
}

export default Layout