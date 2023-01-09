import React, { createContext, useEffect, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const GAuthProvider = new GoogleAuthProvider();
    const FAuthProvider = new FacebookAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const GLogIn = () => {
        return signInWithPopup(auth, GAuthProvider);
    }

    const FLogIn = () => {
        return signInWithPopup(auth, FAuthProvider);
    }

    const logOut = () => {
        return signOut(auth);
    };



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe;
        }
    }, []);


    const authValue = {
        user,
        loading,
        setLoading,
        userRegister,
        logIn,
        GLogIn,
        FLogIn,
        logOut,
    };
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;