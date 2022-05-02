import './IncomeCategories.scss'
import IncomeCategoriesChart from './IncomeCategoriesChart/IncomeCategoriesChart'

const IncomeCategories = () => {
    return (
        <div className='IncomeCategories'>
            <div>
                <h3>Legend</h3>
                <div>
                    <div>
                        <div className='legend'>
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