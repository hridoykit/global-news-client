
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    };
    
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    };

    const userSignOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    
    // observer
    useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        
        return () => {
            unsubscribe()
        };
    }, []);

    const authInfo = {
        createUser,
        verifyEamil,
        user,
        loading,
        loginWithGoogle,
        userSignIn,
        updateUserProfile,
        userSignOut
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
