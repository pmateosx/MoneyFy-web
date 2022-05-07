import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { getGoal, updateGoal } from "../../../services/GoalService";
import './EditGoalInput.scss'
import { useMainGoalContext } from "../../../contexts/MainGoalContext";

const schema = yup.object({
    name: yup.string().required('Name is required'),
    amount: yup.number().typeError('You must specify a number').required('Amount is required'),
    goalAmount: yup.number().typeError('You must specify a number').required('Goal amount is required'),
  }).required();

const EditGoalInput = ({ sector, target, onClose, totalBalance }) => {
    const { getUser } = useAuthContext()
    const [ error, setError ] = useState(false)
    const [step, setStep] = useState(1)
    const { getCurrentGoal } = useMainGoalContext()
    const { handleSubmit, register, formState: { errors },  setValue } = useForm({
        resolver: yupResolver(schema)
    })

    const handleStep = (stepPosition) => {
        if (stepPosition <= 1){
            setStep(stepPosition +1)
        } else if (stepPosition === 2) {
            setStep(stepPosition - 1)
        }
    }

    useEffect(() => {
        getGoal(target)
            .then((goalFound) => {
                setValue('name', goalFound.name)
                setValue('amount', goalFound.amount)
                setValue('main', goalFound.main)
                setValue('goalAmount', goalFound.goalAmount)
            })
            .catch( err => console.log(err))
    },[target, setValue])

    const onSubmit = (data) => {
        const { name, amount, goalAmount } = data

        if (!name || !amount || !goalAmount) {
            setError(true)
        } else {
            updateGoal(target, data)
                .then(() => {
                    onClose()
                    getUser()
                    getCurrentGoal(target)
                })
                .catch( err => console.log(err))
        }
    }

    return (
        <div className='GoalEdit'>
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
                            {error.main?.message && <small style={{color: "red"}}>{error.main?.message}</small>}
                        </div>
                    </div> */}
            </>
            }
                {step === 2 && 
                        <>
                    <div className='second-step'>
                        <h4>2º Enter the amount you want to save</h4>
                        <p>Your total savings balance is <b>{totalBalance}</b>€ How much do you want to spend per month to achieve your goal?</p>
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

export default EditGoalInput