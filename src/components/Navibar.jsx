import React, { Component } from 'react';
import { Link, render } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../library/test.css'

class Navibar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      name: '',
    }

    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({name:e.target.value})
  }

  add(){
    var arr = this.state.data.slice();
    arr.push({'id':(new Date()).getTime(),'name':this.state.name})
    this.setState({data:arr})
  }


  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          transitionName="anim"
          transitionAppear={true}
          transitionAppearTimeout={5000}
          transitionEnter={false}
          transitionLeave={false}>
          <h2>HOLY SHIT!!</h2>
        </ReactCSSTransitionGroup>

        <div>
          Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />
        </div>

        <ul>
          <ReactCSSTransitionGroup
            transitionName="anim"
            transitionAppear={false}
            transitionEnterTimeout={5000}
            transitionEnter={true}
            transitionLeave={false}>
              {this.state.data.map(function(player) {
                   return <li key={player.id}>{player.name}</li>
                })
              }
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
}

export default Navibar;
