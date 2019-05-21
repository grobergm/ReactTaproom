import { combineReducers } from 'redux';
import kegList from './kegReducers';
import tabList from './tabReducers';

const rootReducer=combineReducers({
	kegList,
	tabList
})

export default rootReducer;