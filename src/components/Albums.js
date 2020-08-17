import React, { Component } from 'react';
import { fetchAlbum } from '../actions';
import { connect } from 'react-redux';
import FetchAlbum from '../containers/FetchAlbum';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
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
a
  render() {
    return (
      <div >
        {/* {console.log(this.props.fetchTodo(this.state.data))} */}
        <button onClick={() => this.props.fetchAlbum(this.state.data)} > 
        Album Button</button>
        <FetchAlbum />
      </div>
    )
  }
}
export default connect(null, { fetchAlbum })(Albums);
