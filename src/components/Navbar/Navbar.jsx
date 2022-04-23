import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
    const { user } = useAuthContext();

    console.log(user);
    return (
        <div className='navbar'>
            <NavLink to='/'>Home</NavLink>
            {user ? 
            (
                <NavLink to='/profile' className='flexy navUser'>
                    <div>
                    <img src={user.avatar} alt="user avatar" />
                    </div>
                    <p>{user.name}</p> 
                </NavLink>
            )
            :
            (<div className='flexy'>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </div>)
            }
        </div>
    )
}

export default Navbar