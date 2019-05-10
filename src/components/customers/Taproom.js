import React from 'react';
import pour from '../../img/keglist.jpg';
import KegList from '../kegs/KegList';
import Tab from './Tab';

function Taproom(props){
	const background={
		backgroundImage:`url(${pour})`,
		backgroundSize:'cover',
		height:'90vh'
	}
	return(
		<div style={background} >
			<h1>Current Selection</h1>
			<KegList admin={false} />
			<Tab onCheckTab={props.onCheckTab} tabs={props.tabs} />
		</div>
	)
};

export default Taproom;