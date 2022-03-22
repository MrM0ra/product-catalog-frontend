import React, {useState} from 'react'

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
    <div style={{display: "grid", justifyContent:"center"}}>
        <div>
            <h1>SignUp</h1>
        </div>
        <div style={{border:1, borderBlock:"black", borderRadius:15}}>
            <form style={{ display:"grid", placeItems:"baseline", padding:2}}>
                <label>Nombre</label>
                <input type="text" onChange={handleUsernameChange} placeholder="nombre"></input>
                <label>Apellido</label>
                <input type="text" onChange={handleUserLastNameChange} placeholder="apellido"></input>
                <label>Documento</label>
                <input type="text" onChange={handleUserDocumentChange} placeholder="documento"></input>
                <label>Email</label>
                <input type="text" onChange={handleUserEmailChange} placeholder="correo"></input>
                <label>Contraseña</label>
                <input type="password" onChange={handleUserPasswordChange} placeholder="contraseña"></input>
            </form>
        </div>
    </div>
  );
}

export default SignUp