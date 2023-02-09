import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../store/TodoSlice'
import TodoReducers from '../store/TodoStore/reducers'
import { combineReducers } from 'redux'

const store = configureStore({
  reducer: combineReducers({
    CounterReducer: counterSlice.reducer,
    TodoReducers
  })
})

export default store
