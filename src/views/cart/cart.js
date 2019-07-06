import React, { Component } from 'react';
import './cart.css';
import Header from '../../shared/header/header';
import { connect } from 'react-redux';
import * as Actions from '../../redux/action_creators/action_creator';
import axios from 'axios';
import CartItem from './components/cart_item/cart_item';

class Cart extends Component {

	componentDidMount(){
		// axios.get('/api/cart')
		// .then(({data})=>{
		// 	if (data.success) {
		// 		this.props.setCart(data.cartItems);
		// 	} else if (!data.isLoggedIn) {
		// 		this.props.history.push('/');
		// 	} else {
		// 		alert('something blew up');
		// 	}
		// })
	}
	removeFromCart = (id) => {
		// axios.delete(`/api/cart/${id}`)
		// .then(({data})=>{
		// 	if (data.success) {
		// 		this.props.setCart(data.cartItems);
		// 	} else if (!data.isLoggedIn) {
		// 		this.props.history.push('/');
		// 	} else {
		// 		alert('something blew up');
		// 	}
		// })
	}

	render() {
		const cartItems = this.props.cartItems.map((e)=>{
			return <CartItem key={e.id} removeFromCart={this.removeFromCart} id={e.id} image_url={e.image_url} price={e.price} name={e.name} />
		})
		return (
			<div className="cart">
				<Header />
				{cartItems}
			</div>
		);
	}
}

export default connect(state => state, Actions)(Cart) ;
