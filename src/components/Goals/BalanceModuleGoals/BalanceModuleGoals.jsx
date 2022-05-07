import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useMainGoalContext } from '../../../contexts/MainGoalContext'
import './BalanceModuleGoals.scss'

const BalanceModuleGoals = () => {
    const { currentGoal } = useMainGoalContext()
    const [moneyLeft, setMoneyLeft] = useState()
    

    const now = dayjs()
    const mainGoalDate = dayjs(currentGoal?.createdAt)
    const differenceDates = now.diff(mainGoalDate, 'M')
    const moneyToGoal = currentGoal?.amount
    const goalCost = currentGoal?.goalAmount

    const exceptions = now.diff(mainGoalDate, 'ms') 

    //console.log(differenceDates, mainGoalDate, now);
    //console.log(exceptions);
    
    
    useEffect(()=>{
        const amountInMonth = differenceDates * moneyToGoal
        const diff = goalCost - amountInMonth
        console.log(diff);
        if(differenceDates >= 1 ){
            setMoneyLeft(diff)
        } 
        if (exceptions > 1){
            setMoneyLeft(diff)
        } 
        if(diff <= 0){
            setMoneyLeft(0)
        }
        /* else {
            setMoneyLeft(0)
        } */
    },[currentGoal, differenceDates, goalCost, moneyToGoal, exceptions])

    return(
        <div className='BalanceModuleGoals'>
                <h4>Amount to complete the goal</h4>
            {moneyLeft ? 
                <h3>{moneyLeft}€</h3>
                :
                <h3>0 €</h3>
            }
        </div>
    )
}

export default BalanceModuleGoals