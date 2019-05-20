import kegArray from '../models/kegData';

const kegReducer=(state,action)=>{
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


const kegListReducer=(state=[],action)=>{
	switch(action.type){
		case 'POUR_DRINK':
			return state.map(k=>kegReducer(k,action))
		default:
			return state;
	}
}

export default kegListReducer;