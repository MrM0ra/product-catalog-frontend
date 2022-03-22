import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { styles } from '../styles/styles';
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {	

    let navigate = useNavigate();

	const {changeAuth, userEmail, changeUserId} = useContext(UserContext);

	const [userPwd, setUserPwd] = useState("");
	const [visibleState, setVisibleState] = useState('hidden');

	const handleLoginWeb = () => {
		let user = {email: userEmail, password: userPwd};
		const response = fetch("http://127.0.0.1:8080/user/login",{
			method: "POST",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify(user)
		})
		.then(res => res.json())
		.then((result) => {
			if(result.error===null) {
				changeUserId(result.userId);
				changeAuth(true);
				props.changePage("TopTopics")
			} else{
				setVisibleState("visible");
			}
		});
	}

	const handleEmailChange = (event) => {
		props.changeEmail(event.target.value);
	}

	const handlePwdChange = (event) => {
		setUserPwd(event.target.value);
	}

    const handleSignUp = (event) => {
        event.preventDefault();
        //props.history.push("/SignUp");
        navigate('/SignUp');
    }

	return (
		<div style={{paddingTop:"5%"}}>
			<form style={{display: "grid", placeItems: "center"}}>
				<hr style={{width:"100%"}}></hr>
				<p>Log in with your email address</p>
				<input style={styles.input} placeholder="Email" onChange={handleEmailChange} type="text"></input>
				<input style={styles.input} placeholder="Password" onChange={handlePwdChange} type="password"></input>
				<p style={{visibility: visibleState}}>Usuario y/o contraseña invalidos</p>
			</form>
			<div style={{display: "grid", placeItems:"center"}}>
                <button onClick={handleLoginWeb}>Login</button>
                <button onClick={handleSignUp}>SignUp</button>
			</div>
		</div>
	);
};

export default LoginForm;