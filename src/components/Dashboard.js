import React, { useContext, useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import '../styles/styles_css.css';

const Dashboard = (props) => {

	let navigate = useNavigate();

    const {changeAuth, changeUserEmail, changeUserId, userId} = useContext(UserContext);

	const [products, setProducts] = useState([]);

	useEffect( () => {
		fetch(`http://127.0.0.1:8080/product/user/${userId}`)
		.then(res => res.json())
		.then((result) => {
			setProducts(result);
		}
		)},[userId]);

	const createNewProduct = (event) => {
		event.preventDefault();
		navigate('/add-product')
	}

	const viewPass = (event) => {
		navigate(`/view-product/${+event.target.innerHTML}`);
	}

    const editPass = (event) => {
        let prodId = event.target.parentElement.parentElement.previousSibling.previousSibling.parentElement.firstChild.firstChild.firstChild.innerHTML;
        navigate(`/edit-product/${+prodId}`);
    }
	
	const renderProducts = () => {
		return products.map(prod => (
			<tr key={prod.productId}>
				<td className='padding-16'>
					<p onClick={viewPass}>
						<u>{prod.productId}</u>
					</p>
				</td>
				<td className='padding-16'>
					{prod.description}
				</td>
                <td className='padding-16'>
                    <p onClick={editPass}>
						<u>edit</u>
					</p>
                </td>
			</tr>
		))
	}

	const logout = () => {
        changeAuth(false);
        changeUserEmail('');
        changeUserId(0)
		navigate("/");
	}

  	return (
		<div className='[ centered-display ] [ height-min darker-bg text-light ]'>
			<h2>Dashboard</h2>
			<div>
				{
					products.length<=0  ? 
					<div className='centered-display text-light'>
						<img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" alt=""></img>
						<p>It seems like you haven't created any products yet</p>	
					</div>
					:
					<div className='centered-display text-light'>
						<table>
							<thead>
								<tr>
									<th>Id</th>
									<th>Description</th>
								</tr>
							</thead>
							<tbody>
								{renderProducts()}
							</tbody>
						</table>
					</div>
				}
			</div>
			<input onClick={createNewProduct} type="button" value="Add New Product"></input>
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default Dashboard