import GoalProgressChart from '../../GoalProgress/GoalProgressChart/GoalPRogressChart'
import GoalList from '../GoalList/GoalList'
import './GProgress.scss'

const GProgress = () => {
    return (
        <div className='GProgress'>
            <div>
                <GoalProgressChart />
            </div>
            <div>
                <GoalList />
            </div>
        </div>
    )
}

export default GProgress