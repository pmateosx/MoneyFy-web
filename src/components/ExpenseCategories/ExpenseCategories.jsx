import { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import './ExpenseCategories.scss'
import ExpenseCategoriesChart from './ExpenseCategoriesChart/ExpenseCategoriesChart'

const ExpenseCategories = () => {
    const {user} = useAuthContext()
    const [totalExpenses, setTotalExpenses] = useState()
    const [allCategories , setAllCategories] = useState()

    useEffect(() => {
        let expenseRegistered = user?.expense.length
        setTotalExpenses(expenseRegistered)
    }, [user?.expense])

    useEffect(() => {
        const categories = user?.expense
        const categoriesFiltered = []
        for(let i in categories){
            categoriesFiltered.push(categories[i].category);
        }
        const newArr = categoriesFiltered.filter((item, index)=>  categoriesFiltered.indexOf(item) === index
        )
       setAllCategories(newArr)
    }, [user?.expense, allCategories])

    return (
        <div className='ExpenseCategories'>
            <div className='content'>
                <h2 className='title-chart'>{totalExpenses > 0 && totalExpenses + ' Expenses registered'}</h2>
{/*                 {allCategories?.map((category, i) => {
                    return(
                        <div key={i} className='legend'>
                            <span className='circle'></span>
                            <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4> 
                        </div>
                    )
                })} */}
            </div>
           { allCategories && <ExpenseCategoriesChart userInfo={user} categoriesUsed={allCategories}/> }
        </div>
    )
}

export default ExpenseCategories