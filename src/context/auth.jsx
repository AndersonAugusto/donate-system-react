import React , { useState , createContext } from 'react'
import { setCookie , maxAge } from 'nookies';
import Authentication from '../services/auth'
import { api } from '../environments/environment';



export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [user , setUser] = useState(null)
    const isAuthenticated = !!user

    
    const login = async ({email , password}) => { 

        const token = await Authentication( email , password )

        setCookie(undefined , 'donate-token' , token.data.token , { maxAge: 60 * 60 * 1})
        api.defaults.headers['Authorization'] = `Bearer ${token.data.token}`
        setUser(user)

        console.log(token)

        
    }

    return (

        <AuthContext.Provider 
            value={{ isAuthenticated , login , user}} 
            >
            {children}
        </AuthContext.Provider>
    )
}