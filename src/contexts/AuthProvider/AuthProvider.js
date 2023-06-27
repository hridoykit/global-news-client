
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const loginWithGoogle = provider => {
        return signInWithPopup(auth, provider);
    };

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    console.log(createUser)

    const userSignOut = () => {
        return signOut(auth);
    };
    
    // observer
    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        
        return () => {
            unsubscribe()
        };
    }, []);

    const authInfo = {createUser, user, loginWithGoogle, userSignOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;