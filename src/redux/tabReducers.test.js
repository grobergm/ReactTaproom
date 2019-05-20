import tabListReducer from './tabReducers';

describe('tabReducer',()=>{
	const initialState=
	[
		{
			id:'aoijijasdoijo',
			order:[]
		}
	]
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
			{id:'lasdlklaskd',order:[]}
		]
		expect(tabListReducer(initialState,action)).toEqual(nextState);
	})
})