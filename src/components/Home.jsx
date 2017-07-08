import React, { Component } from 'react';
import '../styles/home.css'
import CodeEditor from './CodeEditor'

class Home extends Component {

  render() {
    return (
      <div>
        <h2>I am Home</h2>
        <CodeEditor />
      </div>
    )
  }
}

export default Home;
