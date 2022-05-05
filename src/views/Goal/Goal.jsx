import BalanceModuleGoals from '../../components/Goals/BalanceModuleGoals/BalanceModuleGoals'
import CountDownGoal from '../../components/Goals/CountDownGoal/CountDownGoal'
import GProgress from '../../components/Goals/GProgress/GProgress'
import { useAuthContext } from '../../contexts/AuthContext'
import './Goal.scss'

const Goal = () => {
    const { user } = useAuthContext()
    return(
        <div className='Goal container'>
            <div className='row'>
                <div className='col-lg-3 module'>
                    <BalanceModuleGoals />
                </div>
                <div className='col-lg-8 module'>
                {user  && <CountDownGoal /> }
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