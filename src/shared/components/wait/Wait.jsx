import { connect } from 'react-redux';
import component from './WaitView';


const mapStateToProps = (state, ownProps) => {
  return {
    waitText: state.shared.waitText,
    isRequesting: state.shared.isRequesting,
  };
};

export default connect(mapStateToProps, null)(component);
