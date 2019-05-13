import React from 'react';
import {v4} from "uuid";

function AddKeg(props){

	let _name=null;
	let _brewery=null;
	let _type=null;
	let _abv=null;
	let _price=null;

	function handleAddKegSubmission(event){
		event.preventDefault();
		props.onAddNewKeg({id:v4(),name:_name.value, brewery:_brewery.value,type:_type.value,abv:_abv.value,price:parseInt(_price.value),pints:0})
		_name.value='';
		_brewery.value='';
		_type.value='';
		_abv.value='';
		_price.value='';
	}

	const formStyle={
		display:'flex',
		flexDirection:'column',
		margin:'0 25%'
	}

	return(

			<form style={formStyle} onSubmit={handleAddKegSubmission}>
				<input
					type='text'
					id='name'
					placeholder='name'
					ref={(input)=>{_name=input;}} />
				<input
					type='text'
					id='brewery'
					placeholder='brewery'
					ref={(input)=>{_brewery=input;}} />
				<input
					type='text'
					id='abv'
					placeholder='abv'
					ref={(input)=>{_abv=input;}} />
				<input
					type='text'
					id='type'
					placeholder='type'
					ref={(input)=>{_type=input;}} />
				<input
					type='number'
					id='price'
					placeholder='price'
					ref={(input)=>{_price=input;}} />
				<button className='blue-btn' type='submit'>Add Keg</button>
			</form>
		)
};

export default AddKeg;
