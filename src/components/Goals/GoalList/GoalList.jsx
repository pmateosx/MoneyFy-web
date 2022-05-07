import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useAuthContext } from '../../../contexts/AuthContext'
import { FiStar, FiEdit, FiTrash, FiEdit3, FiPlus } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { deleteGoal } from '../../../services/GoalService';
import './GoalList.scss'
import Modal from '../../Modal/Modal';
import GoalStepInput from '../GoalStepInput/GoalStepInput';
import EditGoalInput from '../EditGoalInput/EditGoalInput';
import { useMainGoalContext } from '../../../contexts/MainGoalContext';

const GoalList = () => {
    const {user, getUser } = useAuthContext()
    const [ editing, setEditing ] = useState(false)
    const [ allGoals, setAllGoals] = useState([])
    const [ showModal, setShowModal ] = useState(false)
    const [ showCreateModal, setshowCreateModal ] = useState(false)
    const [ modalTitle, setModalTitle ] = useState()
    const [ inputCategory, setInputCategory ] = useState()
    const [ targetId, setTargetId ] = useState()
    const [ totalBalance, setTotalBalance ] = useState()

    const { currentGoal, getCurrentGoal } = useMainGoalContext()


    useEffect(() => {
        const goals = user?.goal
        setAllGoals(goals)
    }, [user])



    useEffect(()=> {
        let expenses = 0
        for (let i = 0; i < user?.expense.length; i++){
            expenses += Number(user?.expense[i].amount)
        }
        let incomes = 0
        for (let i = 0; i < user?.income.length; i++){
            incomes += Number(user?.income[i].amount)
        }
        let totalSum = incomes - expenses
        setTotalBalance(totalSum)
    },[user?.income, user?.expense])

    const handleCloseModal = () => {
        setShowModal(false)
        setshowCreateModal(false)
    }

    const handleEdit = (id) => {
        setShowModal(true)
        setTargetId(id)
        setModalTitle('Edit your Goal')
        setInputCategory('editGoal')
        setEditing(false)
    }

    const getDateFormat = (date) => {
        return dayjs(date).format('DD MMM YY')
    }

    const handleDelete = (id) => {
        deleteGoal(id)
        getUser()
        setEditing(false)
    }
    
    return (
        <div className='GoalList'>
            {showModal && <Modal onClose={handleCloseModal} title={modalTitle}> <EditGoalInput totalBalance={totalBalance} onClose={handleCloseModal} sector={inputCategory} target={targetId}/></Modal>}
            {showCreateModal && <Modal onClose={handleCloseModal}> <GoalStepInput totalBalance={totalBalance} onClose={handleCloseModal} sector={inputCategory} target={targetId}/></Modal>}

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
                                    <button className='delete-btn' onClick={() => handleEdit(goal.id)}>
                                        <FiEdit />
                                    </button>
                                </div>
                            </div>
                        }
                        <div className='icon' onClick={() => getCurrentGoal(goal?.id)}>
                            {currentGoal?.id === goal?.id ? <AiFillStar/> : <FiStar />}
                        </div>
                        <div className='middle-content'>
                            <h4>{goal.name}</h4>
                            <small>{getDateFormat(goal?.createdAt).toUpperCase()}</small>
                        </div>
                        <div className='amount'>
                            <h2>{goal.goalAmount}€</h2>
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
            <div className='add-btn' onClick={() => setshowCreateModal(!showCreateModal)}>
                <FiPlus />
            </div>        
        </div>
    )
}

export default GoalList