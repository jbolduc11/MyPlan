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
	login = () => {
		debugger;
		const loginObj = {
			email: this.state.email,
			password: this.state.password
		};
		axios.post('/api/login', loginObj).then(({ data }) => {
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
		});
	};

	handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
	render() {
		const register = this.state.showRegister ? <Register register={this.register} /> : '';
		return (
		<form action="action_page.php">
			<div className="login">
				{register}
				{this.state.showRegister ? (
					''
				) : (
					<div>
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
		</form>
		);
	}
}

export default connect(state => state, actions)(Login);
