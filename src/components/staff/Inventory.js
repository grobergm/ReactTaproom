import React from 'react';
import kegroom from '../../img/admin.jpg'
import KegList from '../kegs/KegList'
import AddKeg from '../kegs/AddKeg';


function Admin(){
	const background={
		backgroundImage:`url(${kegroom})`,
		backgroundSize:'cover',
		height:'90vh',
		overfloxY:'hidden'
	}
	return(
		<div style={background}>
			<h1 style={{color:'black'}}>Admin Mode</h1>
			<AddKeg />
			<KegList admin={true} />
		</div>
		)
}

export default Admin;