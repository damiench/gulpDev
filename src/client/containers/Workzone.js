import Workzone from '../components/Workzone/Workzone';
import { connect } from 'react-redux';

const getStateToProps = (state, ownProps) => {
	return {
		stage: state.stage
	};
};

export default connect(getStateToProps)(Workzone);
