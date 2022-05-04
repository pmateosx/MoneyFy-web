import React from "react";
import ReactApexChart from "react-apexcharts";
import './ChartExpenseIncome.scss'

/* const expensesArr = this.props?.userInfo?.expense.map(expense => expense.amount++)
const incomeArr = this.props?.userInfo?.income.map(income => income.amount++)
console.log(incomeArr); */
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          toolbar: {
            show: false
            },
          noData:{
            text: 'Loading...'
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
              return val + " €";
            },
          },
        },
      },
    };
  }

  componentDidMount(){
    const expensesArr = this.props?.userInfo?.expense.map(expense => expense.amount++ )
    const incomeArr = this.props?.userInfo?.income.map(income => income.amount++ )

    this.setState({
      series: [
        {
          name: "Expenses",
          data: expensesArr,
        },
        {
          name: "Incomes",
          data: incomeArr ,
        }
      ]
    })
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