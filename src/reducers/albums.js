const albums = (state = [], action) => {
    // console.log(action);
    switch (action.type) {
      case 'FETCH_ALBUM':
        return[...state,
            {data: action.data, }
        ]
      default: 
        return state;
    }
    
  }

export default albums;