import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const BarChart = () => {
    const [wine, setWine] = useState([]);
    let Alcohol = [];
    let MalicAcid = [];

    useEffect(() => {
        fetch('./wine.json')
            .then(res => res.json())
            .then(data => setWine(data))

    }, [])
    wine.map(item => Alcohol.push(item.Alcohol));
    wine.map(item => MalicAcid.push(item.MalicAcid));

    var option;
    option = {
        xAxis: {
            type: 'category',
            data: Alcohol
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: MalicAcid,
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }
        ]
    };
    return (
        <div>
            <h2>Bar Chart</h2>
            <ReactECharts option={option} />

        </div>
    );
};

export default BarChart;