import './App.css';
import Login  from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home';
import { Toaster } from 'react-hot-toast';
// for routing pages such as about, home, contact etc use react-router-dom
import { Route, Routes } from "react-router-dom";

function App() { 
  return (
    <>
    <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Toaster/>
    </div>
    </>
  )
}

export default App;