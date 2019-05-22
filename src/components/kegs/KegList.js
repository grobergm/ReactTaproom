import React from 'react';
import Keg from './Keg';
import { connect } from 'react-redux';

function KegList(props){
	console.log(props)
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
				props.kegList.map((keg,index)=>{
					return <Keg 
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

const mapStateToProps=state=>{
	return {
		kegList:state.kegList,
	}
}
		
export default connect(mapStateToProps)(KegList);