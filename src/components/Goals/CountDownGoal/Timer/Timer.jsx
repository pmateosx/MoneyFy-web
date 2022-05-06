import dayjs from "dayjs";
import { useEffect, useState } from "react";

const Timer = ({dateToGoal}) => {
    const [ meta, setMeta ] = useState()
    const finishDate =  dayjs(meta).valueOf()
    const currentDate = new Date().getTime()
    const [ resultDate, setResultDate ] = useState()
    const [ finish, setFinish ] = useState()
    const [ dif , setDif ] = useState()

    const year = Math.floor((dif / (1000 * 60 * 60 * 24 * 30 * 12))) || '00'
    const month = Math.floor((dif % (1000 * 60 * 60 * 24 * 30 * 12) / (1000 * 60 * 60 * 24 * 30))) || '00'
    const days = Math.floor((dif % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)) || '00'
    const hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || '00'
    const seconds = Math.floor((dif % (1000 * 60)) / 1000) || '00'
    const minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60)) || '00'
    
    

    useEffect(()=> {
        setMeta(dateToGoal)
        const interval = setInterval(() =>{
            setDif( finishDate - currentDate )
        }, 1000)
        if (days) {
            setResultDate(year + "Y "+ month + "M " + days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ")
        }
        console.log('hi');

        return () => clearInterval(interval)
        
    },[currentDate, days, finishDate, hours, minutes, seconds, dateToGoal , month, year])

    return(
        <div>
            {resultDate && <h3>Loading...</h3> && <p id="demo">{resultDate}</p>}
            {finish && <p>{finish}</p>}
        </div>
    )
}

export default Timer