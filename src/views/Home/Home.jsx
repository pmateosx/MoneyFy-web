import { FiTrendingUp, FiShoppingBag, FiStar } from "react-icons/fi";
import { Link  } from 'react-router-dom'
import './Home.scss'

const Home = () => {
    return (
        <div className='Home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 hero-container'>
                        <h1>The easy way <br/> to save</h1>
                        <div className='buttons-home'>
                            <Link className="button" to='/login'>Login</Link>
                            <Link className="button" to='/register'>Register</Link>
                        </div>
                        <div className='bg-img'></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 feature-container'>
                        <div className='feature-card'>
                            <div className='icon-1'>
                                <FiShoppingBag />
                            </div>
                            <h3>Control your expenses</h3>
                        </div>
                        <div className='feature-card'>
                            <div className='icon-2'>
                                <FiTrendingUp />
                            </div>
                            <h3>Record your income</h3>
                        </div>
                        <div className='feature-card'>
                            <div className='icon-3'>
                                 <FiStar />
                            </div>
                            <h3>Creates goals</h3>
                        </div>
                    </div>
                </div>
                <div className='row explain-container'>
                    <div className='col-lg-5'>
                        <h3>Eyes on the target</h3>
                        <p>Several studies show that having a clear and tangible objective helps to achieve it. That is the soul of this website. Look at the goal, and achieve it.</p>
                    </div>
                    <div className='col-lg-6 explain-img'>
                        <img src="https://res.cloudinary.com/dfbloaduq/image/upload/v1651987184/MoneyFy/graff_adhrze.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Home