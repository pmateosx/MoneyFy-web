import BalanceModule from '../../components/BalanceModule/BalanceModule'
import ApexChart from '../../components/ChartExpenseIncome/ChartExpenseIncome'
import ExpensesModule from '../../components/ExpensesModule/ExpensesModule'
import GoalProgress from '../../components/GoalProgress/GoalProgress'
import Greetings from '../../components/Greetings/Greetings'
import IncomeModule from '../../components/IncomeModule/IncomeModule'
import LasMovementsModule from '../../components/LastMovementsModule/LasMovementsModule'
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
                            <IncomeModule />
                        </div>
                    </div>
                    <div className='col-lg-12 module'>
                        <BalanceModule/>
                    </div>
                </div>
                <div className='col-lg-6 module'>
                    <ApexChart />
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8 module'>
                    <GoalProgress/>
                </div>
                <div className='col-lg-3 module'>
                    <LasMovementsModule />
                </div>
            </div>
        </div>
    )
}

export default Dashboard