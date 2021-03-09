import Play from '../components/Play';
import { connect } from 'react-redux';
import { actionPlay } from '../redux/action';

const mapDispatchToProps = (dispatch) => {
    return{
        handleClick: () => {
            dispatch(actionPlay())
        }
    }

}

export default connect(null, mapDispatchToProps)(Play);