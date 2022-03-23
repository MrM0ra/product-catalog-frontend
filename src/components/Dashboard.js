import React, {useContext, useEffect, useState} from 'react'
import { UserContext } from '../context/UserContext';

const Dashboard = (props) => {

    const {userId} = useContext(UserContext);

    const [products, setProducts] = useState([]);

	useEffect( () => {
		fetch(`http://127.0.0.1:8080/product/user/${JSON.parse(localStorage.getItem('user')).userId}`)
		.then(res => res.json())
		.then((result) => {
			setProducts(result);
		}
		)},[]);

  return (
    <div>
        <h2>Dashboard</h2>
        <div>
            {
                products.length<=0  ? 
                <div>
				    <img src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" alt=""></img>
				    <p>It seems like you haven't created any products yet</p>
				    <input onClick={() => props.changePage("AddTopic")} type="button" value="Add New Topic"></input>
			    </div>
                :
                <div>
                    productos creados por el Usuario
                </div>
            }
        </div>
    </div>
  )
}

export default Dashboard