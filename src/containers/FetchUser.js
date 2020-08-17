import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import UserData from '../components/UserData';
const mapStateToProps = (state) => ({
  users: state.users
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(fetchUser())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserData)