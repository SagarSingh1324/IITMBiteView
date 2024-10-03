import { useState } from 'react';

import GradMonoBtn from '@/components/Buttons/GradMonoBtn';
import GradDuoBtn from '@/components/Buttons/GradDuoBtn';
import PurplePillBtn from '@/components/Buttons/PurplePillBtn';
import YellowPillBtn from '@/components/Buttons/YellowPillBtn';

import Card from './Card';

export default function HomepageButtons() {
    const [messType, setMessType] = useState('veg');
    const [messRegion, setMessRegion] = useState('north');
    const [messWeek, setMessWeek] = useState('even');

    const buttonDataInstance = {
        messTypeIf: messType,
        messRegionIf: messRegion,
        messWeekIf: messWeek,
    };

    return (
        <div className="p-5 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex gap-4 mb-4">
                <GradMonoBtn 
                    className="from-green-400 via-green-500 to-green-600 focus:ring-green-300 dark:focus:ring-green-800 transition duration-200 ease-in-out" 
                    onClick={() => setMessType('veg')}
                >
                    Veg
                </GradMonoBtn>

                <GradMonoBtn 
                    className="from-red-400 via-red-500 to-red-600 focus:ring-red-300 dark:focus:ring-red-800 transition duration-200 ease-in-out" 
                    onClick={() => setMessType('non_veg')}
                >
                    Non Veg
                </GradMonoBtn>
            </div>

            <div className="flex gap-4 mb-4">
                <GradDuoBtn 
                    className="text-gray-900 from-teal-200 to-lime-200 hover:from-teal-300 hover:to-lime-300 focus:ring-lime-200 dark:focus:ring-teal-700 transition duration-200 ease-in-out" 
                    onClick={() => setMessRegion('north')}
                >
                    North
                </GradDuoBtn>

                <GradDuoBtn 
                    className="text-gray-900 from-teal-200 to-lime-200 hover:from-teal-300 hover:to-lime-300 focus:ring-lime-200 dark:focus:ring-teal-700 transition duration-200 ease-in-out" 
                    onClick={() => setMessRegion('south')}
                >
                    South
                </GradDuoBtn>
            </div>

            <div className="flex gap-4">
                <PurplePillBtn 
                    className="transition duration-200 ease-in-out" 
                    onClick={() => setMessWeek('even')}
                >
                    Even
                </PurplePillBtn>

                <YellowPillBtn 
                    className="transition duration-200 ease-in-out" 
                    onClick={() => setMessWeek('odd')}
                >
                    Odd
                </YellowPillBtn>
            </div>

            <div className="mt-5">
                <Card data={buttonDataInstance} />
            </div>
        </div>
    );
}



