import React from 'react';
import Keg from './Keg';
import kegArray from '../models/kegData';

function KegList(props){
	
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(4,20%)',
		justifyContent:'center',
		gridGap:'1vw',
		paddingTop:'3vw',

	}

	return(
		<div style={grid}>
			{
				kegArray.map((keg,index)=>{
					return <Keg 
									id={keg.id}
									name={keg.name}
									brewery={keg.brewery}
									type={keg.type}
									price={keg.price}
									abv={keg.abv}
									admin={props.admin}
									key={index} />
				})
			}
		</div>
		)
}

export default KegList;