import './App.css';
import Login  from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast';
// for routing pages such as about, home, contact etc use react-router-dom
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from './context/AuthContext';

function App() { 
  const {authUser} = useAuthContext();
  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}

      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> */}

        <Route path='/' element={authUser ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
				<Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />

      </Routes>
      <Toaster/>
    </div>
    </>
  )
}

export default App;