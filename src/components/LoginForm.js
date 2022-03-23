import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { styles_CUBE } from '../styles/styles';
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {	

    let navigate = useNavigate();

	const {changeAuth, changeUserEmail, userEmail, changeUserId} = useContext(UserContext);

	const [userPwd, setUserPwd] = useState("");
	const [visibleState, setVisibleState] = useState('hidden');

	const handleLoginWeb = () => {
		let user = {email: userEmail, password: userPwd};
        console.log(user)
		const response = fetch("http://127.0.0.1:8080/login",{
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

	const handleEmailChange = (event) => {
		changeUserEmail(event.target.value);
	}

	const handlePwdChange = (event) => {
		setUserPwd(event.target.value);
	}

    const handleSignUp = (event) => {
        event.preventDefault();
        navigate('/SignUp');
    }

	return (
		<div style={styles_CUBE.wrapper}>
            <div style={styles_CUBE.card}>
                <h2>Login</h2>
			    <form style={styles_CUBE.form}>
				    <input style={styles_CUBE.input} placeholder="Email" onChange={handleEmailChange} type="text" required></input>
				    <input style={styles_CUBE.input} placeholder="Password" onChange={handlePwdChange} type="password" required></input>
				    <p style={{visibility: visibleState}}>Usuario y/o contraseña invalidos</p>
			    </form>
			    <div style={styles_CUBE.form}>
                    <button style={styles_CUBE.input} onClick={handleLoginWeb}>Login</button>
                    <button style={styles_CUBE.input} onClick={handleSignUp}>SignUp</button>
			    </div>
		    </div>
        </div>
	);
};

export default LoginForm;