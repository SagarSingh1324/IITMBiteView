// Breakfast:      6:45  - 9:30    7-9    
// *Extended breakfast: 9:30  - 10:15  only with Bread, Butter and Jam    9-10
// Lunch      :     11:45  - 2:15   12-2
// Snacks    :      16:00  - 17:35   4-5
// Dinner     :      18:45  - 21:25  7-9

'use client';

function padTo2Digits(num: number): string {
    return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds: number): string {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
}

export default function Countdown() {
    const currentDate = new Date();
    const tempDate = new Date();

    let message;
    let msBetweenDates;

    if (currentDate.getHours() < 7) {
        tempDate.setHours(7, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Time till breakfast: ${convertMsToTime(msBetweenDates)}`;
    } else if (currentDate.getHours() >= 7 && currentDate.getHours() < 9) {
        tempDate.setHours(9, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Breakfast is live! ${convertMsToTime(msBetweenDates)} time till breakfast ends.`;
    } else if (currentDate.getHours() >= 9 && currentDate.getHours() < 10) {
        tempDate.setHours(10, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Extended breakfast is live! ${convertMsToTime(msBetweenDates)} time till breakfast ends.`;
    } else if (currentDate.getHours() >= 10 && currentDate.getHours() < 12) {
        tempDate.setHours(12, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Time till lunch: ${convertMsToTime(msBetweenDates)}`;
    } else if (currentDate.getHours() >= 12 && currentDate.getHours() < 14) {
        tempDate.setHours(14, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Lunch is live! ${convertMsToTime(msBetweenDates)} time till lunch ends.`;
    } else if (currentDate.getHours() >= 14 && currentDate.getHours() < 16) {
        tempDate.setHours(16, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Time till snack: ${convertMsToTime(msBetweenDates)}`;
    } else if (currentDate.getHours() >= 16 && currentDate.getHours() < 17) {
        tempDate.setHours(17, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Snacks are live! ${convertMsToTime(msBetweenDates)} time till snacks end.`;
    } else if (currentDate.getHours() >= 17 && currentDate.getHours() < 19) {
        tempDate.setHours(19, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Time till dinner: ${convertMsToTime(msBetweenDates)}`;
    } else if (currentDate.getHours() >= 19 && currentDate.getHours() < 21) {
        tempDate.setHours(21, 0, 0);
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Dinner is live! ${convertMsToTime(msBetweenDates)} time till dinner ends.`;
    } else {
        tempDate.setDate(tempDate.getDate() + 1); 
        tempDate.setHours(7, 0, 0); 
        msBetweenDates = tempDate.getTime() - currentDate.getTime();
        message = `Time till breakfast tomorrow: ${convertMsToTime(msBetweenDates)}`;
    }

    return (
        <div className="flex flex-col items-center justify-center p-5 bg-blue-50 rounded-lg shadow-md border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Meal Countdown</h2>
            <p className="text-lg text-gray-700 text-center">{message}</p>
        </div>
    );
}
