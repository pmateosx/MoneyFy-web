import ExpenseDetails from '../../components/ExpensesDetail/ExpenseDetail'
import ExpenseChart from '../../components/ExpenseChart/ExpenseChart'
import './Expense.scss'
import ExpenseCategories from '../../components/ExpenseCategories/ExpenseCategories'
import { useAuthContext } from '../../contexts/AuthContext'

const Expense = () => {
    const {user} = useAuthContext()

    return(
        <div className='container Expense'>
            <div className='row'>
            <div className='col-lg-4 module'>
                    <ExpenseDetails />
                </div>
                <div className='col-lg-7 module container-expense'>
                    <div className='expense-head'>
                        <h2>Expense Balance  💸</h2>
                        <div>
                            <div className='legend'>
                                <span className='circle'></span>
                                <h4>Expenses</h4>
                            </div>
                        </div>
                    </div>

                    <div className='content-container'>
                        <div className='expense-chart'>
                            <ExpenseChart userInfo={user}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-11 module'>
                    <ExpenseCategories />
                </div>
            </div>
        </div>
    )
}

export default Expense