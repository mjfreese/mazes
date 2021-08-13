import React from 'react'
import { Link, withRouter } from 'react-router-dom'
//import GridPage from '../Common/GridPage'

const routes = [
    'BinaryTree',
    'Sidewinder'
]

const NavItem = ({route}) => (
    <li>
        <Link to={`/${route}`}>{route}</Link>
    </li>
)

const HomePage = () => {
    return (<ul>{routes.map((route, index) => <NavItem key={index} route={route}/>)}</ul>)
    //return (<GridPage />)
}

export default withRouter(HomePage)