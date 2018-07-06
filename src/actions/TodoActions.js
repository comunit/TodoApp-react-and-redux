import { GET_TODO, ADD_TODO, DELETE_TODO  } from './types';



export const addTodo = todo => dispatch => {
  dispatch({
    type: ADD_TODO,
    payload: todo
  })
}

export const getTodo = () => dispatch => {
  dispatch({
    type: GET_TODO,
  })
}

export const deleteTodo = (index) => dispatch => {
  dispatch({
    type: DELETE_TODO,
    payload: index
  })
}