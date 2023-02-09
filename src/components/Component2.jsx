import { useSelector } from 'react-redux'

const Component2 = () => {
  const { CounterReducer, TodoReducers: { TodoReducer } } = useSelector(state => state)

  return (
    <>
      <div>
        TODOS:
        {TodoReducer.todos.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
      <div>
        VALUE: {CounterReducer.value}
      </div>
    </>
  )
}

export default Component2
