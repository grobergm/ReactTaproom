import React from 'react';
import Keg from './Keg';
import { connect } from 'react-redux';

function KegList(props){
	console.log(props);
	const grid={
		display:'grid',
		gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))',
		justifyContent:'center',
		gridGap:'1vw',
		paddingTop:'3vw'
	}

	return(
		<div style={grid}>	
			{
				props.kegs.map((keg,index)=>{
					return <Keg 
									onAddDrinkToTab={()=>props.onAddDrinkToTab(keg)}
									id={keg.id}
									name={keg.name}
									brewery={keg.brewery}
									type={keg.type}
									price={keg.price}
									abv={keg.abv}
									admin={props.admin}
									pints={keg.pints}
									key={index} />
				})
			}
		</div>
		)
}

export default KegList;