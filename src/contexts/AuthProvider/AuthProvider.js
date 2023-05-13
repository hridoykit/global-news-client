
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
        
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log(currentUser)
            setUser(currentUser);
        });

        return () =>{
            unsubscribe();
        }
    }, []);

    //const authInfo = {user, googleSignIn};
    return (
        <AuthContext.Provider value={{user, loginWithGoogle}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;