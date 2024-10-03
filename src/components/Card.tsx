//Card.tsx

'use client'

import { useState } from 'react';
import messdata from '../messdata/messdata';
//import Macros from '@/app/macros/page';

interface buttonDataProps{
  messTypeIf: string,
  messRegionIf: string,
  messWeekIf: string,
}

const currentDate = new Date();

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = weekdays[currentDate.getDay()];

function getNextMealType(): string {

  const currentDate = new Date();

  const hours = currentDate.getHours();

  if( hours<9 )
  {
    return 'bf';
  }
  else if( hours<10 )
  {
    return 'ebf';
  }
  else if( hours<14 )
  {
    return 'lunch';
  }
  else if( hours<17 )
  {
    return 'snacks';
  }
  else if( hours<21 )
  {
    return 'dinner';
  }
  else
  {
    return 'bf';
  }

};

export default function Card(props: {data:buttonDataProps}) {

  // const [mealData, setMealData] = useState([""]);

  // const mealDataInstance = {
  //   stringsArray:mealData,
  // }

  function getNextMeal (): string[] {

    if( getNextMealType() == 'ebf' )
    {
      return ['tea', 'milk & coffee', 'bread', 'butter & jam'];
    }
    else if( getNextMealType() == 'snacks' )
    {
      return ['tea', 'milk & coffee', 'biscuit', 'rusk'];
    }
    else
    {
  
      let var1 = props.data.messTypeIf as keyof typeof messdata;
      let var2 = props.data.messRegionIf as string;
      let var3 = props.data.messWeekIf as string;
      let var4 = (var2+'_menu_'+var3) as keyof typeof messdata.veg;
      let var5 = currentDay as keyof typeof messdata.veg.north_menu_odd;
      let var6 = getNextMealType() as keyof typeof messdata.veg.north_menu_odd.Saturday;
  
      return messdata[var1][var4][var5][var6];
  
    }
  
  };

  const nextMeal = getNextMeal();

  // setMealData(nextMeal);

  return (
    <div className="p-5 bg-gray-100 rounded-lg shadow-md">
        <ul className="list-disc pl-5 space-y-3 border border-gray-300 rounded-lg bg-white shadow-inner">
            {nextMeal.map((item, index)=>(
                <li key={index} className="text-xl text-gray-800 hover:text-blue-600 transition duration-200 ease-in-out">{item}</li>
            ))
            }
        </ul>
        {/* <Macros data={mealDataInstance} /> */}
    </div>
    
  );
};
