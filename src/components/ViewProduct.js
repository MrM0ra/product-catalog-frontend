import React, {useEffect, useState, useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const ViewProduct = (props) => {

	let { id } = useParams();

    const {userId} = useContext(UserContext);

	const [prodName, setName] = useState('');
	const [prodDescription, setDescription] = useState('');
	const [prodPrice, setPrice] = useState(0);
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');

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
                    if(result.imagesUrl.length>0){
                        setImage1(result.imagesUrl[0]);
                        setImage2(result.imagesUrl[1]);
                        setImage3(result.imagesUrl[2]);
                    }
				}
			)
		},[id]);

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
			name: prodName,
			description: prodDescription,
			price: prodPrice,
			userId: userId,
            imagesUrl: [image1, image2, image3]
        }
		console.log(product);
		fetch(`http://127.0.0.1:8080/product/${id}`,{
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
			<h2>View Product {id}</h2>
			<form onSubmit={handleSubmit} className="centered-display padding-16 gap-1 text-align-left">
				<div className='input-form'>
					<label>Name</label>
					<input className="push-right border-radius" type="text" value={prodName} onChange={handleNameChange} placeholder="name" readOnly></input>
				</div>
				<div className='input-form'>
					<label>Description</label>
					<input className="push-right border-radius" type="text" value={prodDescription} onChange={handleDescriptionChange} placeholder="Description" readOnly></input>
				</div>
				<div className='input-form'>
					<label>Price</label>
					<input className="push-right border-radius" type="text" value={prodPrice} onChange={handlePriceChange} placeholder="price" readOnly></input>
				</div>
                <div className='input-form'>
					<label>image 1</label>
					<input className="push-right border-radius" type="text" value={image1} onChange={handleImage1Change} placeholder="image url" readOnly></input>
				</div>
                <div className='input-form'>
					<label>image 2</label>
					<input className="push-right border-radius" type="text" value={image2} onChange={handleImage2Change} placeholder="image url" readOnly></input>
				</div>
                <div className='input-form'>
					<label>image 3</label>
					<input className="push-right border-radius" type="text" value={image3} onChange={handleImage3Change} placeholder="image url" readOnly></input>
				</div>
				<div className='centered-display gap-1'>
					<input type="submit" value="Edit Product"></input>
					<button onClick={() => navigate("/dashboard")}>Go back</button>
				</div>
			</form>
		</div>
	)
}

export default ViewProduct;
