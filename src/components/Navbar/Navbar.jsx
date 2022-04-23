import './Navbar.scss'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore.js'

const Navbar = () => {
    const { user } = useAuthContext();
    return (
        <div className='navbar'>
            <NavLink to='/'>Home</NavLink>
            <div className='flexy'>
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
                {user && <button className='button-out' onClick={()=>logout()}>Logout</button>}
            </div>
        </div>
    )
}

export default Navbar