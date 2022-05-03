import './CountDownGoal.scss'
import {FiCalendar} from "react-icons/fi"

const CountDownGoal = () => {
    return(
        <div className='CountDownGoal'>
            <div className='icon'>
                <FiCalendar />
            </div>
            <div className='content'>
                <h4>Time to compete goal</h4>
                <h3>1 Year 2 Mounths 3 days</h3>
            </div>
        </div>
    )
}

export default CountDownGoal