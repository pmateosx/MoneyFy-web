import './IncomeDetails.scss'
import { FiTrendingUp, FiEdit, FiTrash, FiEdit3 } from "react-icons/fi";
import { useState } from 'react';

const IncomeDetails = () => {
    const [editing, setEditing] = useState(false)

    return (
        <div className='IncomeDetails'>
            <div className='head'>
                <h3>Your Incomes</h3>
                <button id='edit-state' onClick={() => setEditing(!editing)}>Edit <FiEdit3/></button>
            </div>
            <div className='income-container'>
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
                    <h4>Title Income</h4>
                    <small>Category | 14 MAY</small>
                </div>
                <div className='amount'>
                    <h3>1855€</h3>
                </div>
            </div>
        </div>
    )
}

export default IncomeDetails