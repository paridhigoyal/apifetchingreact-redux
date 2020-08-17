import React, { Component } from 'react'

export class UserDetail extends Component {
constructor(props) {
super(props);
this.state = {
result :{}
};
}
componentDidMount() {
const { match: { params } } = this.props;
// axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
// .then(({ data: user }) => {
// console.log('user', user);
// this.setState({
// result: user
// });
// });

fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
.then((response) => response.json())

.then((response) => 
{
  
this.setState({
result:response,
});
},
)
}

render() {
  const { result } = this.state;

return (
<div>{console.log(result.id)}
{result.id}
{result.name}
  {/* {console.log(Object.keys(result).map(item=>item))} */}
  <ul>
  {/* {Object.keys(result).map(item=>result[item])} */}
  {/* Object.value(result).forEach(value => {
  console.log(` ${value}`)
}); */}
  </ul>
  {/* {this.state.result.map(item=>console.log(item))} */}
{/* {this.state.result.map(item=>item)} */}
{/* {this.state.result} */}
{/* {this.state.user.map = (item) =>(
<ul>
{console.log(item)}
</ul>
) } */}
</div>
)
}
}

export default UserDetail