const todos = (state = [], action) => {
    // console.log(action);
    switch (action.type) {
      case 'FETCH_TODO':
        return[...state,
            {data: action.data, }
        ]
      default: 
        return state;
    }
    
  }

export default todos;