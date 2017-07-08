import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './Main'
import Animations from './Animations'
import Buttons from './Buttons'
import Forms from './Forms'

class Routes extends Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/animations' component={Animations}/>
          <Route path='/buttons' component={Buttons}/>
          <Route path='/forms' component={Forms}/>
        </Switch>
      </main>
    )
  }
}

export default Routes;
