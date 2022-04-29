import './Input.scss'

const Input = ({ category }) => {

    return(
        <form className='Input'>
            <div>
                <input type="text" name='name' placeholder='Name'/>
                <input type="number" name="amount" placeholder='Amount'/>
            </div>
            <div>
                <label>Category</label>
                {category=== 'expense' &&
                    <select name="category">
                        <option value="uncategorized">Uncategorized</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="house">House</option>
                        <option value="insurance">insurance</option>
                        <option value="shopping">Shopping</option>
                        <option value="food">Food</option>
                        <option value="transportation">Transportation</option>
                        <option value="personal">Personal</option>
                    </select>
                }
                {category=== 'income' &&
                    <select name="category">
                        <option value="uncategorized">Uncategorized</option>
                        <option value="salary">Salary</option>
                        <option value="personal sale">Personal sale</option>
                        <option value="personal work">Personal work</option>
                        <option value="investment benefits">Investment benefits</option>
                    </select>
                }
            </div>
            {category === 'expense' || category === 'income' ? (<p>Is this a regular {category}? Insert a date</p>) : ''}
        <button>Create</button>
        </form>
    )
}

export default Input