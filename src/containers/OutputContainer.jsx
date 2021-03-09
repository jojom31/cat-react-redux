import Output from '../components/Output';

import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    //translate the Redux state into  React Props
    return {
        amount: state.activity
    }
}

export default connect(mapStateToProps)(Output);
