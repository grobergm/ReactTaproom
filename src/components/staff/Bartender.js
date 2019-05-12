import React from 'react';
import kegroom from '../../img/admin.jpg'
import KegList from '../kegs/KegList'
import AddKeg from '../kegs/AddKeg';


function Bartender(props){
	return(
		<div>
			<h1 style={{color:'black'}}>Bar Mode</h1>
			<AddKeg />
			<KegList kegs={props.kegs} admin={true} />
		</div>
		)
}

export default Bartender;