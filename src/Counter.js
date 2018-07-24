import React from 'react';
import './Counter.css';
import { connect } from 'react-redux';

class Counter extends React.Component {
	constructor(props){
		super(props);

		this.increment1 = this.increment1.bind(this);
		this.decrement1 = this.decrement1.bind(this);
		this.increment10 = this.increment10.bind(this);
		this.decrement10 = this.decrement10.bind(this);
	}
  
	increment1() {
		this.props.dispatch({ type: 'INCREMENT1' });
	}

	increment10() {
		this.props.dispatch({ type: 'INCREMENT10' });
	}
  
	decrement1() {
		this.props.dispatch({ type: 'DECREMENT1' });
	}

	decrement10() {
		this.props.dispatch({ type: 'DECREMENT10' });
	}

	render() {
		return (
			<div className='counter'>
				<h2>Counter</h2>

				<div className='buttons'>
					<button onClick={this.decrement10}>--</button>
					<button onClick={this.decrement1}>-</button>
					<span style={{ padding:'5px'}}>{this.props.count}</span>
					<button onClick={this.increment1}>+</button>
					<button onClick={this.increment10}>++</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(store) {
	return {
		count: store.alphaCount
	};
}

export default connect(mapStateToProps)(Counter);