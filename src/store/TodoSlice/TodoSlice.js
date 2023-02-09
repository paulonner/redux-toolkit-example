import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'todos',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state, { payload }) => {
      state.value += payload
    },
    decrement: (state, { payload }) => {
      state.value -= payload
    }
  }
})

export const { increment, decrement } = counterSlice.actions