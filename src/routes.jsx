import React from 'react'
import {
Routes,
Route
} from 'react-router-dom'

import Home from './pages/home/home'
import Page404 from './pages/404/page404'

export default function mainRoutes(){
    return (
        <Routes>

            <Route path='/' element={ <Home/> }/>
            <Route path="*" element = { <Page404/> } />

        </Routes>
    )
}