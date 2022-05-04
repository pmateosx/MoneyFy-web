/* import { useLocation, useNavigate } from 'react-router-dom' */
import { useAuthContext } from '../../contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { createExpense } from '../../services/ExpenseService'
import { createIncome } from '../../services/IncomeService'
import { useState } from 'react'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import './Input.scss'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  amount: yup.number().typeError('You must specify a number').required('Amount is required'),
  category: yup.string().required('Category is required')
}).required();

const Input = ({ sector, onClose }) => {
    const { user, getUser } = useAuthContext()
    const [error, setError] = useState(false)

/*     let location = useLocation();
    const navigate = useNavigate() */
    const {handleSubmit, register, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    })

    /* let from = location.state?.from?.pathname || "/"; */
    
    const onSubmit = (data) => {
        const { id } = user
        const { name, amount, category } = data

        if( !name || !amount || !category){
            setError(true)
        } else if (sector === 'expense') {
            createExpense({...data, user: id})
            .then(expenseCreated => {
                    onClose()
                    getUser()
                   /*  navigate(from, { replace: true }) */
                })
                .catch(err => {
                    setError(err?.response?.data?.message)
                })
        } else if(sector === 'income') {
            createIncome({...data, user: id})
            .then(incomeCreated => {
                    onClose()
                    getUser()
                   /*  navigate(from, { replace: true }) */
                })
                .catch(err => {
                    setError(err?.response?.data?.message)
                })
        }
    }

    return(
        <form className='Input' onSubmit={handleSubmit(onSubmit)}>
            <div className='input-group row'>
                <div className='col-lg-8' id='cp'>
                    <input className={`${errors.name?.message ? 'invalid' : ''} input-name`} type="text" name='name' placeholder= {`Name of ${sector}*`} {...register('name')}/>
                </div>
                <div className='col-lg-3 amount'>
                    <input className={`${errors.amount?.message ? 'invalid' : ''} input-amount`} type="number" name="amount" placeholder='Amount*' {...register('amount')} step="0.01"/> <span>€</span>
                </div>
            </div>
                <div className='row input-group'>
                    <div className='col-lg-8'>
                        {errors.name && <small style={{color: "red"}}>{errors.name?.message}</small>}
                    </div>
                    <div className='col-lg-3'>
                        {errors.amount && <small style={{color: "red"}}>{errors.amount?.message}</small>}
                    </div>
                </div>

            <div className='col-lg-12 category'>
                {/* <label>Category</label> */}
                {sector === 'expense' &&
                    <select className={`${errors.category?.message ? 'invalid' : ''} select-category`} name="category" {...register('category')}>
                        <option disabled> Select Category </option>
                        <option value="uncategorized">Uncategorized*</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="house">House</option>
                        <option value="insurance">insurance</option>
                        <option value="shopping">Shopping</option>
                        <option value="food">Food</option>
                        <option value="transportation">Transportation</option>
                        <option value="personal">Personal</option>
                    </select>
                }
                {sector === 'income' &&
                    <select className={`${errors.category?.message ? 'invalid' : ''} select-category`} name="category" {...register('category')}>
                        <option disabled> Select Category </option>
                        <option value="uncategorized">Uncategorized</option>
                        <option value="salary">Salary</option>
                        <option value="personal sale">Personal sale</option>
                        <option value="personal work">Personal work</option>
                        <option value="investment benefits">Investment benefits</option>
                    </select>
                }
                {sector === 'editIncome' &&
                    <select className={`${errors.category?.message ? 'invalid' : ''} select-category`} name="category" {...register('category')}>
                        <option disabled> Select Category </option>
                        <option value="uncategorized">Uncategorized</option>
                        <option value="salary">Salary</option>
                        <option value="personal sale">Personal sale</option>
                        <option value="personal work">Personal work</option>
                        <option value="investment benefits">Investment benefits</option>
                    </select>
                }
                {errors.category && <small style={{color: "red"}}>{errors.category?.message}</small>}
            </div>
            <div className='frecuency col-lg-12'>
                <p>Is it a regular { sector }? <br/>Indicate frequency</p>
                <div className='frecuency-radio'>
                    <label><input type="radio" {...register('frequency')} value="monthly" /> Monthly </label>
                    <label><input type="radio" {...register('frequency')} value="weekly" /> Weekly </label>
                    <label><input type="radio" {...register('frequency')} value="diary" /> Diary </label>
                </div>
            </div>
        {error && <><small className='invalid-2' >Error sending {sector} </small> <br/></>}
        <button className='input-btn'>Create</button>
        </form>
    )
}

export default Input