import React from 'react';
// import React, { Component } from 'react'
// import Todo from './Todo'

function AlbumData ({ albums }) {
  return(
  <ul> { albums.map(item => (
          item.data.map((value, index) => (  
            <li key = { index }> 
              UserId : {value.userId}<br />
              id : {value.id}<br />
              title : {value.title}
            </li>  
          ))
        ))}
  </ul>
 );
};

export default AlbumData;


                
         
               
