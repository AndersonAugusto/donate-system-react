import React , { useState , createContext } from 'react'
import { setCookie } from 'nookies';
import Authentication from '../services/auth'
import { api } from '../environments/environment';


export const AuthContext = createContext();

const AuthProvider = ({children})  => {

    const [user , setUser] = useState(null)

    const login = async ({email , password}) => { 
        const token = await Authentication( email , password )

        setCookie(undefined , 'donate-token' , token.data.token , { 
            maxAge: 12 * 60 * 60 * 20 * 100 // 24 horas (86400000 ms)
        })
        api.defaults.headers['Authorization'] = `Bearer ${token.data.token}`
        setUser(user)
        
        console.log(token)
    }

    return (
        <AuthContext.Provider value={{ login , user}} > 
            {children}
         </AuthContext.Provider>
    )
}
export default AuthProvider