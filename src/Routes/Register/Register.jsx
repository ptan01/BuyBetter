import React, { useContext, useState } from 'react';
import { AuthContext } from '../../privetRoute_Context/ContextProvider';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Register = () => {

    const {registerUser} = useContext(AuthContext)

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')



    const handleRegister = (e) => {
        e.preventDefault()
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const pass = from.password.value;
        if(!/(?=.*[!#$%&? "])/.test(pass)){
            alert('Your password must contain at least one Special characters')
            return ;
        }else if(!/(?=.*[0-9])/.text(pass)){
           alert('Your password must contain at least one digit')
           return ;
        }
        else if(!/(?=.*[A-Z])/.test(pass)){
            alert('Your password must contain at least one upperCase')
            return ;
        }

        registerUser(email , pass)
        .then((result)=>{
            const user = (result.user)
            updateProfile(user,  {displayName: name})
            console.log(user)
            sendEmailVerification(user)
            .then(()=>{
                alert('email varification send')
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className='p-1 mb-5'>Already Have an Account ? <span className='text-sky-600'><Link to='/login'>Please Login</Link></span></p>
                </div>
            </div>
        </div>
    );
};

export default Register;