import { useEffect, useState } from "react"

const Timer = ({dateToGoal}) => {  
    const [ timer, setTimer ] = useState()

    useEffect(() => {
        const finish = dateToGoal?.split(' ').includes('ago')
        !finish ? setTimer(dateToGoal) : setTimer(null)
    }, [dateToGoal, timer])

    return(
        <div>
           {timer ? dateToGoal : (<p>Hey! Goal completed!</p>)}
        </div>
    )
}

export default Timer