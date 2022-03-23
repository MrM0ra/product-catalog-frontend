import React, {useState, useContext} from 'react';
import { UserContext } from '../context/UserContext';
import { styles_CUBE } from '../styles/styles';
import { useNavigate } from "react-router-dom";
import '../styles/styles_css.css';

const SignUp = (props) => {

    let navigate = useNavigate();

    const {changeAuth, changeUserEmail, userEmail, changeUserId} = useContext(UserContext);

    const [userName, setUsername] = useState('');
    const [userLastname, setuserLastname] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userDocument, setDocument] = useState('');
    
	const [visibleState, setVisibleState] = useState('hidden');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleUserLastNameChange = (event) => {
        setuserLastname(event.target.value);
    }

    const handleUserEmailChange = (event) => {
        changeUserEmail(event.target.value);
    }

    const handleUserDocumentChange = (event) => {
        setDocument(event.target.value);
    }

    const handleUserPasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSignUp = (event) => {
        event.preventDefault();
        const user = {name:userName, lastName: userLastname, document: userDocument, email:userEmail, password:userPassword};
        const response = fetch("http://127.0.0.1:8080/signup",{
			method: "POST",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then((result) => {
			if(result!=null) {
				changeUserId(result.userId);
				changeAuth(true);
                localStorage.setItem('auth', true);
                localStorage.setItem('user', JSON.stringify(result));
                navigate('/dashboard');
			} else{
				setVisibleState("visible");
			}
		});
    } 

  return (
    <div style={styles_CUBE.wrapper}>
        <div style={styles_CUBE.card}>
            <h2>SignUp</h2>
            <form className="padding-16 text-align-left" style={styles_CUBE.form}>
                <div className='input-form'>
                    <label>Nombre</label>
                    <input className="push-right border-radius" type="text" onChange={handleUsernameChange} placeholder="nombre" required></input>
                </div>
                <div className='input-form'>
                    <label>Apellido</label>
                    <input className="push-right border-radius" type="text" onChange={handleUserLastNameChange} placeholder="apellido" required></input>
                </div>
                <div className='input-form'>
                    <label>Documento</label>
                    <input className="push-right border-radius" type="text" onChange={handleUserDocumentChange} placeholder="documento" required></input>
                </div>
                <div className='input-form'>
                    <label>Email</label>
                    <input className="push-right border-radius" type="text" onChange={handleUserEmailChange} placeholder="correo" required></input>
                </div>
                <div className='input-form'>
                    <label>Contraseña</label>
                    <input className="push-right border-radius" type="password" onChange={handleUserPasswordChange} placeholder="contraseña" required></input>
                </div>
            </form>
            <button onClick={handleSignUp} className="" value="">Signup</button>
            <p style={{visibility: visibleState}}>Email already registered</p>
        </div>
    </div> 
  );
}

export default SignUp