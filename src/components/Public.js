import React from 'react';
import pour from '../img/keglist.jpg';
import KegList from './KegList'


function Public(){
	const background={
		backgroundImage:`url(${pour})`,
		backgroundSize:'cover',
		height:'90vh'
	}
	return(
		<div style={background} >
			<h1>Current Selection</h1>
			<KegList />
		</div>
	)
};

export default Public;