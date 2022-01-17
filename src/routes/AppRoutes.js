import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import HomePage from '../components/Home/HomePage'

const AppRoutes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path='/' element={<HomePage />} />
        </Routes>
    </BrowserRouter>
)

export default AppRoutes