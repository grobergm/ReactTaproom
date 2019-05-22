import tabListReducer from './tabReducers';

describe('tabReducer',()=>{
	const initialState={
		selected:null,
		tabList:[{id:'aoijijasdoijo',order:[{id:'ffddffjioje',name:'green flash',price:4,poured:false}]},{id:'aasdsadsdsdasijo',order:[]}]
	};

	test('it returns initial state if unknown action',()=>{
		expect(tabListReducer(initialState,{type:null})).toEqual(initialState)
	})

	test('add tab to tabList',()=>{
		const action={
			type:'ADD_TAB',
			tab: {id:'lasdlklaskd',order:[]}
		};
		const nextState={
			selected:null,
			tabList:[
				{id:'aoijijasdoijo',order:[{id:'ffddffjioje',name:'green flash',price:4,poured:false}]},
				{id:'aasdsadsdsdasijo',order:[]},
				{id:'lasdlklaskd',order:[]}
			]
		}
		expect(tabListReducer(initialState,action)).toEqual(nextState);
	})

	test('select tab',()=>{
		const action={
			type:'SELECT_TAB',
			id:'lasdlklaskd'
		}
		const nextState={
			selected:'lasdlklaskd',
			tabList:[
				{id:'aoijijasdoijo',order:[{id:'ffddffjioje',name:'green flash',price:4,poured:false}]},
				{id:'aasdsadsdsdasijo',order:[]}
			]
		}
		expect(tabListReducer(initialState,action)).toEqual(nextState);
	})

	test('add drink to selected tab order',()=>{
		const action={
			type:'ADD_TO_ORDER',
			id:'aasdsadsdsdasijo',
			drink:{id:'oioiwejoijioje',name:'sleigher',price:4,poured:false}
		}
		const nextState=[
			{id:'aoijijasdoijo',order:[{id:'ffddffjioje',name:'green flash',price:4,poured:false}]},
			{id:'aasdsadsdsdasijo',order:[{id:'oioiwejoijioje',name:'sleigher',price:4,poured:false}]}
		]
		expect(tabListReducer(initialState,action)).toEqual(nextState);
	});

	// test('toggle value of drink to poured or not poured',()=>{
	// 	const action={
	// 		type:'TOGGLE_POUR',
	// 		id:'ffddffjioje',
	// 	}
	// 	const nextState={

	// 	}
	// 	expect(tabListReducer(initialState,action)).toEqual(nextState);
	// })
})