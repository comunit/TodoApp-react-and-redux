import { GET_TODO, ADD_TODO } from '../actions/types';

const initialState = {
  todoList: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO:
    return {
      ...state,
      todoList: [action.payload, ...state.todoList]
    }
    case GET_TODO:
    return {
      ...state,
    }
    default:
    return state;
  }
}