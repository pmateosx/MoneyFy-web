import './Input.scss'

const Input = () => {
    return(
        <form className='Input'>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name='name' />
                <input type="number" name="amount" />
            </div>
            <div>
                <label htmlFor="">Category</label>
                <select name="category">
                    <option value="value1">value1</option>
                    <option value="value2">value2</option>
                    <option value="value3">value3</option>
                </select>
            </div>
        <button>Create</button>
        </form>
    )
}

export default Input