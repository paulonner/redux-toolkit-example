import { Provider } from 'react-redux'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import store from './store'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Component1 />
        <Component2 />
      </div>
    </Provider>
  )
}

export default App
