import IncomeCategories from '../../components/IncomeCategories/IncomeCategories'
import IncomeDetails from '../../components/IncomeDetails/IncomeDetails'
import IncomeChart from '../../components/IncomeChart/IncomeChart'
import './Income.scss'
import { useAuthContext } from '../../contexts/AuthContext'
import { useEffect, useState } from 'react'

const Income = () => {
    const {user} = useAuthContext()
    const [totalIncome, setTotalIncome] = useState()

    let incomes = 0
    for (let i = 0; i < user?.income?.length; i++){
        incomes += Number(user?.income[i].amount)
    }

    useEffect(()=>{
       setTotalIncome(incomes)
    },[user?.income, incomes])

    return(
        <div className='container Income'>
            <div className='row'>
                <div className='col-lg-11 module container-income'>
                    <div className='income-head'>
                        <h2>Income Balance  💸</h2>
                        <div>
                            <div className='legend'>
                                <span className='circle'></span>
                                <h4>Incomes</h4>
                            </div>
                        </div>
                    </div>

                    <div className='content-container'>
                        <div className='balance-income'>
                                <small>Total</small>
                            <div className='cc'>
                               { totalIncome ? <> <h3>{totalIncome}</h3> <span id='symbol'> €</span> </> : <h4>No info yet</h4>}
                            </div>
                        </div>
                        <span className='divider'></span>
                        <div className='income-chart'>
                            <IncomeChart userInfo={user}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-7 module'>
                    <IncomeCategories />
                </div>
                <div className='col-lg-4 module'>
                    <IncomeDetails />
                </div>
            </div>
        </div>
    )
}

export default Income