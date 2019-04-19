import React from "react";
// CSS Style Import
import "../css/graph.css";
// ChartJS Import
import { Line } from "react-chartjs-2";

const formatChartData = data => {
  return {
    labels: data.dataset.timeStamps,
    datasets: [
      {
        label: data.name,
        data: data.dataset.viewCounts,
        backgroundColor: "#b19dd81f",
        borderColor: "#4b367c",
        pointBorderColor: "#4b367c1c",
        pointBorderWidth: 0.5,
        pointHoverBackgroundColor: "#FFFFFF",
        pointHoverBorderColor: "rgb(199,196,208)",
        pointHoverBorderWidth: 0.2,
        pointHoverRadius: 3.5
      }
    ]
  };
};

const Graph = props => {
  return (
    <Line
      data={formatChartData(props)}
      options={{
        label: {
          xAxisID: ""
        },
        elements: {
          point: {
            // pointStyle: 'cirlce',
            // pointRadius: 1,
            pointBackgroundColor: "red",
            pointBorderColor: "yellow"
            // pointBorderWidth: 5,
          },
          line: {
            //   tension: 0.2,
            //   borderWidth: 0.5,
            //   backgroundColor: '#4b367c',
            borderColor: "#4b367c"
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        // maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          // enabled: false
        }
      }}
    />
  );
};

export default Graph;