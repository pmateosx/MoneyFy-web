import './CountDownGoal.scss'
import {FiCalendar} from "react-icons/fi"
import { useAuthContext } from '../../../contexts/AuthContext'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as duration from 'dayjs/plugin/duration';
import Timer from './Timer/Timer'
import { useMainGoalContext } from '../../../contexts/MainGoalContext'

dayjs.extend(duration);
dayjs.extend(relativeTime);

const CountDownGoal = () => {
    const { user } = useAuthContext()
    const { currentGoal }= useMainGoalContext()
    const [ timeToGoal, setTimeToGoal] = useState(0)
    console.log(user);

    useEffect(()=> {
        const amount = currentGoal?.amount
        const goalAmount = currentGoal?.goalAmount
        const monthsToGoal = goalAmount / amount
        setTimeToGoal(dayjs().add(monthsToGoal, 'M').format('MMM D, YYYY h:mm:ss'))

        console.log(timeToGoal);
        console.log('month to goal', monthsToGoal);
        
    },[timeToGoal, currentGoal?.amount, currentGoal?.goalAmount]) 

    /* setTimeToGoal(dayjs.duration((goalAmount / amount), 'M').humanize(true)); */
    return(
        <div className='CountDownGoal'>
            <div className='icon'>
                <FiCalendar />
            </div>
            <div className='content'>
                <h4>Time to compete goal</h4>
                {timeToGoal && <div className='counter'>
                    <h3>{<Timer dateToGoal={timeToGoal} />}</h3>
                   {/*  <p> ({dayjs.duration((currentGoal?.goalAmount / currentGoal?.amount), 'M').humanize(true)})</p> */}
                </div>}
            </div>
        </div>
    )
}

export default CountDownGoal