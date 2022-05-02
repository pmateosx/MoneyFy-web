import React from "react";
import ReactApexChart from "react-apexcharts";
import './BalanceChart.scss'
import dayjs from "dayjs"

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
                this.getCurrentDate(),
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
            show: true,
            format: "dd/MMM/yy",
          },
        },
      },
    };
  }
  
  getUserCreateTime() {
    return dayjs(this.props.userInfo?.createdAt).format('DD/MMM/YY')
  }

  getCurrentDate() {
    const date = new Date();
    return dayjs(date).format('DD/MMM/YY')
  }

  render() {
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


