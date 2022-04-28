import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import { logout } from '../../store/AccessTokenStore.js'
import Modal from '../Modal/Modal';

import { FiPlus } from "react-icons/fi";

import './Navbar.scss'

const Navbar = () => {
    const { user } = useAuthContext();
    const [showModal, setShowModal] = useState(false)
    const [openDropdown, setOpenDropdown] = useState(false)

    const handleOpenModal = () => {
        setShowModal(true)
        setOpenDropdown(false)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const dropdownRef = useRef()
    const closeOutDropdown = e => dropdownRef.current === e.target ? setOpenDropdown(false) : ''

    return (
        <>
            <div className='navbar'>
                <NavLink to='/home'>Logo</NavLink>
                <div className='flexy'>
                    {user && <button className='add-btn' onClick={() => setOpenDropdown(!openDropdown)}> <FiPlus/></button>}
                    {/* {user && <button className='add-btn' onClick={handleOpenModal}> <FiPlus/></button>} */}

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
            {showModal && <Modal onClose={handleCloseModal} title='Title Here'> Childer must be here </Modal>}
            {openDropdown && (
                <dic className='drop-screen' ref={dropdownRef} onClick={closeOutDropdown}>
                    <div className='dropdown'>
                        <button className='dropdown-item' onClick={handleOpenModal}>Expense</button>
                        <button className='dropdown-item' onClick={handleOpenModal}>Income</button>
                        <button className='dropdown-item' onClick={handleOpenModal}>Goal</button>
                    </div>
                </dic>
                )}
        </>

    )
}

export default Navbar