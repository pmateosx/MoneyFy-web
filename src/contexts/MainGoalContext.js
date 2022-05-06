import { createContext, useState, useContext, useEffect } from "react";
import { updateMainGoal } from "../services/GoalService";
import { useAuthContext } from "./AuthContext";

const MainGoalContext = createContext()

export const useMainGoalContext = () => useContext(MainGoalContext)

export const MainGoalContextProvider = ({ children }) => {
    const { user } = useAuthContext()
    const [currentGoal, setCurrentGoal] = useState()
    

    const getCurrentGoal = (id) => {
        const actualGoal = user?.goal.find((goal)=> goal.id === id)
        const prevGoal = currentGoal;
        setCurrentGoal(actualGoal)
        updateMainGoal(id)
            .then((res)=> {
                if(res.status === 204) {
                    setCurrentGoal(prevGoal);
                }
            })
            .catch(()=> setCurrentGoal(prevGoal))
    }

    useEffect(()=> {
        if (user?.goal.length > 0 && !currentGoal) {
            const goalFiltered = user?.goal?.find(goal => goal.main)
            setCurrentGoal(goalFiltered || user?.goal[0])
        }
    }, [currentGoal, user?.goal])

    const value = {
          currentGoal,
          getCurrentGoal
      }

    return (
        <MainGoalContext.Provider value={value}>
          {children}
        </MainGoalContext.Provider>
      )
}

export default MainGoalContext