import { createContext, useState, useContext, useEffect } from "react";
import { getGoal, updateGoal } from "../services/GoalService";
import { useAuthContext } from "./AuthContext";

const MainGoalContext = createContext()

export const useMainGoalContext = () => useContext(MainGoalContext)

export const MainGoalContextProvider = ({ children }) => {
    const { user } = useAuthContext()
    const [currentGoal, setCurrentGoal] = useState(user?.goal[0])
    

    const getCurrentGoal = (id) => {
        getGoal(id)
            .then((goal) => {
                setCurrentGoal(goal)
                updateGoal(goal.id, {...goal, main: true})
                /* handleMainGoal(goal.id) */
            })
    }
/*     const handleMainGoal = (id) =>  {
        const allGoals = user.goal
        let result = allGoals.filter((item, index) => item.main
        )
        if(result.length >= 1){  
            updateGoal(id, {...result[0], main: false})
            result.pop()
        }
    console.log(result);
    return result
    } */

    useEffect(()=> {
        if (user?.goal.length > 0 && !currentGoal) {
            setCurrentGoal(user?.goal[0])
        }
    },[currentGoal, user?.goal])

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