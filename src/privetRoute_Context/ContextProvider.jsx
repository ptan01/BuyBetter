import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';

 
export const AuthContext = createContext({})

const auth = getAuth(app)

const ContextProvider = ({children}) => {
 
   const [user , setUser] = useState(null)

    const registerUser = (email , pass) =>{
    return  createUserWithEmailAndPassword(auth , email, pass)
    }

    const loginUser = (email , pass)=>{
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
      })
      return ()=> unsubscribe
    },[])

    const authInfo = {
        registerUser,
        loginUser,
        forgetPassword,
        user,
        logOut
    }


    return (
        
          <AuthContext.Provider value={authInfo}>
            {children}
          </AuthContext.Provider>  
        
    );
};

export default ContextProvider;