
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    // const user = {name: "Hridoy"};
    const [user, setUser] = useState(null);

    const loginWithGoogle = (provider) =>{
        return signInWithPopup(auth, provider);
    };
    
    useEffect(() =>{
        onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
    }, []);

    //const authInfo = {user, googleSignIn};
    return (
        <AuthContext.Provider value={{user, loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;