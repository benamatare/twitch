import React, { PureComponent } from "react";
import Chart from "chart.js";
let myLineChart;

//--Chart Style Options--//
Chart.defaults.global.defaultFontFamily = "'Roboto', sans-serif";
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.point.radius = 2
Chart.defaults.global.elements.point.backgroundColor = 'red'

export default class LineGraph extends PureComponent {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { labels, data, name } = this.props;
    const { height: graphHeight } = myChartRef.canvas;

    // Gradient Styling for the tick marks
    let gradientTicks = myChartRef.createLinearGradient(0, 500, 0, graphHeight);
    gradientTicks.addColorStop(0, "rgba(25, 25, 25, 0.1)");
    gradientTicks.addColorStop(1, "rgba(25, 25, 25, 0.5)");

    // Gradient Styling for the line chart itself
    let gradientLine = myChartRef.createLinearGradient(0, 500, 0, graphHeight);
    gradientLine.addColorStop(0, "rgba(94,60,159,0.23)");
    gradientLine.addColorStop(0.2, "rgba(100,65,165,0.23)");
    gradientLine.addColorStop(0.5, "rgba(106,70,171,0.23)");
    gradientLine.addColorStop(1, "rgba(117,80,182,0.23)");

    if (typeof myLineChart !== "undefined") myLineChart.destroy();

    myLineChart = new Chart(myChartRef, {
      type: "line",
      data: {
        labels:
          labels.length === data.length
            ? labels
            : new Array(data.length).fill("Data"),
        datasets: [
          {
            label: name,
            data: data,
            fill: true,
            borderColor: gradientLine,
            backgroundColor: gradientLine
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              ticks: {
                display: true,
                defaultFontFamily: "'Roboto', sans-serif",
                fontSize: 11
              },
              gridLines: {
                color: gradientTicks,
                drawBorder: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                display: true,
                defaultFontFamily: "'Roboto', sans-serif",
                fontSize: 10,
                padding: 5,
                callback: function(value, index, values) {
                  if (value >= 1000000000) {
                    return (
                      (value / 1000000000).toFixed(1).replace(/\.0$/, "") + "G"
                    );
                  }
                  if (value >= 1000000) {
                    return (
                      (value / 1000000).toFixed(1).replace(/\.0$/, "") + "M"
                    );
                  }
                  if (value >= 1000) {
                    return (value / 1000).toFixed(1).replace(/\.0$/, "") + "K";
                  }
                  return value;
                }
              },
              gridLines: {
                drawTicks: false,
                color: gradientTicks,
                drawBorder: false,
                offsetGridLines: true
              }
            }
          ]
        },
        tooltips: {
          backgroundColor: "#232127",
          borderColor: "hsla(0, 0%, 100%, 0.05)",
          displayColors: false,
          borderWidth: 1,
          xPadding: 10,
          yPadding: 10,
          titleFontSize: 14,
          titleFontFamily: "'Roboto', sans-serif'",
          bodyFontSize: 12,
          bodyFontFamily: "'Roboto', sans-serif'",
          callbacks: {
            label: (tooltipItem, data) => {
              return `${parseInt(tooltipItem.value).toLocaleString()} views`;
            }
          }
        }
      }
    });
  };

  render() {
    return <canvas id="myChart" ref={this.chartRef} />;
  }
}
