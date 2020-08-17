import React, { Component } from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import FetchUser from '../containers/FetchUser';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
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

  render(props) {
    return (
      <div >
        {/* {console.log(this.props.fetchUser(this.state.data))} */}
        <button onClick={() =>this.props.fetchUser(this.state.data)} > 
        Todos Button</button>
        <FetchUser />
      </div>
    )
  }
}
export default connect(null, { fetchUser })(Users);
