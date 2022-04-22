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
    const [ backErrors, setBackErros ] = useState({})
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    })

    const onSubmit = (data) => {
        setBackErros({})
        setIsSubmitting(true)

        createUser(data)
            .then((userCreated) => {
                navigate('/login')
            })
            .catch(err => setBackErros(err?.response?.data?.erorrs))
            .finally(() => {
                setIsSubmitting(false)
            })


    }

    return (
        <div className='container Register'>
            <div className='row'>
                <div className='col-lg-6'>
                Aqui cosas
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
                                <input type="text" />
                            </div>
                            <div className='formField'>
                                <label>Email</label>
                                <input type="email" />
                            </div>
                            <div className='formField'>
                                <label>Password</label>
                                <input type="password" />
                            </div>

                            <button>Create an acount</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register