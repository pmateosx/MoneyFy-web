import React from "react";
import ReactApexChart from "react-apexcharts";

class BalanceChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      options: {
        chart: {
            width: '100%',
            toolbar: false,
            height: 100,
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
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
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

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={100}
        />
      </div>
    );
  }
}

export default BalanceChart