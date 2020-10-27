import React from 'react';
import './infoCard.scss'



const InfoCard = ({title,amount}) => {
    return ( 
        <div className="info-card">
            <div className='details'>
                <p className="title">{title}</p>
                <p className="amount">{amount}</p>
            </div>
        </div>
     );
}
 
export default InfoCard
