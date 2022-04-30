import ApexChart from '../../components/ChartExpenseIncome/ChartExpenseIncome'
import ExpensesModule from '../../components/ExpensesModule/ExpensesModule'
import Greetings from '../../components/Greetings/Greetings'
import './Dashboard.scss'

const Dashboard = () => {
    return(
        <div className='container Dashboard'>
            <div className='row'>
                <div className='col-lg-5 module'>
                    <div>
                        <Greetings />
                        <div className='col-lg-6 module'>
                            <ExpensesModule />
                        </div>
                        <div className='col-lg-6 module'>
                            <ExpensesModule />
                        </div>
                    </div>

                </div>
                <div className='col-lg-6 module'>
                    <ApexChart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard