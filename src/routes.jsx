import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Home from './pages/home/home'
import Page404 from './pages/404/page404'
import Login from './pages/login/login'
import Navbar from './components/navbar/navbar'
import AuthContext from './context/auth'

export default function mainRoutes(){

    return (
        <BrowserRouter>
            { 
                window.location.pathname !== '/login' && <Navbar /> 
            }
            <AuthContext>
                <Routes>
                    <Route path='/login' element={ <Login /> }/>
                    <Route path='/' element={ <Home/> }/>
                    <Route path="*" element = { <Page404 /> } />
                </Routes>
            </AuthContext>
      </BrowserRouter>
    )
}