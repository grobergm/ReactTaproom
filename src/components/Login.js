import React from 'react';
import flight from '../img/flight.jpg'
import { Link } from 'react-router-dom';

function Login(props){
	let _username=null;
	let _password=null;

	const background={
		backgroundImage:`url(${flight})`,
		backgroundSize:'cover',
		height:'100vh',
	}
	function handleLoginSubmission(event){
		event.preventDefault();
		if(_username.value&&_password.value){
			props.onLogin({username:_username.value,password:_password.value})
			_username.value='';
			_password.value='';
		}

	}

	return(
		<div style={background}>
			<form onSubmit={handleLoginSubmission}>
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
							props.users.map((user,index)=>{
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