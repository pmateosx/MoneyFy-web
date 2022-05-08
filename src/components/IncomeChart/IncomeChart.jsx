import React from "react";
import ReactApexChart from "react-apexcharts";
import './IncomeChart.scss'
import dayjs from "dayjs";

class IncomeChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [{
          name: 'series1',
          data: [31, 40, 28, 51, 42, 109, 100]
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

    getUserIncomes(){
      const userIncomes = this.props?.userInfo?.income
      return userIncomes?.map(element => [element.createdAt, element.amount])
    }

    componentDidMount(){
      this.setState({
        series: [{
          name: "Income",
          data: this.getUserIncomes()
        }]
      })
    }

    componentDidUpdate(prevProps) {
      if (this.props?.userInfo?.income !== prevProps.userInfo?.income ) {
        this.setState({
          series: [{
            name: "Income",
            data: this.getUserIncomes()
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



export default IncomeChart