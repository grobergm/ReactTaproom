import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import kegListReducer from './redux/reducers';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

const store= createStore(kegListReducer);
console.log(store.getState())


ReactDOM.render(
	<Provider store={store}>
		<App store={store} />
	</Provider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
