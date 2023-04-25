import React, { createContext } from 'react';

 
export const AuthContext = createContext({})

const ContextProvider = ({children}) => {
 
    const taka = 'amar taka'

    const authInfo = {
        taka
    }

    return (
        
          <AuthContext.Provider value={authInfo}>
            {children}
          </AuthContext.Provider>  
        
    );
};

export default ContextProvider;