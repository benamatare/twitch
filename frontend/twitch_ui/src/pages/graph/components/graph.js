import React, { Component } from 'react';
import '../css/graph.css'
import { Line } from 'react-chartjs-2'

export default class Graph extends Component {

  formatViewCounts = views => {
    return views.map(viewCount => {
      return viewCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    })
  };

  formatChartData = () => {
    return {
      labels: this.props.dataset.timeStamps,
      datasets : [{
          label: this.props.name,
          data: this.props.dataset.viewCounts,
          
          backgroundColor: '#b19dd81f',
          borderColor: '#4b367c',

          pointBorderColor: '#4b367c1c',
          pointBorderWidth: 0.5,

          pointHoverBackgroundColor: '#FFFFFF',
          pointHoverBorderColor: 'rgb(199,196,208)',
          pointHoverBorderWidth: 0.2,
          pointHoverRadius: 3.5,
      }]
    }
  };
  
  render() {
    console.log(this.props.dataset.viewCounts)
    return (
      <Line 
        data={this.formatChartData()} 
        options={{
          label: {
            xAxisID: '',
          },
          elements: {
            point: {
              // pointStyle: 'cirlce',
              // pointRadius: 1,
              pointBackgroundColor: 'red',
              pointBorderColor: 'yellow',
              // pointBorderWidth: 5,
            },
            line: {
            //   tension: 0.2,
            //   borderWidth: 0.5,
            //   backgroundColor: '#4b367c',
                borderColor: '#4b367c',
            }
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
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
    )};

};