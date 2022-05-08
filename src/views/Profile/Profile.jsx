import { useAuthContext } from '../../contexts/AuthContext'
import {FiMail, FiEdit3 } from "react-icons/fi";
import './Profile.scss'

const Profile = () => {
    const { user } = useAuthContext();
    return (
        <div className='Profile'>
        <div className='img-container'>
            <img className='img-profile' src="https://images.unsplash.com/photo-1645181196184-3ae5bf3fc91d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="bg-profile" />
        </div>
        <button className='edit-profile'>Edit <FiEdit3/></button>
            <div className='content-profile'>
                <h3>{user?.name}</h3>
                <div className='mail'>
                    <FiMail id='mail-icon'/>
                    <h4>{user?.email}</h4>
                </div>
            </div>
        </div>
    )
}

export default Profile