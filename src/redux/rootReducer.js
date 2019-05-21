import { combineReducers } from 'redux';
import kegList from './kegReducers';
import tabState from './tabReducers';

const rootReducer=combineReducers({
	kegList,
	tabState
})

export default rootReducer;