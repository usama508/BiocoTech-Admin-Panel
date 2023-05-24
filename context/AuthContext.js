import React, { useContext, useState, useEffect, useRef } from 'react'
import { auth } from '../firebase'
import { signInWithEmailAndPassword,sendPasswordResetEmail, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function login(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth)
    } 

    {/*function forgot(email){
        return sendPasswordResetEmail(auth,email)
    }*/}

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
       //forgot,
       
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}