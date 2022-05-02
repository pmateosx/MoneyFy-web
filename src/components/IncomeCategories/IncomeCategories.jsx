import './IncomeCategories.scss'
import IncomeCategoriesChart from './IncomeCategoriesChart/IncomeCategoriesChart'

const IncomeCategories = () => {
    return (
        <div className='IncomeCategories'>
            <div>
            <div>
                <h2>26</h2>
                <h4>Nº of incomes</h4>
            </div>
                <h3>Legend</h3>
                <div>
                    <div>
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
            </div>
            <IncomeCategoriesChart /> 
        </div>
    )
}

export default IncomeCategories