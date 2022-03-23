import React, { useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import '../styles/styles_css.css';

const Dashboard = (props) => {

	let navigate = useNavigate();

	const [products, setProducts] = useState([]);

	useEffect( () => {
		fetch(`http://127.0.0.1:8080/product/user/${JSON.parse(localStorage.getItem('user')).userId}`)
		.then(res => res.json())
		.then((result) => {
			setProducts(result);
		}
		)},[]);

	const createNewProduct = (event) => {
		event.preventDefault();
		navigate('/add-product')
	}

	const editPass = (event) => {
		navigate(`/edit-product/${+event.target.innerHTML}`);
	}
	
	const renderProducts = () => {
		return products.map(prod => (
			<tr key={prod.productId}>
				<td>
					<p onClick={editPass}>
						<u>{prod.productId}</u>
					</p>
				</td>
				<td>
					{prod.description}
				</td>
			</tr>
		))
	}

	const logout = () => {
		localStorage.clear();
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