const tabListReducer=(state,action)=>{
	switch(action.type){
		case 'ADD_TAB':
		 return state.concat(action.tab)
		default:
			return state;
	}
}

export default tabListReducer;