import kegListReducer from './reducers';
import kegArray from '../models/kegData';

describe('kegListReducer',()=>{
	const initialState=[
		{
			id:'asdasdsadeawe',
			pints:0
		},
		{
			id:'qpowpopowpwop',
			pints:0
		},
		{
			id:'dfsgdsfgdfsg',
			pints:0
		},
	]
	test('Should return initial state if given unknown action',()=>{
		expect(kegListReducer(initialState,{type:null})).toEqual(initialState);
	});

	test('should increment pints for matching keg id',()=>{
		const nextState=[
			{
				id:'asdasdsadeawe',
				pints:0
			},
			{
				id:'qpowpopowpwop',
				pints:0
			},
			{
				id:'dfsgdsfgdfsg',
				pints:1
			},
		];
		const action={
			type:'POUR_DRINK',
			id:'dfsgdsfgdfsg'
		}
		expect(kegListReducer(initialState,action)).toEqual(nextState);
	});

	test('Should add a keg object to the initial state',()=>{

		const action={
			type:'ADD_KEG',
			keg:{
				id:'oiiowioiiow',
				pints:0
			}
		}
		const nextState=
		[
			{
				id:'asdasdsadeawe',
				pints:0
			},
			{
				id:'qpowpopowpwop',
				pints:0
			},
			{
				id:'dfsgdsfgdfsg',
				pints:0
			},
			{
				id:'oiiowioiiow',
				pints:0
			}
		]
		expect(kegListReducer(initialState,action)).toEqual(nextState);
	});

	test('should remove keg with matching action id',()=>{
		const action={
			type:'DELETE_KEG',
			id:'qpowpopowpwop'
		}
		const nextState=[
			{
				id:'asdasdsadeawe',
				pints:0
			},
			{
				id:'dfsgdsfgdfsg',
				pints:0
			},
		];
		expect(kegListReducer(initialState,action)).toEqual(nextState);
	})
})