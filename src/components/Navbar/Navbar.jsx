import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore.js'

import { FiPlus } from "react-icons/fi";

import './Navbar.scss'

const Navbar = () => {
    const { user } = useAuthContext();
    return (
        <div className='navbar'>
            <NavLink to='/home'>Logo</NavLink>
            <div className='flexy'>
                {user && <button className='add-btn' onClick={()=>''}> <FiPlus/></button>}
                {user ? 
                (
                    <NavLink to='/profile' className='flexy navUser'>
                        <div className='frame-img'>
                        <img src={user.avatar} alt="user avatar" />
                        </div>
                        <p>Hi, {user.name}</p> 
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