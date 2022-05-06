import BalanceModule from '../../components/BalanceModule/BalanceModule'
import ApexChart from '../../components/ChartExpenseIncome/ChartExpenseIncome'
import ExpensesModule from '../../components/ExpensesModule/ExpensesModule'
import GoalProgress from '../../components/GoalProgress/GoalProgress'
import Greetings from '../../components/Greetings/Greetings'
import IncomeModule from '../../components/IncomeModule/IncomeModule'
import LasMovementsModule from '../../components/LastMovementsModule/LasMovementsModule'
import { useAuthContext } from '../../contexts/AuthContext'
import './Dashboard.scss'

const Dashboard = () => {
    const { user } = useAuthContext()
    
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
                    {user && <ApexChart userInfo={user}/>}
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-7 module'>
                    <GoalProgress />
                </div>
                <div className='col-lg-4 module'>
                    <LasMovementsModule type={'expense'}/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard