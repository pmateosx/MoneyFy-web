import BalanceModuleGoals from '../../components/Goals/BalanceModuleGoals/BalanceModuleGoals'
import CountDownGoal from '../../components/Goals/CountDownGoal/CountDownGoal'
import GProgress from '../../components/Goals/GProgress/GProgress'
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
            <div className='row'>
                <div className='col-lg-11 module'>
                    <GProgress />
                </div>
            </div>
        </div>
    )
}

export default Goal