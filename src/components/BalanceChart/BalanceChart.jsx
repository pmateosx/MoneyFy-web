import React from "react";
import ReactApexChart from "react-apexcharts";
import './BalanceChart.scss'
class BalanceChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [0, props.totalBalance]
        }
      ],
      options: {
        chart: {
          toolbar: false,
          width: '100%',
          type: "area",
        },
        legend: {
            show: false,
        },
        dataLabels: {
            enabled: false,
            show: false,
        },
        stroke: {
          curve: "smooth",
        },
        grid: {
            show: false
        },
        yaxis: {
            show: false,

        },

        xaxis: {
                type: "datetime",
                categories: [
                this.getUserCreateTime(),
                "2022-05-01T17:42:26.595Z",
                ],
                labels: {
                    show: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }
  
  getUserCreateTime() {
    return this.props.userInfo?.createdAt
  }

  getCurrentDate() {
    const today = new Date();
    return today.toISOString()
  }

  render() {
    console.log( "currentTime ->",this.getCurrentDate())
    console.log( "USER Time ->",this.getUserCreateTime())
    return (
      
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={'100'}
        />
      </div>
    );
  }
}

export default BalanceChart


