import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { createExpense } from '../../services/ExpenseService'
import './Input.scss'

const Input = ({ category, onClose }) => {
    const { user, getUser } = useAuthContext()
    const navigate = useNavigate()
    const {handleSubmit, register } = useForm()

    const onSubmit = (data) => {
        const { id } = user

        createExpense({...data, user: id})
            .then(expenseCreated => {
                onClose()
                getUser()
                navigate('/expenses')
            })
            .catch(err => {
                console.log(err?.response?.data)
            })
    }

    return(
        <form className='Input' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input type="text" name='name' placeholder='Name' {...register('name')} />
                <input type="number" name="amount" placeholder='Amount' {...register('amount')} /> <span>€</span>
            </div>
            <div>
                <label>Category</label>
                {category=== 'expense' &&
                    <select name="category" {...register('category')}>
                        <option value="uncategorized">Uncategorized</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="house">House</option>
                        <option value="insurance">insurance</option>
                        <option value="shopping">Shopping</option>
                        <option value="food">Food</option>
                        <option value="transportation">Transportation</option>
                        <option value="personal">Personal</option>
                    </select>
                }
                {category=== 'income' &&
                    <select name="category" {...register('category')}>
                        <option value="uncategorized">Uncategorized</option>
                        <option value="salary">Salary</option>
                        <option value="personal sale">Personal sale</option>
                        <option value="personal work">Personal work</option>
                        <option value="investment benefits">Investment benefits</option>
                    </select>
                }
            </div>
            {category === 'expense' || category === 'income' ? 
            (   <>
                <p> Is it a regular { category }? Indicate frequency</p>
                <label><input type="radio" {...register('frequency')} value="monthly" /> Monthly </label>
                <label><input type="radio" {...register('frequency')} value="weekly" /> Weekly </label>
                <label><input type="radio" {...register('frequency')} value="diary" /> Diary </label>
                <br/>
                </>) 
            :
             ''}
        <button>Create</button>
        </form>
    )
}

export default Input