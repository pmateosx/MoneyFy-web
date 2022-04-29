import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { createExpense } from '../../services/ExpenseService'
import { useState } from 'react'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import './Input.scss'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  amount: yup.number().typeError('You must specify a number').required('Amount is required'),
  category: yup.string().required('Category is required')
}).required();

const Input = ({ category, onClose }) => {
    const { user, getUser } = useAuthContext()
    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const {handleSubmit, register, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    })
 
    const onSubmit = (data) => {
        const { id } = user
        const { name, amount, category } = data

        if( !name || !amount || !category){
            setError(true)
        } else {
            createExpense({...data, user: id})
                .then(expenseCreated => {
                    onClose()
                    getUser()
                    navigate('/expenses')
                })
                .catch(err => {
                    setError(err?.response?.data?.message)
                })
        }

    }

    return(
        <form className='Input' onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                    <input className={errors.name?.message ? 'invalid' : ''} type="text" name='name' placeholder='Name' {...register('name')} />
                    {errors.name && <small style={{color: "red"}}>{errors.name?.message}</small>}
                </div>
                <div>
                    <input className={errors.amount?.message ? 'invalid' : ''} type="number" name="amount" placeholder='Amount' {...register('amount')} /> <span>€</span>
                    {errors.amount && <small style={{color: "red"}}>{errors.amount?.message}</small>}
                </div>
            </div>

            <div>
                {/* <label>Category</label> */}
                {category=== 'expense' &&
                    <select className={errors.category?.message ? 'invalid' : ''} name="category" {...register('category')}>
                        <option disabled selected> Select Category </option>
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
                    <select className={errors.category?.message ? 'invalid' : ''} name="category" {...register('category')}>
                        <option value="uncategorized">Uncategorized</option>
                        <option value="salary">Salary</option>
                        <option value="personal sale">Personal sale</option>
                        <option value="personal work">Personal work</option>
                        <option value="investment benefits">Investment benefits</option>
                    </select>
                }
                {errors.category && <small style={{color: "red"}}>{errors.category?.message}</small>}
            </div>
                <p> Is it a regular { category }? Indicate frequency</p>
                <label><input type="radio" {...register('frequency')} value="monthly" /> Monthly </label>
                <label><input type="radio" {...register('frequency')} value="weekly" /> Weekly </label>
                <label><input type="radio" {...register('frequency')} value="diary" /> Diary </label>
                <br/>
        {error && <><small className='invalid-2' >Error sending {category} </small> <br/></>}
        <button>Create</button>
        </form>
    )
}

export default Input