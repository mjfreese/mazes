import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import BinaryTreePage from '../components/BinaryTree/BinaryTreePage'
import HomePage from '../components/Home/HomePage'

const AppRoutes = () => (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/BinaryTree' exact component={BinaryTreePage}/>
        </Switch>
    </HashRouter>
)

export default AppRoutes