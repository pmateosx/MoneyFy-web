import { useEffect, useState } from "react"

const Timer = ({dateToGoal}) => {  
    const [ timer, setTimer ] = useState()

    useEffect(() => {
        const finish = dateToGoal?.split(' ').includes('days')
        
        finish ? setTimer(dateToGoal) : setTimer()
    }, [dateToGoal])

    return(
        <div>
           {timer ? {dateToGoal} : (<p>Hey! goal complete!</p>)}
        </div>
    )
}

export default Timer