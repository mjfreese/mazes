import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const routes = [
    'BinaryTree',
]

const NavItem = ({route}) => (
    <li>
        <Link to={`/${route}`}>{route}</Link>
    </li>
)

const HomePage = () => {
    return (<ul>{routes.map((route, index) => <NavItem key={index} route={route}/>)}</ul>)
}

export default withRouter(HomePage)