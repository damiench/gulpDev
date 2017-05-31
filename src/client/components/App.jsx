import React from 'react';

export default class App extends React.Component {
	componentDidMount() {
		console.log('lifecycle works');
	}

	render() {
		return (<div className='app'> 
				hello, {this.props.name}
			</div>);
	}
}