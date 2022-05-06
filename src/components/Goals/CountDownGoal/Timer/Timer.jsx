import { useEffect, useState } from "react";
import { useAuthContext } from "../../../../contexts/AuthContext";

const Timer = () => {
    const { user } = useAuthContext()
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
        }, 1000)
        if (days){
            setResultDate(days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ")
        }
        return () => clearInterval(interval)
        
    },[currentDate, days, finishDate, hours, minutes, seconds])

    return(
        <div>
            {resultDate && <h3>Loading...</h3> && <p id="demo">{resultDate}</p>}
        </div>
    )
}

export default Timer