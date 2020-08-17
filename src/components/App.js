import React, { Component } from 'react'
import Todos from './Todos';
import Albums from './Albums';
import Users from './Users';
import UserDetail from './UserDetail';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
export class App extends Component {
  render(props) {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link><br /></li>
              <li>  <Link to="/todos">Todos</Link></li>
              <li> <Link to="/albums">Albums</Link>
              </li>
              <li> <Link to="/user">Users</Link></li>
              {/* <li> <Link to="/users">User Details</Link></li> */}
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/todos">
            < Todos />
          </Route>
          <Route path="/albums/" >
            <Albums />


          </Route>
          <Route path="/user/" >
            <Users />


          </Route>
          <Route path="/users/:userId"component={UserDetail}/>
           
           
       
        </Switch>

        {/* <div><Details history={this.props.history}/></div> */}
      </Router>

      // <div>
      //    <Todos /> 
      //    <Albums />
      // </div>
    )
  }
}

export default App
