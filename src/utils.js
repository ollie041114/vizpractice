import dayjs from 'dayjs';

export function getMonth(month = dayjs().month()) { // if nothing passed, will be present moment
    const year = dayjs().year() 
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
    // First day of the current month and day (Monday, Tuesday, etc.)
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            currentMonthCount++; // increase 
            return dayjs(new Date(year, month, currentMonthCount));
        })
    });
    return daysMatrix; 
    // This array will have all the day of the weeks
}