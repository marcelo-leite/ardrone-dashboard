
import { Color } from "@antv/attr";
import React, { Component} from "react";
import { Line } from 'react-chartjs-2';


const ChartContainer = (props) => {

    const data = {
        labels: [0,1,2,3,4,5,6,7],
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

    return(
        <Line data={data} options={options} height="100%"/>

    );
   

}

export default ChartContainer;