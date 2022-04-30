import React from "react";
import ReactApexChart from "react-apexcharts";
import './ChartExpenseIncome.scss'

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Expenses",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Incomes",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false
            }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            borderRadius: 6,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        fill: {
          opacity: 1,
        },
        legend: {
            show: false,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="Chart">
        <h2>Your balance! 😎</h2>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={300}
        />
      </div>
    );
  }
}


export default ApexChart