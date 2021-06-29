import { connect } from 'react-redux'
import Header from '../components/Header'
import { signin, logoutUser } from '../actions/authActions';

const mapStateToProps = (state) => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
    return{
    login: (userData) => dispatch(signin(userData)),
    logout: () => dispatch(logoutUser())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
