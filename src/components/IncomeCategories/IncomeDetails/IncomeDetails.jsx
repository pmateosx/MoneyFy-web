import { FiTrendingUp, FiEdit, FiTrash, FiEdit3 } from "react-icons/fi";
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/AuthContext';
import dayjs from "dayjs"
import './IncomeDetails.scss'

const IncomeDetails = () => {
    const {user, getUser } = useAuthContext()
    const [editing, setEditing] = useState(false)
    const [ allIncomes, setAllIncomes] = useState([])

    useEffect(() => {
        let incomes = user?.income
        setAllIncomes(incomes)
        getUser()
    },[user?.income, getUser])

    const getDateFormat = (date) => {
        return dayjs(date).format('DD MMM')
    }

    return (
        <div className='IncomeDetails'>
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
                                    <button className='edit-btn'>
                                        <FiTrash />
                                    </button>
                                    <button className='delete-btn'>
                                        <FiEdit />
                                    </button>
                                </div>
                            </div>
                        }
                        <div className='icon'>
                            <FiTrendingUp />
                        </div>
                        <div className='middle-content'>
                            <h4>{income.name}e</h4>
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