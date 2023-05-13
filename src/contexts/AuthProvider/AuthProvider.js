
import { signInWithPopup } from 'firebase/auth';
import React, { createContext } from 'react';
import auth from '../../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const user = {name: "Hridoy"};

    const loginWithGoogle = (provider) =>{
        return signInWithPopup(auth, provider);
    };
    

    //const authInfo = {user, googleSignIn};
    return (
        <AuthContext.Provider value={{user, loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;