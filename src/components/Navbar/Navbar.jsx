import './Navbar.scss'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <div className='flexy'>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </div>
        </div>
    )
}

export default Navbar