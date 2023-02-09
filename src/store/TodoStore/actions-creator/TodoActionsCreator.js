import { actions } from '../actions'

export const addTodo = (payload) => (dispatch) => {
  dispatch({
    type: actions.ADD_TODO,
    payload
  })
}

export const removeTodo = (payload) => (dispatch) => {
  dispatch({
    type: actions.REMOVE_TODO,
    payload
  })
}
