import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

const AddProduct = (props) => {

	const [prodName, setName] = useState('');
	const [prodDescription, setDescription] = useState('');
	const [prodPrice, setPrice] = useState(0);

	let navigate = useNavigate();

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
		const product = {name:prodName,description:prodDescription,price:prodPrice,userId:JSON.parse(localStorage.getItem('user')).userId}
		console.log(product);
		const response = fetch("http://127.0.0.1:8080/product",{
			method: "POST",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify(product)
		})
		.then(res => res.json())
		.then((result) => {
			if(result!=null) {
				navigate('/dashboard');
			} else{
				console.log('error')
			}
		});
	}

	return (
		<div className="[ centered-display ] [ height-min darker-bg text-light ]">
			<h2>Add Product</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name</label>
					<input type="text" onChange={handleNameChange} placeholder="name" required></input>
				</div>
				<div>
					<label>Description</label>
					<input type="text" onChange={handleDescriptionChange} placeholder="Description" required></input>
				</div>
				<div>
					<label>Price</label>
					<input type="text" onChange={handlePriceChange} placeholder="price" required></input>
				</div>
				<input type="submit" value="Add Product"></input>
			</form>
		</div>
	)
}

export default AddProduct