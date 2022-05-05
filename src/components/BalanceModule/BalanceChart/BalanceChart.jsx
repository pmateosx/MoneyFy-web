import React from "react";
import ReactApexChart from "react-apexcharts";
import './BalanceChart.scss'
import dayjs from "dayjs"

class BalanceChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
/*             "22/APR/22",
              "03/MAY/22",  */
              dayjs(this.props.userInfo?.createdAt).format('DD/MMM/YY'),
              dayjs().format('DD/MMM/YY'),
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

  render() {
    const series = [
      {
        name: "Balance",
        data: [1, this.props.totalBalance]
      }
    ]

    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={series}
          type="area"
          height={'100'}
        />
      </div>
    );
  }
}

export default BalanceChart


