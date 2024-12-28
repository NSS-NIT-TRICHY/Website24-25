import { Route,Routes } from 'react-router-dom'
import Home from './pages/home';
import './App.css'
import Login from "./pages/login";
import ForgotPassword from './components/forgot-password';
import Profile from './pages/profile';
import Register from './pages/register';
import Events from './pages/events';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default App;
