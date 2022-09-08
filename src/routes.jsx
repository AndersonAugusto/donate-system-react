import React , { useContext } from 'react'
import { Routes , Route , Navigate} from 'react-router-dom'
import { AuthProvider , AuthContext} from './context/auth'

import Home from './pages/home/home'
import Page404 from './pages/404/page404'
import Login from './pages/login/login'


export default function mainRoutes(){

    const Private = ({ children }) => {
        const { isAuthenticated } = useContext(AuthContext)

        if(!isAuthenticated) {
            return <Navigate to="/login"/>
        }
        return children
    }
   
    return (
        <AuthProvider>
            <Routes>
                <Route path='/login' element={ <Login /> }/>
                <Route path='/' element={ <Private> <Home/> </Private> }/>
                <Route path="*" element = { <Page404 /> } />
            </Routes>
       </AuthProvider>
    )
}