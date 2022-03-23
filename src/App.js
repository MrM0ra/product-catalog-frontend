import './App.css';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/UserContext';
import AddProduct from './components/AddProduct';

function App() {

  return (
    <AuthProvider >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={localStorage.auth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
                <Route path="/login" element={localStorage.auth ? <Navigate to="/dashboard" /> : <LoginForm />}/>
                <Route path="/signup" element={localStorage.auth ? <Navigate to="/dashboard" /> : <SignUp/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/add-product" element={<AddProduct/>}/>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
