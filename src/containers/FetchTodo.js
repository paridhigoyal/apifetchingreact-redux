
import { connect } from 'react-redux';
import { fetchTodo } from '../actions';
import TodoData from '../components/TodoData';
const mapStateToProps = (state) => ({
  todos: state.todos
})
const mapDispatchToProps = dispatch => ({
  onClick : () => dispatch(fetchTodo())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoData)