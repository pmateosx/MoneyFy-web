import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './guards/ProtectedRoute';
import AppLayout from './layout/AppLayout';
import Blank from './views/Blank/Blank';
import Dashboard from './views/Dashboard/Dashboard';
import Home from './views/Home/Home';
import Income from './views/Income/Income';
import Login from './views/Login/Login';
import Profile from './views/Profile/Profile';
import Register from './views/Register/Register';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path="/" element={<ProtectedRoute/>} >
          <Route path='/' element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='/incomes' element={<Income />} />
            <Route path='/expenses' element={<Blank />} />
            <Route path='/goals' element={<Blank />} />
            <Route path='/commons' element={<Blank />} />
            <Route path='/profile' element={<Profile/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
