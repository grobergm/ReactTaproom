const tabReducer=(state,action)=>{
	switch(action.type){
		case 'ADD_TO_ORDER':
			if(state.id!==action.id){
				return state
			}
				return {
					...state,
					order: state.order.concat(action.drink)
				}
		default:
			return state
	}
}


const tabListReducer=(state,action)=>{
	switch(action.type){
		case 'ADD_TAB':
			return state.concat(action.tab)
		case 'ADD_TO_ORDER':
			return state.map(t=>tabReducer(t,action))
		default:
			return state;
	}
}

export default tabListReducer;