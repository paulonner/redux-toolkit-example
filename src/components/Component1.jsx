import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/TodoStore/actions-creator'
import { increment, decrement } from '../store/TodoSlice'

const Component1 = () => {
  const [ todo, setTodo ] = useState('')
  const dispatch = useDispatch()

  const handleTodo = () => {
    dispatch(addTodo(todo))
  }

  return (
    <div>
      <div>
        <input type="text" value={todo} onChange={({ target: { value } }) => setTodo(value)} />
      </div>
      <button onClick={handleTodo}>ADD TODO</button>
      <div>
        <button onClick={() => dispatch(increment(10))}>Increment</button>
        <button onClick={() => dispatch(decrement(10))}>Decrement</button>
      </div>
    </div>
  )
}

export default Component1