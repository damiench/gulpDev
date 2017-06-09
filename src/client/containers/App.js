import App from '../components/App';
import { connect } from 'react-redux';

const getAuthStateToProps = (state, ownProps) => {
	return {
		authorized: state.authorized
	};
};

export default connect(getAuthStateToProps)(App);
