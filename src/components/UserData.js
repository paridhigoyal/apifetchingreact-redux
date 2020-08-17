import React from 'react';
// import React, { Component } from 'react'
// import Todo from './Todo'
// import User from './User';
import { Link } from 'react-router-dom';


function UserData ({ users }) {

  return(
  <ul> 
    { users.map(item => (
          item.data.map((value, index) => (  
            <li key = { index }> 
              
              Id : {value.id}<br/>
              Name:{value.name}<br />
             Username : {value.username}<br/>
             Email:{value.email}<br/>
             <h4>Address:</h4>
             Street:{value.address.street}<br/>
             Suite:{value.address.suite}<br/>
             City:{value.address.city}<br/>
             Zipcode:{value.address.zipcode}<br/>
    
             Latitude:{value.address.geo.lat}<br/>
             Longitude:{value.address.geo.lng}<br/>
             Phone:{value.phone}<br/>
             Website:{value.website}<br/>
             <h4>Company:</h4>
             Name:{value.company.name}<br/>
             CatchPhrase:{value.company.catchPhrase}<br/>
             Bs:{value.company.bs}
             <Link to={`users/${value.id}`}><button>User Detail</button></Link>
             {/* <button onClick={console.log({this.props.User(value.id)})}> User Detail</button> */}

            </li>  

          ))
        ))}
  </ul>
 );
};

export default UserData;

