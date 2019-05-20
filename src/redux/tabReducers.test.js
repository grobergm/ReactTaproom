import tabListReducer from './tabReducers';

describe('tabReducer',()=>{
	const initialState=
	[
		{
			id:'aoijijasdoijo',
			name:'Jack',
			table:'10',
			order:[]
		}
	]
	test('it returns initial state if unknown action',()=>{
		expect(tabListReducer(initialState,{type:null})).toEqual(initialState)
	})
})