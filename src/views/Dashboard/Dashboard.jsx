import ApexChart from '../../components/ChartExpenseIncome/ChartExpenseIncome'
import Greetings from '../../components/Greetings/Greetings'
import './Dashboard.scss'

const Dashboard = () => {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-lg-5'>
                    <Greetings />
                </div>
                <div className='col-lg-6'>
                    <ApexChart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard