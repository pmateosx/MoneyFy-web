import React from "react";
import ReactApexChart from "react-apexcharts";

class ExpenseCategoriesChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [],
        options: {
          colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#00B1F2', '#F9A3A4', '#C7F464', '#F86624'],
          plotOptions: {
            pie: {
              donut: {
                size: '65%'
              }
            }
          },
          chart: {
            width: '100%',
            toolbar: {
                show: false
                },
            type: 'donut',
          },
          labels: [ 'Shopping', 'Food', 'Entertainment', 'House', 'Insurance', 'Transportation', 'Personal', 'Uncategorized' ],
          legend: {
            show: true,
            position: 'left',
            floating: true,
            offsetX: -30,
            offsetY: 50,
            fontSize: 15,            
        },
          dataLabels: {
            enabled: false
          },
          tooltip: {
            enabled: true,
            y: {
              formatter: function(val){
                return val + "€"
              },
              title:{
                formatter: function(seriesName){
                  return seriesName
                }
              }
            },
   
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: '100%',
              },
            }
          }]
        },
      
      };
    }

    getCategories() {
    let sumShopping = 0
    let sumFood = 0
    let sumEntertainment = 0
    let sumHouse = 0
    let sumInsurance = 0
    let sumTransportation = 0
    let sumPersonal = 0
    let sumUncategorized = 0
    
    for (let i = 0; i < this.props?.userInfo?.expense.length; i++){
      let shopping = []
      let food = []
      let entertainment = []
      let house = []
      let insurance = []
      let transportation = []
      let personal = []
      let uncategorized = []
      
      if(this.props?.userInfo.expense[i].category === 'shopping') {
        shopping.push(this.props?.userInfo.expense[i].amount)
      
        for (let j = 0; j < shopping.length; j++) {
          sumShopping += shopping[j]
        }
      }
      if(this.props?.userInfo.expense[i].category === 'food') {
        food.push(this.props?.userInfo.expense[i].amount)
      
        for (let k = 0; k < food.length; k++) {
          sumFood += food[k]
        }
      }
      if(this.props?.userInfo.expense[i].category === 'entertainment') {
        entertainment.push(this.props?.userInfo.expense[i].amount)
      
        for (let l = 0; l < entertainment.length; l++) {
          sumEntertainment += entertainment[l]
        }
      }
      if(this.props?.userInfo.expense[i].category === 'house') {
        house.push(this.props?.userInfo.expense[i].amount)
      
        for (let m = 0; m < house.length; m++) {
          sumHouse += house[m]
        }
      }
      if(this.props?.userInfo.expense[i].category === 'insurance') {
        insurance.push(this.props?.userInfo.expense[i].amount)
      
        for (let n = 0; n < insurance.length; n++) {
          sumInsurance += insurance[n]
        }
      }
      if(this.props?.userInfo.expense[i].category === 'transportation') {
        transportation.push(this.props?.userInfo.expense[i].amount)
      
        for (let o = 0; o < transportation.length; o++) {
          sumTransportation += transportation[o]
        }
      }
      if(this.props?.userInfo.expense[i].category === 'personal') {
        personal.push(this.props?.userInfo.expense[i].amount)
      
        for (let p = 0; p < personal.length; p++) {
          sumPersonal += personal[p]
        }
      }
      if(this.props?.userInfo.expense[i].category === 'uncategorized') {
        uncategorized.push(this.props?.userInfo.expense[i].amount)
      
      for (let q = 0; q < uncategorized.length; q++) {
        sumUncategorized += uncategorized[q]
      }
    }
    }
     return [ sumShopping, sumFood, sumEntertainment, sumHouse, sumInsurance, sumTransportation, sumPersonal, sumUncategorized ] 
    }  
/* 
    getLabel(){
      return this.props?.categoriesUsed
    }
 
    componentDidMount(){
      this.setState({
        options: {
          ...this.state.options,
          legend: {
              show: true,
              position: 'left',
              floating: true,
              customLegendItems: this.getLabel(),
              offsetX: -40,
              offsetY: 50            
          },
        }
      })
    } 

    componentDidUpdate(prevProps) {
      if (this.props.categoriesUsed !== prevProps.categoriesUsed) {
        
        this.setState({
          options: {
            ...this.state.options,
            legend: {
                show: true,
                position: 'left',
                floating: true,
                customLegendItems: this.getLabel(),
                offsetX: -40,
                offsetY: 50            
            },
          }
        })
      }
    }  */
   
    render() {
      return (
        <div id="chart" style={{position: 'absolute', left: '260px', top: '125px'}}>
            <ReactApexChart 
            options={this.state.options} 
            series={this.getCategories()} 
            type="donut" height='320' width="800"/>
        </div>
      );
    }
  }

  export default ExpenseCategoriesChart