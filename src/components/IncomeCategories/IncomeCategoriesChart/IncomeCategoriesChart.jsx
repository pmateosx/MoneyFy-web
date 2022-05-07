import React from "react";
import ReactApexChart from "react-apexcharts";
class IncomeCategoriesChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        series: [80, 55, 41, 17, 15],
        options: {
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
      // Recorrer los goals y pusear las categorias
/*       const uncategorized = this.props?.userInfo?.income?.filter(item => item.category === 'uncategorized' ? item.amount : ''
     )
      console.log('uncategory -> ', uncategorized); */
 /*      const personal = this.props?.userInfo?.income?.filter(item => item.category === 'personal')
      console.log(personal); */
      
      const uncategorized = []
      let sumUncategorized = 0
      
      const personalSale = []
      let sumPersonalSale = 0
      
      for (let i = 0; i < this.props?.userInfo?.income.length; i++) {
        if(this.props?.userInfo?.income[i]?.category === 'uncategorized') {
          uncategorized.push(this.props?.userInfo?.income[i]?.amount)
          for (let j = 0; j < uncategorized.length; j++) {
              sumUncategorized += uncategorized[j]
            }
        }
        if(this.props?.userInfo?.income[i]?.category === 'personal sale') {
          personalSale.push(this.props?.userInfo?.income[i]?.amount)
          for (let k = 0; k < personalSale.length; k++) {
              sumPersonalSale += personalSale[k]
            }
        }

        //comprobar si esto va dentro del bucle o fuera
        //this.state.series = [sumUncategorized, sumPersonalSale,..., resto de sumas de las categorías]
      }
    }

    render() {
      this.getCategories()
      return (
        <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height='270' width="270"/>
        </div>
      );
    }
  }

  export default IncomeCategoriesChart