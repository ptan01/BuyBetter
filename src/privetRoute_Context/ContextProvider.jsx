import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

 
export const AuthContext = createContext({})

const auth = getAuth(app)

const ContextProvider = ({children}) => {
 
   const [user , setUser] = useState(null)
   const [loading , setLoading] = useState(true)

    const registerUser = (email , pass) =>{
      setLoading(true)
    return  createUserWithEmailAndPassword(auth , email, pass)
    }

    const loginUser = (email , pass)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth , email , pass)
    }

    const forgetPassword = (email)=>{
      return sendPasswordResetEmail(auth , email)
    }

    const logOut = () =>{
      setUser(null)
      return signOut(auth)
      
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user)=>{
        setUser(user)
        setLoading(false)
      })
      return ()=> unsubscribe
    },[])

    const authInfo = {
        registerUser,
        loginUser,
        forgetPassword,
        user,
        logOut,
        loading
    }


    return (
        
          <AuthContext.Provider value={authInfo}>
            {children}
          </AuthContext.Provider>  
        
    );
};

export default ContextProvider;