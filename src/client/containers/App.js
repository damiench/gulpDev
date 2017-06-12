import App from '../components/App';
import { connect } from 'react-redux';

const getStateToProps = (state, ownProps) => {
	return {
		// authorized: state.authorized
	};
};

export default connect(getStateToProps)(App);
