import IncomeChart from '../../components/IncomeChart/IncomeChart'
import './Income.scss'

const Income = () => {
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
                            <div>
                                <h3>55555€</h3>
                                <small>This mounth</small>
                            </div>
                            <div>
                                <h3>55555€</h3>
                                <small>Total</small>
                            </div>
                        </div>
                        <span className='divider'></span>
                        <div className='income-chart'>
                            <IncomeChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Income