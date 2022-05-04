import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'
import { FiStar, FiEdit, FiTrash, FiEdit3 } from "react-icons/fi";
import { deleteGoal } from '../../../services/GoalService';
import './GoalList.scss'

const GoalList = () => {
    const {user, getUser } = useAuthContext()
    const [editing, setEditing] = useState(false)
    const [ allGoals, setAllGoals] = useState([])

    useEffect(() => {
        const goals = user?.goal
        setAllGoals(goals)
        console.log(user)
    }, [user])


    const getDateFormat = (date) => {
        return dayjs(date).format('DD MMM')
    }

    const handleDelete = (id) => {
        deleteGoal(id)
        getUser()
    }

    return (
        <div className='GoalList'>
            <div className='head'>
                <h3>Your Expenses</h3>
                <button id='edit-state' onClick={() => setEditing(!editing)}>Edit <FiEdit3/></button>
            </div>
            <div className="limit">
            { allGoals?.length > 0 ?
                (
                    allGoals.map((goal, index) => 
                    <div className='goal-container' key={index}>
                        {editing &&
                            <div>
                                <div className='edit'>
                                    <button className='edit-btn' onClick={() => handleDelete(goal.id)}>
                                        <FiTrash />
                                    </button>
                                    <button className='delete-btn' onClick={() => handleDelete(goal.id)}>
                                        <FiEdit />
                                    </button>
                                </div>
                            </div>
                        }
                        <div className='icon'>
                            <FiStar />
                        </div>
                        <div className='middle-content'>
                            <h4>{goal.name}</h4>
                            <small>{getDateFormat(goal?.createdAt).toUpperCase()}</small>
                        </div>
                        <div className='amount'>
                            <h3>{goal.amount}€</h3>
                        </div>
                    </div>
                    )

                )
                :
                (
                    <h4>You dont have goals yet</h4>
                )
            }
                            
            </div>
        </div>
    )
}

export default GoalList