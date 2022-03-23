import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditProduct = (props) => {

	let { id } = useParams();

	const [prodName, setName] = useState('');
	const [prodDescription, setDescription] = useState('');
	const [prodPrice, setPrice] = useState(0);

	let navigate = useNavigate();

	useEffect(
		() => {
			fetch(`http://127.0.0.1:8080/product/${id}`)
			.then(res => res.json())
			.then(
				(result) => {
					setName(result.name);
					setDescription(result.description);
					setPrice(result.price);
				}
			)
		},[]);

	const handleNameChange = (event) => {
		setName(event.target.value);
	}

	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	}

	const handlePriceChange = (event) => {
		setPrice(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		const product = {
			name: prodName,
			description: prodDescription,
			price: prodPrice,
			userId: JSON.parse(localStorage.getItem('user')).userId}
		console.log(product);
		const response = fetch(`http://127.0.0.1:8080/product/${id}`,{
			method: "PUT",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify(product)
		})
		.then(res => res.json())
		.then((result) => {
			console.log(result);
			if(result!=null) {
				navigate('/dashboard');
			} else{
				console.log('error')
			}
		});
	}
	
	return (
		<div className="[ centered-display ] [ height-min darker-bg text-light ]"> 
			<h2>EditProduct {id}</h2>
			<form onSubmit={handleSubmit} className="padding-16 text-align-left">
				<div className='input-form'>
					<label>Name</label>
					<input className="push-right border-radius" type="text" value={prodName} onChange={handleNameChange} placeholder="name" required></input>
				</div>
				<div className='input-form'>
					<label>Description</label>
					<input className="push-right border-radius" type="text" value={prodDescription} onChange={handleDescriptionChange} placeholder="Description" required></input>
				</div>
				<div className='input-form'>
					<label>Price</label>
					<input className="push-right border-radius" type="text" value={prodPrice} onChange={handlePriceChange} placeholder="price" required></input>
				</div>
				<div className='centered-display'>
					<input type="submit" value="Edit Product"></input>
					<button onClick={() => navigate("/dashboard")}>Go back</button>
				</div>
			</form>
		</div>
	)
}

export default EditProduct;
