import React, { Component } from 'react'
import thunk from 'redux-thunk'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
  }

  logThunk() {
    console.log('Thunk:', thunk)
  }

  render() {
    return (
      <div className="App">
        this is my app
        { this.logThunk }
      </div>
    )
  }
}

export default App
