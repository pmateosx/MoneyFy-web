import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext';
import Modal from '../Modal/Modal';

import { FiPlus, FiBarChart } from "react-icons/fi";

import './Navbar.scss'
import Input from '../Input/Input';

const Navbar = () => {
    const { user } = useAuthContext();
    const [ showModal, setShowModal ] = useState(false)
    const [ openDropdown, setOpenDropdown ] = useState(false)
    const [ modalTitle, setModalTitle ] = useState()
    const [ inputCategory, setInputCategory ] = useState()

    const handleOpenModal = () => {
        setShowModal(true)
        setOpenDropdown(false)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const dropdownRef = useRef()
    const closeOutDropdown = e => dropdownRef.current === e.target ? setOpenDropdown(false) : ''
    
    const sendInfo = (title, category) => {
        setModalTitle(title)
        setInputCategory(category)
    }

    return (
        <>
            <div className='navbar'>
               
                <NavLink className={'logo'} to='/home'>
               {/*  <FiBarChart style={{ marginRight: '1rem'}}/> */}
                MoneyFy
                </NavLink>
                <div className='flexy'>
                    {user && <button className='add-btn' onClick={() => setOpenDropdown(!openDropdown)}> <FiPlus/></button>}
                    {user ? 
                    (
                        <NavLink to='/profile' className='flexy navUser'>
                           {/*  <div className='frame-img'>
                            <img src={user.avatar} alt="user avatar" />
                            </div> */}
                            <p>Hi, {user.name}</p> 
                        </NavLink>
                    )
                    :
                    (<div className='flexy'>
                        <NavLink to='/login'>Login</NavLink>
                        <NavLink to='/register'>Register</NavLink>
                    </div>)
                    }
                   {/*  {user && <button className='button-out' onClick={()=>logout()}>Logout</button>} */}
                </div>
            </div>
            {showModal && <Modal onClose={handleCloseModal} title={modalTitle}> <Input onClose={handleCloseModal} sector={inputCategory}/></Modal>}
            {openDropdown && (
                <div className='drop-screen' ref={dropdownRef} onClick={closeOutDropdown}>
                    <div className='dropdown'>
                        <button className='dropdown-item' onClick={() => {handleOpenModal(); sendInfo('Add Expense', 'expense')}}>Expense</button>
                        <button className='dropdown-item' onClick={() => {handleOpenModal(); sendInfo('Add Income', 'income')}}>Income</button>
                        <Link to='/goals' className='dropdown-item' onClick={() => setOpenDropdown(!openDropdown)}>Goal</Link>
                    </div>
                </div>
                )}
        </>

    )
}

export default Navbar