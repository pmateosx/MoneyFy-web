import React from "react";
import ReactApexChart from "react-apexcharts";
import './ChartExpenseIncome.scss'
import dayjs from "dayjs"

// filter con una resta de la fecha para meterlo  
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Expenses",
          data: this.props?.userInfo?.expense.map((expense) => expense.amount).reverse(),
        },
        {
          name: "Incomes",
          data: this.props?.userInfo?.income.map(income => income.amount).reverse() ,
        }
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
          categories: 
           /*  dayjs(this.props.userInfo?.createdAt).format('D MMM'), */
            this.props?.userInfo?.income.map(income => dayjs(income.createdAt).format('D MMM')).reverse()
           /*  dayjs(this.props.userInfo?.createdAt).format('MMM'), */
           /*  "Mar",
            "Apr",
            "May", */
/*             "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec", */
          ,
        },
        yaxis: {
          show: true,
          tickAmount: 6,
          min: 0,
          max: function(max) { return max },
          labels: {
            formatter: function(val) {
              return val.toFixed(0);
            }
          }
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

  getUserExpense(){
    const userExpense = this.props?.userInfo?.expense
    return userExpense?.map(element => [element.createdAt, element.amount])
  }



  render() {
    return (
      <div id="chart" className="Chart">
        <h2>Your balance! 😎</h2>
        <ReactApexChart
          options= {this.state.options}
          series= {this.state.series}
          type="bar"
          height={300}
        />
      </div>
    );
  }
}

export default ApexChart