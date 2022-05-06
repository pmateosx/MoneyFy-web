import { useAuthContext } from '../../../contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './GoalStepInput.scss'
import {createGoal} from '../../../services/GoalService.js'

const schema = yup.object({
    name: yup.string().required('Name is required'),
    amount: yup.number().typeError('You must specify a number').required('Amount is required'),
    goalAmount: yup.number().typeError('You must specify a number').required('Goal amount is required'),
  }).required();

const GoalStepInput = ({ onClose, sector, target }) => {
    const { user, getUser } = useAuthContext()
    const [ error, setError ] = useState(false)
    const [step, setStep] = useState(1)
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleStep = (stepPosition) => {

        if (stepPosition <= 1){
            setStep(stepPosition +1)
        } else if (stepPosition === 2) {
            setStep(stepPosition - 1)
        }
    }

    const onSubmit = (data) => {
        const { id } = user
        const { name, amount, goalAmount } = data


        if (!name || !amount || !goalAmount) {
            setError(true)
            setStep(1)
        } else {
            if(!user.goal.length) {
                data.main = true;
            }
            createGoal({...data, user: id})
            .then(goalCreated => {
                    onClose()
                    getUser()
                })
                .catch(err => {
                    setError(err?.response?.data?.message)
                })
        }
    }
    return (
        <div className='GoalStepInput'>
            <h2>Let's create Goal!</h2>

            <form className='form-wrapper'onSubmit={handleSubmit(onSubmit)}>
            {step <= 1 && 
            <>
                <div id='circle'>
                    <h4>1º insert name and total amount</h4>
                </div>
                <div className='input-group row'>
                    <div className='col-lg-8' id='cp'>
                        <input className={`${errors.name?.message ? 'invalid' : ''} input-name`} type="text" name='name' placeholder= {'Name of goal'} {...register('name')}/>
                    </div>
                    <div className='col-lg-3 amount'>
                        <input className={`${errors.goalAmount?.message ? 'invalid' : ''} input-amount`} type="number" name="goalAmount" placeholder='Amount*' {...register('goalAmount')} step='0.01'/> <span>€</span>
                    </div>

                </div>
                <div className='error-first-step'>

                        {errors.name?.message && <small style={{color: "red"}}>{errors.name?.message}</small>}
                        {errors.goalAmount?.message && <small style={{color: 'red', marginRight: '5rem'}}>{errors.goalAmount?.message}</small>}
                </div>
{/*                     <div className='row'>
                        <div className='col-lg-12 main-container'>
                            <h4>Do you want this to be your main goal?</h4>
                            <div className='main-radio'>
                                <label><input type="radio" {...register('main')} value="true" /> Yes </label>
                                <label><input type="radio" {...register('main')} value="false" /> No </label>
                            </div>
                        </div>
                    </div> */}
            </>
            }
                {step === 2 && 
                        <>
                    <div className='second-step'>
                        <h4>2º Enter the amount you want to save</h4>
                        <p>Your total savings balance is XXXX € How much do you want to spend per month to achieve your goal?</p>
                        <div className='col-lg-3 goal-amount-div'>
                            <input className={`${errors.amount?.message ? 'invalid' : ''} goal-amount`} type="number" name="amount" placeholder='Amount*' {...register('amount')} step='0.01' /> <span>€ x mounth</span>
                        </div>
                    </div>
                    <div className='error-menssage'>
                        {errors.amount?.message && <small style={{color: "red", marginTop: "3rem"}}>{errors.amount?.message}</small>}
                    </div>
                        </>
                }
                <div className='container-btn'>
                    <div className='btn-group'>
                            {step <= 1 && <div onClick={()=> handleStep(step)}> <FiChevronRight /> </div> }
                            {step > 1 && <div onClick={()=> handleStep(step)}> <FiChevronLeft /> </div>} 
                            {step > 1 && <button> Submit </button> }
                    </div>
                </div>
            </form>

            <br />
        </div>
    )
}

export default GoalStepInput