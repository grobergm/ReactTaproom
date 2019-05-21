import tabListReducer from './tabReducers';

describe('tabReducer',()=>{
	const initialState=[
		{id:'aoijijasdoijo',order:[]},
		{id:'aasdsadsdsdasijo',order:[]}
	];

	test('it returns initial state if unknown action',()=>{
		expect(tabListReducer(initialState,{type:null})).toEqual(initialState)
	})

	test('add tab to tabList',()=>{
		const action={
			type:'ADD_TAB',
			tab: {id:'lasdlklaskd',order:[]}
		};
		const nextState=[
			{id:'aoijijasdoijo',order:[]},
			{id:'aasdsadsdsdasijo',order:[]},
			{id:'lasdlklaskd',order:[]}
		]
		expect(tabListReducer(initialState,action)).toEqual(nextState);
	})

	test('add drink to selected tab order',()=>{
		const action={
			type:'ADD_TO_ORDER',
			id:'aasdsadsdsdasijo',
			drink:{name:'sleigher',price:4}
		}
		const nextState=[
			{id:'aoijijasdoijo',order:[]},
			{id:'aasdsadsdsdasijo',order:[{name:'sleigher',price:4}]}
		]
		expect(tabListReducer(initialState,action)).toEqual(nextState);
	})
})