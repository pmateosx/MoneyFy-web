import { useAuthContext } from '../../../contexts/AuthContext'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import './GoalStepInput.scss'

const schema = yup.object({
    name: yup.string().required('Name is required'),
    amount: yup.number().typeError('You must specify a number').required('Amount is required'),
    category: yup.string().required('Category is required')
  }).required();

const GoalStepInput = ({ onClose, sector, target }) => {
    const { user, getUser } = useAuthContext()
    const [ error, setError ] = useState(false)
    const [step, setStep] = useState(1)
    const { handleSubmit, register, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const handleStep = (stepPosition) => {
        console.log(step);
        if (stepPosition <= 1){
            setStep(stepPosition +1)
        } else if (stepPosition === 2) {
            setStep(stepPosition - 1)
        }
    }

    return (
        <div className='GoalStepInput'>
            <h2>Let's create Goal!</h2>

            <form className='form-wrapper'>
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
                        <input className={`${errors.amount?.message ? 'invalid' : ''} input-amount`} type="number" name="goalAmount" placeholder='Amount*' {...register('goalAmount')} step='0.01'/> <span>€</span>
                    </div>

                </div>
                    <div className='row'>
                        <div className='col-lg-12 main-container'>
                            <h4>Do you want this to be your main goal?</h4>
                            <div className='main-radio'>
                                <label><input type="radio" {...register('frequency')} value="true" /> Yes </label>
                                <label><input type="radio" {...register('frequency')} value="false" /> No </label>
                            </div>
                        </div>
                    </div>
            </>
            }
                {step === 2 && 
                    <div className='second-step'>
                        <h4>2º Enter the amount you want to save</h4>
                        <p>Your total savings balance is XXXX € How much do you want to spend per month to achieve your goal?</p>
                        <div className='col-lg-3 goal-amount-div'>
                            <input className={`${errors.amount?.message ? 'invalid' : ''} goal-amount`} type="number" name="amount" placeholder='Amount*' {...register('amount')} step='0.01' /> <span>€ x mounth</span>
                        </div>
                    </div>
                }
            </form>

            <br />
            <div className='container-btn'>
                <div className='btn-group'>
                    {step > 1 && <div onClick={()=> handleStep(step)}> <FiChevronLeft /> </div>} 
                    {step <= 1 && <div onClick={()=> handleStep(step)}> <FiChevronRight /> </div> }
                    {step > 1 && <div onClick={()=> handleStep(step)}> Submit </div> }
                </div>
            </div>
        </div>
    )
}

export default GoalStepInput