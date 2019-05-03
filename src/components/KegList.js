import React from 'react';
import Keg from './Keg';
import kegArray from '../models/kegData';
import pour from '../img/keglist.jpg';

function KegList(){
	const background={
		backgroundImage:`url(${pour})`,
		backgroundSize:'cover',
		height:'90vh'
	}
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(4,20%)',
		justifyContent:'center'
	}
	return(
		<div style={background} >
			<div style={grid}>
				{
					kegArray.map((keg,index)=>{
						return <Keg 
										name={keg.name}
										brewery={keg.brewery}
										type={keg.type}
										key={index} />
					})
				}
			</div>
		</div>
		)
}

export default KegList;