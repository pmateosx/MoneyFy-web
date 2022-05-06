import { useAuthContext } from '../../../contexts/AuthContext'
import { useMainGoalContext } from '../../../contexts/MainGoalContext'
import GoalProgressChart from '../../GoalProgress/GoalProgressChart/GoalPRogressChart'
import GoalList from '../GoalList/GoalList'
import './GProgress.scss'

const GProgress = () => {
    const { user } = useAuthContext()
    const { currentGoal } = useMainGoalContext()

    return (
        <div className='GProgress'>
            <div>
                {user?.goal && currentGoal && <GoalProgressChart  currentMainGoal = {currentGoal}/>}
            </div>
            <div>
                <GoalList />
            </div>
        </div>
    )
}

export default GProgress