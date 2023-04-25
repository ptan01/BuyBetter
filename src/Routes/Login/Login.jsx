import React, { useContext, useState } from 'react';
import { AuthContext } from '../../privetRoute_Context/ContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const {loginUser, forgetPassword} = useContext(AuthContext)

    const [email , setEmail] = useState('')
    const [error , setError] = useState('')
    const [show , setShow] = useState(false)
    const [success , setSuccess] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    
    const from = location.state?.from?.pathname ;
    console.log(from)

    const handleLogin =(e)=>{
        e.preventDefault()
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.password.value ;
        console.log(email , pass )

        loginUser(email , pass)
        .then((result)=>{
            const user = result.user ;
            setSuccess('login successfully')
            navigate(from , {replace: true})
            console.log(user)
        })
        .catch(err => {
            setError(err.message)
            console.log(err)
        })

    }

    const takeEmail = (event)=>{
        setEmail(event.target.value)
    }

    const handlePassword =()=>{
        if(!email){
            alert('please input your email')
            return
        }
       forgetPassword(email)
       .then(()=>{
        alert('Password reset email sent')
       })
       .catch(err=>{
        console.log(err)
       })
    console.log(email)
    }

    

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onBlur={takeEmail} type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={show ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            <p className='w-[90px] my-1 btn btn-xs' onClick={()=>setShow(!show)}>Show Pass</p>
                            <label className="label">
                                <p onClick={handlePassword} className="label-text-alt link link-hover">Forgot password?</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='p-1 mb-5'>New on Bye better ? <span className='text-sky-600'><Link to='/register'>Please Register</Link></span></p>
                    <p className='text-red-500'>{error}</p>
                    <p className='text-green-500'>{success}</p>
                </div>
            </div>
        </div>
    );
};

export default Login;