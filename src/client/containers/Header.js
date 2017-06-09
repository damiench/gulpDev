import Header from '../components/Header';
import { connect } from 'react-redux';

const getAuthStateToProps = (state, ownProps) => {
	return {
		authorized: state.authorized
	};
};

export default connect(getAuthStateToProps)(Header);
