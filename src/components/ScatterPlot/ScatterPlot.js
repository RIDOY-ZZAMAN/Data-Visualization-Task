import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

const ScatterPlot = () => {
    const [wine, setWine] = useState([]);
    let ColorIntensity = [];
    let Hue = [];

    useEffect(() => {
        fetch('./wine.json')
            .then(res => res.json())
            .then(data => setWine(data))

    }, []);

    wine.map(item => ColorIntensity.push(item.ColorIntensity));
    wine.map(item => Hue.push(item.Hue));


    var option;

    option = {
        xAxis: {},
        yAxis: {},
        series: [
            {
                symbolSize: 20,
                data: [
                    ...ColorIntensity, ...Hue

                ],
                type: 'scatter'
            }
        ]
    };


    return (
        <div>
            <h2>Scatter Plot</h2>
            <ReactECharts option={option} />
        </div>
    );
};

export default ScatterPlot;