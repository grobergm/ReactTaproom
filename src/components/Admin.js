import React from 'react';
import kegroom from '../img/admin.jpg'
import KegList from './KegList'


function Admin(){
	const background={
		backgroundImage:`url(${kegroom})`,
		backgroundSize:'cover',
		height:'90vh'
	}
	return(
		<div style={background}>
			<h1>Administration</h1>
			<KegList />
		</div>
		)
}

export default Admin;