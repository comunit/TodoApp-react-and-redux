import { GET_TODO, ADD_TODO, DELETE_TODO } from '../actions/types';

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
    case DELETE_TODO:
    return {
      ...state,
      todoList: state.todoList.filter(todoList => todoList.id !== action.payload),
    } 
    default:
    return state;
  }
}