import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2'

import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
         console.log(dailyData)
        fetchAPI();
    });

    const lineChart = (
        dailyData.length  
        ? (
          <Line
        data={{
            lables: dailyData.map(({date}) => date),
            datasets: [{
                data: dailyData.map(({confirmed})=>confirmed),
                lable: 'Infected',
                borderColor: '#3333ff',
                fill: true,
            }, { 
                data: dailyData.map(({confirmed})=>confirmed),
                lable: 'Deaths',
                borderColor: 'red',
                backroundColor: 'rbga(255, 0 , 0 ,0.5)',
                fill: true,

            }], 
        }}
        />) : null
    );
    
    
    return (
        <div className={styles.container}>
            {lineChart}

        </div>
    )
}

export default Chart;