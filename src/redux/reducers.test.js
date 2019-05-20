import kegListReducer from './reducers';

describe('kegListReducer',()=>{
	test('Should return initial state if given unknown action',()=>{
		expect(kegListReducer([],{type:null})).toEqual([]);
	})
})