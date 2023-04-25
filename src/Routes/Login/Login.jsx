import React, { useContext, useState } from 'react';
import { AuthContext } from '../../privetRoute_Context/ContextProvider';
import { Link } from 'react-router-dom';


const Login = () => {
    const {loginUser, forgetPassword} = useContext(AuthContext)

    const [email , setEmail] = useState('')


    const handleLogin =(e)=>{
        e.preventDefault()
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.password.value ;
        console.log(email , pass )

        loginUser(email , pass)
        .then((result)=>{
            const user = result.user ;
            console.log(user)
        })
        .catch(err => {
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
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p onClick={handlePassword} className="label-text-alt link link-hover">Forgot password?</p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='p-1 mb-5'>New on Bye better ? <span className='text-sky-600'><Link to='/register'>Please Register</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;