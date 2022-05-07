import './CountDownGoal.scss'
import {FiCalendar} from "react-icons/fi"
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as duration from 'dayjs/plugin/duration';
import Timer from './Timer/Timer'
import { useMainGoalContext } from '../../../contexts/MainGoalContext'

dayjs.extend(duration);
dayjs.extend(relativeTime);

const CountDownGoal = () => {
    const { currentGoal }= useMainGoalContext()
    const [ timeToGoal, setTimeToGoal] = useState()
    
    useEffect(()=> {
        const amount = currentGoal?.amount
        const goalAmount = currentGoal?.goalAmount
        const goalCreated = dayjs().diff(dayjs(currentGoal?.createdAt), 'month')
        
       /*  setTimeToGoal(dayjs.duration((goalAmount / amount), 'M').humanize(true)); */
        setTimeToGoal(dayjs.duration(((goalAmount / amount) - (goalCreated)), 'M').humanize(true))
        
    },[timeToGoal, currentGoal?.amount, currentGoal?.goalAmount, currentGoal]) 

    return(
        <div className='CountDownGoal'>
            <div className='icon'>
                <FiCalendar />
            </div>
            <div className='content'>
                <h4>Time to compete goal</h4>
                {timeToGoal && 
                    <div className='counter'>
                    <h3>{timeToGoal && <Timer dateToGoal={timeToGoal} />}</h3>
                   {/*  <p> ({dayjs.duration((currentGoal?.goalAmount / currentGoal?.amount), 'M').humanize(true)})</p> */}
                </div>}
            </div>
        </div>
    )
}

export default CountDownGoal