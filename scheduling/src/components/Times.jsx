import React, { useState } from 'react';

const Times = ({getData}) => {
  const handleClick = (time) => {
    getData(time)
  };

  return (
    <div className='w-[132px] max-h-[204px] mt-2 py-2 overflow-y-scroll h-[200px] left-0  absolute bg-white z-10 border rounded-[6px] shadow-[0 1px 5px rgba(0,74,16,.15)] bg-[rgba(255,255,255,1)]'>
      {[...Array(24 * 4)].map((_, index) => {
        const totalMinutes = index * 15;
        const tempHours = Math.floor(totalMinutes / 60) % 12 || 12;
        const hours = tempHours <10? `0${tempHours}`: tempHours;
        const tempMinutes = totalMinutes % 60;
        const minutes = tempMinutes <10? `0${tempMinutes}`: tempMinutes
        const ampm = Math.floor(totalMinutes / 60) < 12 ? 'am' : 'pm';
        const formattedTime = `${hours}:${minutes}${ampm}`;


        return (
          <button key={formattedTime}
          onClick={() => handleClick(formattedTime)}
          className='w-full py-2 px-4 text-[12px] leading-[22px] text-start'>
            {formattedTime}
          </button>
        );
      })}
    </div>
  );
};

export default Times;
