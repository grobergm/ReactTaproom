import kegArray from '../models/kegData';

const keg=(state,action)=>{
	switch(action.type){
		case 'POUR_DRINK':
			if(state.id!==action.id){
				return state
			}
			return {
				...state,
				pints:state.pints+1
			}
		default:
			return state;
	}
}


const kegList=(state=kegArray,action)=>{
	switch(action.type){
		case 'POUR_DRINK':
			return state.map(k=>keg(k,action))
		case 'ADD_KEG':
			return state.concat(action.keg);
		case 'DELETE_KEG':
			const index=state.findIndex(k=>{ return k.id===action.id});
			return state.slice(0,index).concat(state.slice(index+1));
		default:
			return state;
	}
}

export default kegList;