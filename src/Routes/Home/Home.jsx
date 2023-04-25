import React, { useContext } from 'react';
import { AuthContext } from '../../privetRoute_Context/ContextProvider';

const Home = () => {
    const {taka} = useContext(AuthContext)
    console.log(taka)
    return (
        <div>
            <h1>this is home</h1>
        </div>
    );
};

export default Home;