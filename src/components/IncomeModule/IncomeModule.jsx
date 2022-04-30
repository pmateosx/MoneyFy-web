import { useEffect, useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import './IncomeModule.scss'

const IncomeModule = () => {
    const [total, setTotal] = useState()
    const { user } = useAuthContext()

    useEffect(()=> {
        let totalSum = 0
        for (let i = 0; i < user?.income.length; i++){
            totalSum += Number(user?.income[i].amount)
        }
        setTotal(totalSum)
    },[user?.income])

    return (
        <div className='IncomeModule'>
            <h3>Income</h3>
            <div className='total'>
                <span className='total-number'>{total}</span>
                <span> €</span>
            </div>
        </div>
    )
}

export default IncomeModule