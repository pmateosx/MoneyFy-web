import GoalProgressChart from './GoalProgressChart/GoalPRogressChart'
import './GoalProgress.scss'
import { useMainGoalContext } from '../../contexts/MainGoalContext'

const GoalProgress = () => {
    const { currentGoal } = useMainGoalContext()

    return(
        <div className='GoalProgress'>
            {currentGoal && <GoalProgressChart currentMainGoal={currentGoal}/>}
        </div>
    )
}

export default GoalProgress