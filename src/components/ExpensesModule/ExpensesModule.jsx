import { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import './ExpensesModule.scss'

const ExpensesModule = () => {
    const [total, setTotal] = useState()
    const { user } = useAuthContext()
    useEffect(()=> {
        let totalSum = 0
        for (let i = 0; i < user?.expense.length; i++){
            totalSum += Number(user?.expense[i].amount)
        }
        setTotal(totalSum)
    },[user?.expense])
    console.log(total);

    return (
        <div className='ExpensesModule'>
            <h3>Expenses</h3>
            <span>55</span>
            <span>$</span>
        </div>
    )
}

export default ExpensesModule