import { FiShoppingBag, FiEdit, FiTrash, FiEdit3 } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import dayjs from "dayjs"
import Modal from "../Modal/Modal";
import EditInput from "../EditInput/EditInput";
import { deleteExpense } from "../../services/ExpenseService";
import './ExpenseDetail.scss'

const ExpenseDetails = () => {
    const {user, getUser } = useAuthContext()
    const [editing, setEditing] = useState(false)
    const [ allExpenses, setAllExpenses] = useState([])
    const [ showModal, setShowModal ] = useState(false)
    const [ modalTitle, setModalTitle ] = useState()
    const [ inputCategory, setInputCategory ] = useState()
    const [ targetId, setTargetId ] = useState()

    useEffect(() => {
        const expenses = user?.expense
        setAllExpenses(expenses)
    },[user?.expense])


    const getDateFormat = (date) => {
        return dayjs(date).format('DD MMM')
    }

    const handleDelete = (id) => {
        deleteExpense(id)
        getUser()
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleEdit = (id) => {
        setShowModal(true)
        setTargetId(id)
        setModalTitle('Edit your Expense')
        setInputCategory('editExpense')
    }

    return (
        <div className='ExpenseDetails'>
        {showModal && <Modal onClose={handleCloseModal} title={modalTitle}> <EditInput onClose={handleCloseModal} sector={inputCategory} target={targetId}/></Modal>}
            <div className='head'>
                <h3>Your Expenses</h3>
                <button id='edit-state' onClick={() => setEditing(!editing)}>Edit <FiEdit3/></button>
            </div>
            <div className="limit">
            { allExpenses?.length > 0 ?
                (
                    allExpenses.map((expense, index) => 
                    <div className='expense-container' key={index}>
                        {editing &&
                            <div>
                                <div className='edit'>
                                    <button className='edit-btn' onClick={() => handleDelete(expense.id)}>
                                        <FiTrash />
                                    </button>
                                    <button className='delete-btn' onClick={() => handleEdit(expense.id)}>
                                        <FiEdit />
                                    </button>
                                </div>
                            </div>
                        }
                        <div className='icon'>
                            <FiShoppingBag />
                        </div>
                        <div className='middle-content'>
                            <h4>{expense.name}</h4>
                            <small>{(expense.category).charAt(0).toUpperCase() + expense.category.slice(1) } | {getDateFormat(expense.createdAt).toUpperCase()}</small>
                        </div>
                        <div className='amount'>
                            <h3>-{expense.amount}€</h3>
                        </div>
                    </div>
                    )

                )
                :
                (
                    <h4>You dont have expenses yet</h4>
                )
            }
                            
            </div>
        </div>
    )
}

export default ExpenseDetails