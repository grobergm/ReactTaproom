const initialState={
	selected:null,
	tabList:[]
}

// MOCK DATA SHOULD ALL COME FROM ONE SOURCE FOR REDUCER TESTS

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
			return Object.assign({},state,{selected:action.id});
		// case 'TOGGLE_POUR':
		// 	if (state.id!==action.tabId){
		// 		return state
		// 	}
		// 	const pourDrinkIndex=state.orders.findIndex(drink=>{return drink.id===action.id});
		// 	const newOrders=state.selected.orders.slice()
		// 	newOrders[pourDrinkIndex].poured=!newOrders[pourDrinkIndex].poured;
		// 	const newTab=Object.assign({},state.selected,{orders:newOrders})
		// 	return Object.assign({},state,{selected:newTab})
		default:
			return state
	}
}


const tabList=(state=initialState,action)=>{
	switch(action.type){
		case 'ADD_TAB':
			return {
			selected:state.selected,
			tabList:state.tabList.concat(action.tab)
			}
			
		case 'ADD_TO_ORDER':
			return {
			selected:state.selected,
			tabList:state.tabList.map(t=>tab(t,action))
			}
		case 'SELECT_TAB':
			return tab(state,action);
		// case 'TOGGLE_POUR':
		// 	return state.tabList.map(t=>tab(t.action))
		default:
			return state;
	}
}

export default tabList;