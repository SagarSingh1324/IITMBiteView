'use client'

// import React, { useState } from 'react';

//import Card from '@/components/Card';
import Countdown from '@/components/Countdown';
//import Macros from './macros/page';
import HomepageButtons from '@/components/homepageButtons';

export interface mealData{
  strings: string[];
}


export default function Homepage() 
{
  
  return (
    <div className='flex flex-col p-10 gap-10 items-center justify-center min-h-screen bg-cover bg-center bg-fixed'  style={{ backgroundImage: "url('/IITMBiteView/bgImage.jpg')" }}>

      <div className='w-full max-w-md text-center'> 
        <h1 className='text-3xl font-extrabold text-gray-800'> Welcome, choose your mess: </h1>
      </div>

      <div className= 'w-full max-w-md'>
        <HomepageButtons />
      </div>

      <div className='w-full max-w-md text-center'>
        <Countdown />
      </div>

      {/* <div className=" flex flex-row gap-2 ">
            <Link href={"./mails"} className="border border-black">
                Get reminder e-mails for this meal
            </Link>
            <Link href={"./macros"} className="border border-black">
                Get macros estimate of this meal 
            </Link>
      </div> */}

    </div>
  );
};

