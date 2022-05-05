import { useEffect, useState } from "react";

const Timer = () => {
    const finishDate =  new Date("Jan 5, 2024 15:37:25").getTime()
    const currentDate = new Date().getTime()
    const [ resultDate, setResultDate ] = useState()
    const [ dif , setDif ] = useState()
   
    const days = Math.floor(dif / (1000 * 60 * 60 * 24));
    const hours = Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const seconds = Math.floor((dif % (1000 * 60)) / 1000);
    const minutes = Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60));
    
    useEffect(()=> {
        const interval = setInterval(() =>{
            setDif( finishDate - currentDate )
            setResultDate(days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ")
        }, 1000)
        
        return () => {
            clearInterval(interval)
        }
    },[currentDate, days, finishDate, hours, minutes, seconds])

    return(
        <div>
            <p id="demo">{resultDate}</p>
        </div>
    )
}

export default Timer