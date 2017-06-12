import Header from '../components/Header';
import { connect } from 'react-redux';

const getStateToProps = (state, ownProps) => {
	return {
		authorized: state.authorized
	};
};

export default connect(getStateToProps)(Header);
