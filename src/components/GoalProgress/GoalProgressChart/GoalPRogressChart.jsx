import React from "react";
import ReactApexChart from "react-apexcharts";

class GoalProgressChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [90],
        options: {
          chart: {
            height: 400,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70%',
              }
            },
          },
          labels: ['Goal'],
        },
      };
    }
    render() {
      return (
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={390} />
        </div>
        )
    }
  }

export default GoalProgressChart