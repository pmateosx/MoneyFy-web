import { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import './IncomeCategories.scss'
import IncomeCategoriesChart from './IncomeCategoriesChart/IncomeCategoriesChart'

const IncomeCategories = () => {
    const {user} = useAuthContext()
    const [totalIncomes, setTotalIncomes] = useState()

    useEffect(() => {
        let incomeRegistered = user?.income.length
        setTotalIncomes(incomeRegistered)
    }, [user?.income])
    
    return (
        <div className='IncomeCategories'>
            <div className='content'>
                <h2>{totalIncomes > 0 && totalIncomes + ' Registered'}</h2>
                <div>
                    <h3>Categories</h3>
                    <div className='legend'>
                        <span className='circle'></span>
                        <h4>Incomes</h4>
                        <span className='circle'></span>
                        <h4>Incomes</h4>
                        <span className='circle'></span>
                        <h4>Incomes</h4>
                        <span className='circle'></span>
                        <h4>Incomes</h4>
                        <span className='circle'></span>
                        <h4>Incomes</h4>
                        <span className='circle'></span>
                        <h4>Incomes</h4>
                    </div>
                </div>
            </div>
            <IncomeCategoriesChart /> 
        </div>
    )
}

export default IncomeCategories