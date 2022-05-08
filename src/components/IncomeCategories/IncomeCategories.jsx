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
                <h2>{totalIncomes > 0 && totalIncomes + ' Incomes registered'}</h2>
            </div>
            {user && <IncomeCategoriesChart userInfo={user}/> }
        </div>
    )
}

export default IncomeCategories