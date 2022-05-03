import BalanceModuleGoals from '../../components/Goals/BalanceModuleGoals/BalanceModuleGoals'
import CountDownGoal from '../../components/Goals/CountDownGoal/CountDownGoal'
import './Goal.scss'

const Goal = () => {
    return(
        <div className='Goal container'>
            <div className='row'>
                <div className='col-lg-3 module'>
                    <BalanceModuleGoals />
                </div>
                <div className='col-lg-8 module'>
                <CountDownGoal />
                </div>
            </div>
        </div>
    )
}

export default Goal