import React from 'react';
import './dateSelect.scss';

let previousSixMonths = []
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let today = new Date();
let d;
let month;

//function to get previous 6 months
for(let i = 5; i >= 0; i -= 1) {
  d = new Date(today.getFullYear(), today.getMonth() - i, 1);
  month = monthNames[d.getMonth()];
  previousSixMonths.push(month);
}

const DateSelect = ({setMonth}) => {
    return ( 
        <select onChange={(e)=>{setMonth(e.target.value)}} className='date-select' defaultValue={monthNames[today.getMonth()]}>
            {
                previousSixMonths.map((month) => <option value={month} key={month}>{month===monthNames[today.getMonth()] ? 'This Month' : month }</option>)
            }
        </select>
     );
}
 
export default DateSelect;