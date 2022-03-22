import './App.css';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/UserContext';

function App() {
  return (
    <AuthProvider >
        <BrowserRouter>
            <Routes>
                <Route path="/" element={AuthProvider.auth ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<LoginForm/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
