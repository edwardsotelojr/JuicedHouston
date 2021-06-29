import { connect } from 'react-redux'
import User from '../pages/User'
const mapStateToProps = (state) => ({
    user: state.auth.user,
});



export default connect(
    mapStateToProps,
    null
)(User)
