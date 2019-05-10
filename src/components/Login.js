import React from 'react';
import flight from '../img/flight.jpg'
import KegList from './KegList'
import AddKeg from './AddKeg';
import { Link } from 'react-router-dom';
import users from '../models/userData'; 

function Login(){
	let _username=null;
	let _password=null;

	const background={
		backgroundImage:`url(${flight})`,
		backgroundSize:'cover',
		height:'100vh',
	}
	function authenticate(){

	}
	return(
		<div style={background}>
			<form>
				<input 
					type='text'
					id='username'
					placeholder='username'
					ref={input=>_username=input} />
				<input 
					type='password'
					id='password'
					placeholder='password'
					ref={input=>_password=input} />
				<button type='submit' style={{border:'none', color:'white'}} className='red-btn'>Login</button>
			</form>
				<Link to='/public'><div className='blue-btn'>See what's on tap</div></Link>
				<h2>Test User Data</h2>
				<table>
					<thead>
						<tr>
							<th>Username</th>
							<th>Password</th>
							<th>Role</th>
						</tr>
					</thead>
					<tbody>
						{
							users.map((user,index)=>{
								return (
									<tr key={index}>
										<td>{user.username}</td>
										<td>{user.password}</td>
										<td>{user.role}</td>
									</tr>)
							})
						}
					</tbody>
				</table>
		</div>
		)
}

export default Login;