import './App.css';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import EditProduct from './components/EditProduct';
import ViewProduct from './components/ViewProduct';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/UserContext';
import AddProduct from './components/AddProduct';

function App() {

	return (
		<AuthProvider >
			<BrowserRouter basename={window.location.pathname || ''}>
				<Routes>
					<Route path="/" element={<LoginForm/>} />
					<Route path="/login" element={<LoginForm />}/>
					<Route path="/signup" element={<SignUp/>}/>
					<Route path="/dashboard" element={<Dashboard/>}/>
					<Route path="/add-product" element={<AddProduct/>}/>
					<Route path="/edit-product/:id" element={<EditProduct/>}/>
					<Route path="/view-product/:id" element={<ViewProduct/>}/>
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
