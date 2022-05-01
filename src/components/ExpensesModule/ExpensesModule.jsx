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

    return (
        <div className='ExpensesModule'>
            <h3>Expenses</h3>
            <div className='total'>
                <span className='total-number'> {total > 0 ? '-' : ''}{total}</span>
                <span> €</span>
            </div>
        </div>
    )
}

export default ExpensesModule