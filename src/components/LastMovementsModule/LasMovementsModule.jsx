import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import dayjs from "dayjs"
import "./LasMovementsModule.scss";

const LasMovementsModule = ( {type} ) => {
    const [movement, setMovement] = useState([])
    const {user} = useAuthContext()

    useEffect(() => {
            setMovement(user?.expense)
        },[user?.expense])

    const getDateFormat = (date) => {
        return dayjs(date).format('DD MMM')
    }
    
  return (
    <div className="LastMovementsModule">
        <h2>Last movements</h2>
        <div className="container-timeline">
            <ul className="ul-timeline">
            {
                movement?.map((mov, index) => {
                return (
                <li className="li-container" key={index}>
                    <div className="date-timeline">
                        <h4>{getDateFormat(mov.createdAt).toLocaleUpperCase()}</h4>
                    </div>
                    <div className="divider">
                        <span id="circle"></span>
                        <span id="line"></span>
                    </div>
                    <div className="text">
                        <h4>{mov.name}</h4>
                        <small>{(mov.category).charAt(0).toUpperCase() + mov.category.slice(1)}</small>
                        <h3 id="amount">-{mov.amount}€</h3>
                    </div>
                </li>)
                })
            }
            </ul>
        </div>
    </div> 
  );
};

export default LasMovementsModule;
