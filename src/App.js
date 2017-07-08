import React, { Component } from 'react';
import Navibar from './components/Navibar'
import Main from  './components/Main'

class App extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <Main />
      </div>
    )
  }
}

export default App;
