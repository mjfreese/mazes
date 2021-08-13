import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import BinaryTreePage from '../components/BinaryTree/BinaryTreePage'
import HomePage from '../components/Home/HomePage'
import SidewinderPage from '../components/Sidewinder/SidewinderPage'

const AppRoutes = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/BinaryTree' exact component={BinaryTreePage} />
            <Route path='/Sidewinder' exact component={SidewinderPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRoutes