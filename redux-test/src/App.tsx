
import './App.css'
import Dispaly from './Display'
import CounterA from './CounterA'
import CounterB from './CounterB'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {

  return (
    <Provider store={store} >
    <Dispaly />
    <CounterA />
    <CounterB />
    </Provider>
  )
}

export default App;
