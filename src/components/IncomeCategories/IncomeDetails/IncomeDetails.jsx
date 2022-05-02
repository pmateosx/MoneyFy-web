import { FiTrendingUp, FiEdit, FiTrash, FiEdit3 } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import dayjs from "dayjs"
import './IncomeDetails.scss'
import { deleteIncome } from "../../../services/IncomeService";
import Modal from "../../Modal/Modal";
import EditInput from "../../EditInput/EditInput";

const IncomeDetails = () => {
    const {user, getUser } = useAuthContext()
    const [editing, setEditing] = useState(false)
    const [ allIncomes, setAllIncomes] = useState([])
    const [ showModal, setShowModal ] = useState(false)
    const [ modalTitle, setModalTitle ] = useState()
    const [ inputCategory, setInputCategory ] = useState()
    const [ targetId, setTargetId ] = useState()

    useEffect(() => {
        const incomes = user?.income
        setAllIncomes(incomes)
    },[user?.income])


    const getDateFormat = (date) => {
        return dayjs(date).format('DD MMM')
    }

    const handleDelete = (id) => {
        deleteIncome(id)
        getUser()
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleEdit = (id) => {
        setShowModal(true)
        setTargetId(id)
        setModalTitle('Edit your income')
        setInputCategory('editIncome')
    }

    return (
        <div className='IncomeDetails'>
        {showModal && <Modal onClose={handleCloseModal} title={modalTitle}> <EditInput onClose={handleCloseModal} sector={inputCategory} target={targetId}/></Modal>}
            <div className='head'>
                <h3>Your Incomes</h3>
                <button id='edit-state' onClick={() => setEditing(!editing)}>Edit <FiEdit3/></button>
            </div>
            <div className="limit">
            { allIncomes?.length > 0 ?
                (
                    allIncomes.map((income, index) => 
                    <div className='income-container' key={index}>
                        {editing &&
                            <div>
                                <div className='edit'>
                                    <button className='edit-btn' onClick={() => handleDelete(income.id)}>
                                        <FiTrash />
                                    </button>
                                    <button className='delete-btn' onClick={() => handleEdit(income.id)}>
                                        <FiEdit />
                                    </button>
                                </div>
                            </div>
                        }
                        <div className='icon'>
                            <FiTrendingUp />
                        </div>
                        <div className='middle-content'>
                            <h4>{income.name}</h4>
                            <small>{(income.category).charAt(0).toUpperCase() + income.category.slice(1) } | {getDateFormat(income.createdAt).toUpperCase()}</small>
                        </div>
                        <div className='amount'>
                            <h3>{income.amount}€</h3>
                        </div>
                    </div>
                    )

                )
                :
                (
                    <h4>You dont have incomes yet</h4>
                )
            }
                            
            </div>
        </div>
    )
}

export default IncomeDetails