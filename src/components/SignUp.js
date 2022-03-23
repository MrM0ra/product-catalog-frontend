import React, {useState} from 'react';
import { styles_CUBE } from '../styles/styles';
import '../styles/styles_css.css';

const SignUp = () => {

    const [username, setUsername] = useState('');
    const [userLastname, setuserLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [document, setDocument] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleUserLastNameChange = (event) => {
        setuserLastname(event.target.value);
    }

    const handleUserEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleUserDocumentChange = (event) => {
        setDocument(event.target.value);
    }

    const handleUserPasswordChange = (event) => {
        setPassword(event.target.value);
    }

  return (
    <div style={styles_CUBE.wrapper}>
        <div style={styles_CUBE.card}>
            <h2>SignUp</h2>
            <form style={styles_CUBE.form}>
                <div className='input-form'>
                    <label>Nombre</label>
                    <input style={styles_CUBE.input} type="text" onChange={handleUsernameChange} placeholder="nombre"></input>
                </div>
                <div className='input-form'>
                    <label>Apellido</label>
                    <input style={styles_CUBE.input} type="text" onChange={handleUserLastNameChange} placeholder="apellido"></input>
                </div>
                <div className='input-form'>
                    <label>Documento</label>
                    <input style={styles_CUBE.input} type="text" onChange={handleUserDocumentChange} placeholder="documento"></input>
                </div>
                <div className='input-form'>
                    <label>Email</label>
                    <input style={styles_CUBE.input} type="text" onChange={handleUserEmailChange} placeholder="correo"></input>
                </div>
                <div className='input-form'>
                    <label>Contraseña</label>
                    <input style={styles_CUBE.input} type="password" onChange={handleUserPasswordChange} placeholder="contraseña"></input>
                </div>
            </form>
        </div>
    </div> 
  );
}

export default SignUp