import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../redux/action_creators/action_creator';
import Register from './subview/register/register';

class Login extends Component {
	state = {
		email: '',
		password: '',
		showRegister: false
	};
	login = e => {
		e.preventDefault()
		console.log("hit the login")
		const loginObj = {
			email: this.state.email,
			password: this.state.password
		};
		axios.post('/api/login', loginObj).then(({ data }) => {
			console.log("back from DB")
			if (data.success) {
				this.props.setUser(data.user);
				this.props.history.push('/products');
			} else {
				alert('Wrong credentails');
			}
		});
	};
	showRegister = () => {
		this.setState({
			showRegister: true
		});
	};
	register = registerObj => {
		debugger;
		axios.post('/api/register', registerObj).then(({ data }) => {
			debugger;
			if (data.success) {
				this.props.setUser(data.user);
				this.props.history.push('/products');
			} else {
				alert('Email already exists login.');
			}
		})
		.catch (err=> {
			debugger
			console.log("error")
		}) 
	};

	handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
	render() {
		const register = this.state.showRegister ? <Register register={this.register} /> : '';
		return (
	
			<div className="login">
				{register}
				{this.state.showRegister ? ('') : (
					<div className="login box">
						<p>My Plan</p>
						<input
							type="text"
							placeholder="Email"
							name="email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<input
							type="text"
							placeholder="Password"
							name="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
						<button onClick={this.login}>Login</button>
						<button onClick={this.showRegister}>Register</button>
					</div>
				)}
			</div>
		
		);
	}
}

export default connect(state => state, actions)(Login);
