import { useEffect, useState } from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'
import './BalanceModuleGoals.scss'

const BalanceModuleGoals = () => {
    const [total, setTotal] = useState()
    const { user } = useAuthContext()

    useEffect(()=> {
        let expenses = 0
        for (let i = 0; i < user?.expense.length; i++){
            expenses += Number(user?.expense[i].amount)
        }
        let incomes = 0
        for (let i = 0; i < user?.income.length; i++){
            incomes += Number(user?.income[i].amount)
        }
        let totalSum = incomes - expenses
        setTotal(totalSum)
    },[user?.income, user?.expense])

    return(
        <div className='BalanceModuleGoals'>
                <h4>Total Balance</h4>
            {total ? 
                <h3>{total}€</h3>
                :
                <h4>No info yet</h4>
            }
        </div>
    )
}

export default BalanceModuleGoals