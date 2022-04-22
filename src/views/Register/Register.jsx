import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { createUser } from '../../services/AuthService'
import './Register.scss'

const schema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().required(),
    password: yup.string().min(8, 'Password must contain at least 8 characters').required()
}).required()

const Register = () => {
    const [ backErrors, setBackErrors ] = useState({})
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        setBackErrors({})
        setIsSubmitting(true)

        createUser(data)
            .then((userCreated) => {
                navigate('/login')
            })
            .catch(err => {
                setBackErrors(err?.response?.data)
            })
            .finally(() => {
                setIsSubmitting(false)
            })
    }

    return (
        <div className='container Register'>
            <div className='row'>
                <div className='col-lg-6'>
                <img src="https://public-files.gumroad.com/variants/sxn5t8ady8tbj4yeymyh5vi6d9f2/4d4cb575366005157970186bb171da8f6b6b8bb857dcdd1f8e93774cc5f0900d" alt="" />
                </div>
                <div className='col-lg-4'>
                    <h2 className='title'>Welcome to MoneyControl</h2>
                    <div>
                        <p className='inline'>Already have an Account?</p>
                        <Link to={'/login'}>Sign In</Link>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
                            <div className='formField'>
                                <label>Name</label>
                                <input
                                 className={errors.name?.message ? 'invalid' : ''}
                                {...register('name')} 
                                type="text" 
                                />
                                {errors.name && <small style={{color: "red"}}>{errors.name?.message}</small>}
                            </div>
                            <div className='formField'>
                                <label>Email</label>
                                <input
                                 className={`backErrors || errors.name?.message ? 'invalid' : 'valid'`}
                                {...register('email')} 
                                type="email" 
                                />
                                {errors.email && <small style={{color: "red"}}>{errors.email?.message}</small>}
                            </div>
                            <div className='formField'>
                                <label>Password</label>
                                <input
                                className={`backErrors?.password || errors.name?.message ? 'invalid' : 'valid'`}
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