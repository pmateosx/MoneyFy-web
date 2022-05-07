import React from "react";
import ReactApexChart from "react-apexcharts";
class IncomeCategoriesChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [],
        options: {
          tootip: {

          },
          chart: {
            toolbar: {
                show: false
                },
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                show: false,
                position: 'bottom'
              }
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
        <div id="chart">
            <ReactApexChart 
            options={this.state.options} 
            series={this.getCategories()} 
            type="donut" height='270' width="270"/>
        </div>
      );
    }
  }

  export default IncomeCategoriesChart