import React, {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';

const AddProduct = (props) => {

	const [prodName, setName] = useState('');
	const [prodDescription, setDescription] = useState('');
	const [prodPrice, setPrice] = useState(0);
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');

    const {userId} = useContext(UserContext);

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
    
    const handleImage1Change = (event) => {
        setImage1(event.target.value);
    }

    const handleImage2Change = (event) => {
        setImage2(event.target.value);
    }
    
    const handleImage3Change = (event) => {
        setImage3(event.target.value);
    }

	const handleSubmit = (event) => {
		event.preventDefault();
		const product = {
            name:prodName,
            description:prodDescription,
            price:prodPrice,
            userId:userId,
            imagesUrl: [image1, image2, image3]
        }
		console.log(product);
		fetch("http://127.0.0.1:8080/product",{
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
			<form onSubmit={handleSubmit} className="centered-display padding-16 gap-1 text-align-left">
				<div className='input-form'>
					<label>Name</label>
					<input className="push-right border-radius" type="text" onChange={handleNameChange} placeholder="name" required></input>
				</div>
				<div className='input-form'>
					<label>Description</label>
					<input className="push-right border-radius" type="text" onChange={handleDescriptionChange} placeholder="Description" required></input>
				</div>
				<div className='input-form'>
					<label>Price</label>
					<input className="push-right border-radius" type="text" onChange={handlePriceChange} placeholder="price" required></input>
				</div>
                <div className='input-form'>
					<label>image 1</label>
					<input className="push-right border-radius" type="text" onChange={handleImage1Change} placeholder="price" ></input>
				</div>
                <div className='input-form'>
					<label>image 2</label>
					<input className="push-right border-radius" type="text" onChange={handleImage2Change} placeholder="price" ></input>
				</div>
                <div className='input-form'>
					<label>image 3</label>
					<input className="push-right border-radius" type="text" onChange={handleImage3Change} placeholder="price" ></input>
				</div>
				<div className='centered-display gap-1'>
					<input type="submit" value="Add Product"></input>
					<button onClick={() => navigate("/dashboard")}>Go back</button>
				</div>
			</form>
		</div>
	)
}

export default AddProduct