import './CountDownGoal.scss'
import {FiCalendar} from "react-icons/fi"
import { useAuthContext } from '../../../contexts/AuthContext'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as duration from 'dayjs/plugin/duration';
import Timer from './Timer/Timer'

dayjs.extend(duration);
dayjs.extend(relativeTime);

const CountDownGoal = () => {
    const { user } = useAuthContext()
    const [ timeToGoal, setTimeToGoal] = useState(0)
    console.log(user);

    useEffect(()=> {
        const amount = user?.goal[0].amount
        const goalAmount = user?.goal[0].goalAmount
        setTimeToGoal(dayjs.duration((goalAmount / amount), 'M').humanize(true));
    },[user?.goal]) 

    return(
        <div className='CountDownGoal'>
            <div className='icon'>
                <FiCalendar />
            </div>
            <div className='content'>
                <h4>Time to compete goal</h4>
                {timeToGoal && <div className='counter'>
                    <h3>{<Timer />}</h3>
                    {/* <h3>  ({timeToGoal})</h3> */}
                </div>}
            </div>
        </div>
    )
}

export default CountDownGoal