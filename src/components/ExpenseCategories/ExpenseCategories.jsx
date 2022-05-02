import { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import './ExpenseCategories.scss'
import ExpenseCategoriesChart from './ExpenseCategoriesChart/ExpenseCategoriesChart'

const ExpenseCategories = () => {
    const {user} = useAuthContext()
    const [totalExpenses, setTotalExpenses] = useState()

    useEffect(() => {
        let expenseRegistered = user?.expense.length
        setTotalExpenses(expenseRegistered)
    }, [user?.expense])
    
    return (
        <div className='ExpenseCategories'>
            <div className='content'>
                <h2>{totalExpenses > 0 && totalExpenses + ' Expenses'}</h2>
                <div>
                    <h3>Categories</h3>
                    <div className='legend'>
                        <span className='circle'></span>
                        <h4>Expense</h4>
                        <span className='circle'></span>
                        <h4>Expense</h4>
                        <span className='circle'></span>
                        <h4>Expense</h4>
                        <span className='circle'></span>
                        <h4>Expense</h4>
                        <span className='circle'></span>
                        <h4>Expense</h4>
                        <span className='circle'></span>
                        <h4>Expense</h4>
                    </div>
                </div>
            </div>
            <ExpenseCategoriesChart /> 
        </div>
    )
}

export default ExpenseCategories