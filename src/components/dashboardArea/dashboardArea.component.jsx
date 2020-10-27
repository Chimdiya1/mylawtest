import React, { useState, useEffect } from 'react';

import './dashboardArea.scss';
import DateSelect from '../dateSelect/dateSelect.component';
import Graph from '../graph/graph.component';
import InfoCard from '../infoCard/infoCard.component';
import Spinner from '../../components/spinner/spinner.component';
import Table from '../table/table.component';


const getDate = () => {
    let today = new Date();
    return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
}

const DashboardArea = () => {
    const [month, setMonth] = useState('October');
    const [data, setData] = useState({});
    const [cardDetails, setCardDetails] = useState([]);
    const [lawyers, setLawyers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    //setting API URL depending on environment
    let API_URL
    if (process.env.NODE_ENV === 'development') {
        API_URL = 'http://localhost:3001'
    } else if (process.env.NODE_ENV === 'production') {
        API_URL = 'https://my-json-server.typicode.com/Chimdiya1/lawlegaldata'
    }

    
    //Fetching all the data needed
    useEffect(() => {
        setLoading(true);
        //fetch graph data
        fetch(`${API_URL}/data`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                //fetch card data
                return fetch(`${API_URL}/cardDetails`)
                    .then((response) => response.json())
                    .then((details) => {
                        setCardDetails(details);
                        //fetch lawyers data
                        return fetch(`${API_URL}/lawyers`)
                        .then((response) => response.json())
                        .then((details) => {
                            setLawyers(details);
                            setLoading(false);
                        })
                    });
            });
    }, []);

    //conditionally rendering the Spinner
    if (loading) {
        return (
            <div className="load">
                <Spinner/>
            </div>
        );
    } else {
        return (
            <div className='dashboard-area'>
                <div className="info-cards-container">
                    {
                        cardDetails.map(({ title, amount }) => <InfoCard key={title} title={title} amount={amount} />)
                    }
                </div>
                <div className="graph-area">
                    <div className='graphBody-header'>
                        <h4>Today: {getDate()}</h4>
                        <DateSelect setMonth={setMonth} />
                    </div>
                    <Graph series={data[month]} />
                </div>
                <h3>Requests Per Lawyer</h3>
                <Table lawyers={lawyers} />
            </div>
        )
    };
}
 
export default DashboardArea;