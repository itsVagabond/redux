import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Counter from './Counter';

const initialState = {
	alphaCount: 4,
	betaCount: 42,
	gammaCount: 421
};

function shouldBeNamedAsReducer(state = initialState, action) {
	switch(action.type) {
	case 'INCREMENT1': 
		return {
			alphaCount: state.alphaCount + 1,
			betaCount: state.betaCount + 1,
			gammaCount: state.gammaCount + 1
		};
	case 'DECREMENT1':
		return {
			alphaCount: state.alphaCount - 1,
			betaCount: state.betaCount - 1,
			gammaCount: state.gammaCount - 1
		};
	case 'INCREMENT10': 
		return {
			alphaCount: state.alphaCount + 10,
			betaCount: state.betaCount + 10,
			gammaCount: state.gammaCount + 10
		};
	case 'DECREMENT10':
		return {
			alphaCount: state.alphaCount - 10,
			betaCount: state.betaCount - 10,
			gammaCount: state.gammaCount - 10
		};
	default:
		return state;
	}
}

const myStore = createStore(shouldBeNamedAsReducer);

const App = () =>{
	return(
		<Provider store={myStore}>
			<Counter />
		</Provider>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));