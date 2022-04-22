import { useState } from 'react' 
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login as loginRequest } from '../../services/AuthService';
import './Login.scss'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
}).required();

const Login = () => {
    const navigate = useNavigate()
    let location = useLocation();

    let from = location.state?.from?.pathname || "/home";
    const [error, setError] = useState()
    const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    });


    const onSubmit = (data) => {
    setError({})

    loginRequest(data)
      .then(response => {
        console.log(response);

        /* login(response.access_token, () => navigate(from, { replace: true }))  */
      })
      .catch(err => {
        setError(err?.response?.data?.message)
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
                        <p className='inline'>You dont have an Account?</p>
                        <Link to={'/register'}> Sign up</Link>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className='form-container'>
                            <div className='formField'>
                                <label>Email</label>
                                <input
                                className={errors.email?.message ? 'invalid' : ''}
                                {...register('email')} 
                                type="email" 
                                />
                                {errors.email && <small style={{color: "red"}}>{errors.email?.message}</small>}
                            </div>
                            <div className='formField'>
                                <label>Password</label>
                                <input
                                 className={errors.password?.message ? 'invalid' : ''}
                                {...register('password')} 
                                type="password" 
                                />
                               {/*  {error && <small style={{color: "red"}}>{error}</small>} */}
                            </div>

                            <button>Enter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login