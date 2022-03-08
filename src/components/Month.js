import React from 'react'
import Day from './Day';


function Month({ month }) {
    return (
        <div className='grid grid-cols-7 grid-rows-5'>
            {month.map((row, i) => {
                return <React.Fragment key={i}>
                    {row.map((day, idx) => {
                        return <Day className="flex-1" day={day} key={idx} rowIdx = {idx}/>
                    })}
                </React.Fragment>
            })}
        </div>
    )
}

export default Month