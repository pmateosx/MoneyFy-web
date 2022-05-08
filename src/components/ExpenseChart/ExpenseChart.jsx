import React from "react";
import ReactApexChart from "react-apexcharts";
import './ExpenseChart.scss'
import dayjs from "dayjs";

class ExpenseChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'series2',
          data: [31, 40, 28, 51, 42, 109, 100],
          color: '#FFBC3C'
        }],
        options: {
          chart: {
            toolbar: {
                show: false
                },
              zoom: {
                enabled: false,
              },
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            labels: {
              format: 'dd/MM',
            },
            type: 'datetime',
            categories: [
              dayjs(this.props.userInfo?.createdAt).format('YYYY-MM-DDTHH:mm:ssZ[Z]'),
            ]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
        },
      
      
      };
    }

    getUserExpense(){
      const userExpense = this.props?.userInfo?.expense
      return userExpense?.map(element => [element.createdAt, element.amount])
    }

    componentDidMount(){
      this.setState({
        series: [{
          name: "Expense",
          data: this.getUserExpense()
        }]
      })
    }

    componentDidUpdate(prevProps) {
      if (this.props?.userInfo?.expense !== prevProps.userInfo?.expense ) {
        this.setState({
          series: [{
            name: "Expense",
            data: this.getUserExpense()
          }]
        })
      }
    }

    render() {
      return (
        <div id="chart">
            <ReactApexChart 
            options={this.state.options} 
            series={this.state.series} 
            type="area" height={300} />
        </div>
      )
    }
  }



export default ExpenseChart