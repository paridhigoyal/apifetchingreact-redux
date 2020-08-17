const users = (state = [], action) => {
    // console.log(action);
    switch (action.type) {
      case 'FETCH_USER':
        return[...state,
            {data: action.data, }
        ]
      default: 
        return state;
    }
    
  }

export default users;