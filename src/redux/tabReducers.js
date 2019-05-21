const initialState={
	selected:null,
	tabList:[]
}

const tab=(state,action)=>{
	switch(action.type){
		case 'ADD_TO_ORDER':
			if(state.id!==action.id){
				return state
			}
				return {
					...state,
					order: state.order.concat(action.drink)
				}
		case 'SELECT_TAB':
			return Object.assign({},state,{selected:action.tab});
		default:
			return state
	}
}


const tabList=(state=initialState,action)=>{
	switch(action.type){
		case 'ADD_TAB':
			return state.tabList.concat(action.tab)
		case 'ADD_TO_ORDER':
			return state.tabList.map(t=>tab(t,action))
		case 'SELECT_TAB':
			return tab(state,action);
		default:
			return state;
	}
}

export default tabList;