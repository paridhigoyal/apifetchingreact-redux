import React, { Component } from 'react';
import { fetchTodo } from '../actions';
import { connect } from 'react-redux';
import FetchTodo from '../containers/FetchTodo';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => 
      response.json())
      .then((response) => {
        // console.log(response);
        this.setState
        ({
          data: response,
        });
      },
      )
  }

  render() {
    return (
      <div >
        {/* {console.log(this.props.fetchTodo(this.state.data))} */}
        <button onClick={() => this.props.fetchTodo(this.state.data)} > 
        Todos Button</button>
        <FetchTodo />
      </div>
    )
  }
}
export default connect(null, { fetchTodo })(Todos);
