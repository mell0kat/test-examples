import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactForm from './ReactForm'
import { Provider } from 'react-redux'
import Store from './Store'

class App extends React.Component {
  render () {
    return (
      <Provider store={Store}>
        <Router>
          <div>
            <Route exact path='/' component={ReactForm} />
          </div>
        </Router>
      </Provider>
    )
  }
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)
