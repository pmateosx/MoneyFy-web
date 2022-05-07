import React from "react";
import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";

class GoalProgressChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [],
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
          labels: [],
        },
      };
    }

    componentDidMount(){
      this.setState({
        series: [this.calculatePercentage()],
      })

      this.setState({
        options: {
          ...this.state.options,
          labels: [this.getLabel()],
        }
      })
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props.currentMainGoal.id !== prevProps.currentMainGoal.id) {
        this.setState({
          series: [this.calculatePercentage()]
        })
        this.setState({
          options: {
            ...this.state.options,
            labels: [this.getLabel()],
          }
        })
      }
    }
 
    getLabel(){
      return this.props?.currentMainGoal?.name
    }
    calculatePercentage() {
      const now = dayjs()
      const mainGoalDate = dayjs(this.props?.currentMainGoal?.createdAt)

      const moneyToGoal = this.props?.currentMainGoal?.amount
      const goalCost = this.props?.currentMainGoal?.goalAmount

      const differenceDates = now.diff(mainGoalDate, 'M')
      const alreadySaved = moneyToGoal * differenceDates
      let percent = (alreadySaved / goalCost) * 100


      const amountInMonth = differenceDates * moneyToGoal
      const diff = goalCost - amountInMonth
      
      if (diff <= 0){
         return percent = 100
      }
      return percent.toFixed(2)
    }


    render() {
      return (
        <div id="chart">
            <ReactApexChart 
            options={this.state.options} 
            series={this.state.series} 
            type="radialBar" height={390} />
        </div>
        )
    }
  }

export default GoalProgressChart