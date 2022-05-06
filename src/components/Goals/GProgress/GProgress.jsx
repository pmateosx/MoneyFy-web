import { useAuthContext } from '../../../contexts/AuthContext'
import GoalProgressChart from '../../GoalProgress/GoalProgressChart/GoalPRogressChart'
import GoalList from '../GoalList/GoalList'
import './GProgress.scss'

const GProgress = () => {
    const { user } = useAuthContext()

    return (
        <div className='GProgress'>
            <div>
                {user?.goal && <GoalProgressChart />}
            </div>
            <div>
                <GoalList />
            </div>
        </div>
    )
}

export default GProgress