import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../../services/AuthService'
import './Register.scss'

const schema = yup.object({
    email: yup.string().email().required('Email is required.'),
    name: yup.string().required('Name is required.'),
    password: yup.string().min(8, 'Password must contain at least 8 characters.').required('Password is required.')
}).required()

const Register = () => {
    const [ backErrors, setBackErrors ] = useState({})
/*     const [ isSubmitting, setIsSubmitting ] = useState(false) */
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        setBackErrors({})
        /* setIsSubmitting(true) */

        createUser(data)
            .then((userCreated) => {
                navigate('/login')
            })
            .catch(err => {
                setBackErrors(err?.response?.data)
            })
/*             .finally(() => {
                setIsSubmitting(false)
            }) */
    }

    return (
        <div className='container Register'>
            <div className='row'>
                <div className='col-lg-6 img-div'>
                <img src="https://res.cloudinary.com/dfbloaduq/image/upload/v1651981731/MoneyFy/Login_fbgcos.png" alt="" />
                </div>
                <div className='col-lg-4'>
                    <h2 className='title'>Welcome to MoneyFy</h2>
                    <div>
                        <p className='inline'>Already have an Account?</p>
                        <Link to={'/login'}> <u>Sign In</u></Link>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
                            <div className='formField'>
                                <label>Name</label>
                                <input
                                 className='input-mail'
                                {...register('name')} 
                                type="text" 
                                />
                                {errors.name && <small style={{color: "red"}}>{errors.name?.message}</small>}
                            </div>
                            <div className='formField'>
                                <label>Email</label>
                                <input
                                className='input-mail'
                                {...register('email')} 
                                type="email" 
                                />
                                {errors.email && <small style={{color: "red"}}>{errors.email?.message}</small>}
                            </div>
                            <div className='formField'>
                                <label>Password</label>
                                <input
                                 className='input-mail'
                                {...register('password')} 
                                type="password" 
                                />
                                {errors.password && <small style={{color: "red"}}>{errors.password?.message}</small>}
                            </div>

                            {backErrors.message && <p style={{color: "red"}}>{backErrors.message}</p>}

                            <button>Create an acount</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register