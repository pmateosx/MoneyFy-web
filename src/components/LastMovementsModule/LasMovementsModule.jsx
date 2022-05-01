import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import "./LasMovementsModule.scss";
import dayjs from "dayjs"

const LasMovementsModule = ( {type} ) => {
    const [movement, setMovement] = useState([])
    const {user} = useAuthContext()

    useEffect(() => {
            setMovement(user?.expense)
        },[user?.expense])

console.log(user?.expense);
    // -----> funcion para transformar fecha a solo "dia + mes"

    const getDateFormat = (date) => {
        return dayjs(date).format('DD MMM')
    }

    console.log(getDateFormat("2022-04-30T21:52:17.223Z"));
  return (
    <div className="LastMovementsModule">
        <h2>Last 3 movements</h2>
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
                        <h3 id="amount">{mov.amount}€</h3>
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
