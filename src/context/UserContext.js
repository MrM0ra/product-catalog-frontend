import React, {createContext, useState} from "react";

export const UserContext = createContext();

export const AuthProvider = ({children}) => {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userId, setUserId] = useState('');
	const [auth, setAuth] = useState(false);
	const [editingProduct, setEditingProduct] = useState(0);

	const changeUserName = (args) => {
		setUserName(args);
	};

	const changeUserEmail = (args) => {
		setUserEmail(args);
	};

	const changeUserId = (args) => {
		setUserId(args);
	};

	const changeAuth = (args) => {
		setAuth(args);
	};
	
	const changeEditingProduct = (args) => {
		setEditingProduct(args);
	}

	return (
		<UserContext.Provider value={{auth, changeAuth, userId, 
		changeUserId, userName, changeUserName, userEmail, changeUserEmail,
		editingProduct, changeEditingProduct}}>
			{children}
		</UserContext.Provider>
	);

};