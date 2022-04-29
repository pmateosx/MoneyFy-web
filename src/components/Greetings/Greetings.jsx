import { useAuthContext } from '../../contexts/AuthContext'
import './Greetings.scss'

const Greetings = () => {
    const { user } = useAuthContext()

    return(
        <div className='Greetings'>
            <h2>Hey {user?.name}! <br /> Check here your info</h2>
            <div className='icon'>
                <p>👋</p>
            </div>
        </div>
    )
}

export default Greetings