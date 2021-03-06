
import { Color } from "@antv/attr";
import React, { Component, useRef} from "react";
import { Line, defaults } from 'react-chartjs-2';


const ChartContainer = (props) => {
    const ref = useRef();

    const data = {
        labels: Array.from(Array(props.serie.ax.length).keys()),
        datasets: [
          {
            label: 'Ax',
            data: props.serie.ax,
            fill: false,
            backgroundColor: "#acff2e",
            borderColor: '#abff2e9b',
            tension: 0.4
          },
          {
            label: 'Ay',
            data: props.serie.ay,
            fill: false,
            backgroundColor: "#2f00ff",
            borderColor: '#2f00ff81',
            tension: 0.4
          },
          {
            label: 'Az',
            data: props.serie.az,
            fill: false,
            backgroundColor: "red",
            borderColor: '#ff000088',
            tension: 0.4
          }
        ],
      };

    const options = {
        animation: { duration: 0 },
        responsive: true,
        plugins:{
          title:{
            fontColor: "#ffffff",
            display: false
          },
          legend: {
           display: true,
          },
          tooltip:{
            enabled: false
          }
        },
        scales: {
            yAxes: [
            {   
        
                
                gridLines: {
                  drawOnArea: false,
                },
                ticks: {
                  beginAtZero: true
                }
            }
            ]
        },
    };
    
    defaults.animation = false;
    defaults.color = "#ffffff";
    defaults.scale.grid.display = false;
    defaults.datasets.line.pointRadius = 0;

    return(
        <Line data={data} options={options} ref={ref} height="100%"/>

    );
   

}

export default ChartContainer;