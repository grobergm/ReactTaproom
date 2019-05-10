import React from 'react';

function LoginControl(props){
	let _username=null;
	let _password=null;

	function handleLoginSubmission(event){
		event.preventDefault();
		if(_username.value&&_password.value){
			props.onLogin({username:_username.value,password:_password.value})
			_username.value='';
			_password.value='';
		}
	}
	return(
		<div>
			<form className='flex-col' onSubmit={handleLoginSubmission}>
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
				<button type='submit' style={{border:'none', color:'white', width:'100%'}} className='red-btn'>Login</button>
			</form>
			<div style={{backgroundColor:'rgba(0,0,0,0.8)'}}>
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
							props.userData.map((user,index)=>{
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
		</div>
		)
}

export default LoginControl


