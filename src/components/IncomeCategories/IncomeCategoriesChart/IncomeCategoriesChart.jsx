import React from "react";
import ReactApexChart from "react-apexcharts";
class IncomeCategoriesChart extends React.Component {
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
        labels: [ 'Uncategorized', 'Persona sale', 'Investment benefits', 'Salary', 'Personal work' ],
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

    getCategories(){
    let sumUncategorized = 0
    let sumPersonalSale = 0
    let sumInvestmentBenefits = 0 
    let sumSalary = 0
    let sumPersonalWork = 0
      
    for (let i = 0; i < this.props?.userInfo?.income.length; i++) {
      const uncategorized = []
      const personalSale = []
      const investmentBenefits = []
      const salary = []
      const personalWork = []
      
      if(this.props?.userInfo.income[i].category === 'uncategorized') {
        uncategorized.push(this.props?.userInfo.income[i].amount)
        
        for (let j = 0; j < uncategorized.length; j++) {
          sumUncategorized += uncategorized[j]
        }
      }
      if(this.props?.userInfo.income[i].category === 'personal sale') {
        personalSale.push(this.props?.userInfo.income[i].amount)
        
        for (let k = 0; k < personalSale.length; k++) {
          sumPersonalSale += personalSale[k]
        }
      } 
      if(this.props?.userInfo.income[i].category === 'investment benefits') {
        investmentBenefits.push(this.props?.userInfo.income[i].amount)
        
        for (let l = 0; l < investmentBenefits.length; l++) {
          sumInvestmentBenefits += investmentBenefits[l]
        }
      }
      if(this.props?.userInfo.income[i].category === 'salary') {
        salary.push(this.props?.userInfo.income[i].amount)
        
        for (let m = 0; m < salary.length; m++) {
          sumSalary += salary[m]
        }
      }
      if(this.props?.userInfo.income[i].category === 'personal work') {
        personalWork.push(this.props?.userInfo.income[i].amount)
        
        for (let n = 0; n < personalWork.length; n++) {
          sumPersonalWork += personalWork[n]
        }
      }
        } 

      return [ sumUncategorized, sumPersonalSale, sumInvestmentBenefits, sumSalary, sumPersonalWork ]
      
  }  

    render() {
      return (
        <div id="chart" style={{position: "absolute", left: "90px", top: "150px"}}>
            <ReactApexChart 
            options={this.state.options} 
            series={this.getCategories()} 
            type="donut" height='270' width="800"/>
        </div>
      );
    }
  }

  export default IncomeCategoriesChart