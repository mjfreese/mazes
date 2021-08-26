import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import HomePage from '../components/Home/HomePage'

const AppRoutes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path='/' exact component={HomePage} />
        </Switch>
    </BrowserRouter>
)

export default AppRoutes