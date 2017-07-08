import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Animations from './Animations'
import Buttons from './Buttons'
import Forms from './Forms'

class Main extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/animations' component={Animations}/>
          <Route path='/buttons' component={Buttons}/>
          <Route path='/forms' component={Forms}/>
        </Switch>
      </main>
    )
  }
}

export default Main;
