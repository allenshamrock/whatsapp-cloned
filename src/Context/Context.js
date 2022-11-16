import {useContext, createContext} from 'react'
import {GoogleAuthProvider,signInWithPopUp}from 'firebase/auth'
import {auth} from '../Firebase'

const AuthContext = createContext()

export const AuthContextProvider =({children}) =>{
    const logIntoGoogle = () =>{
        const provider = new GoogleAuthProvider()
        signInWithPopUp(auth,provider)
    }
    return(
        <AuthContext.Provider value={{logIntoGoogle}}>
        {children}
        </AuthContext.Provider>
    )
}

export const AuthUser = () =>{
    useContext(AuthContext)
}