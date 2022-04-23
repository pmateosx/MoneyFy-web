import { useAuthContext } from '../../contexts/AuthContext'
import './Profile.scss'

const Profile = () => {
    const { user } = useAuthContext();
    return (
        <div className='Profile'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 bg-img'>
                        <div>
                            <img src={user?.avatar} alt="user avatar" />
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='row'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile