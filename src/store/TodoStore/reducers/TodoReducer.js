import { actions } from '../actions'

const initialState = {
  todos: []
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case actions.REMOVE_TODO:
      return {
        ...state,
        todos: state.filter(item !== action.payload)
      }
    default:
      return state
  }
}

export default TodoReducer