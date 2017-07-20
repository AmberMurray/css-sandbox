import React, { Component } from 'react'
import '../styles/resources.css'

class Animations extends Component {

  constructor(props) {
    super(props)

    this.state = {
      originalText: '',
      animationName: null,
      counter: 0,
    }
  }

  handleChange (e) {

  if(this.state.counter === 0) {
    try{
      let searchTerm = '.' + e.target.value
      let cssText = this.props.getStyleSheets(searchTerm, 'dotClass')

        let newArray = cssText.split(' ')
        let animationIndex = newArray.indexOf('animation:')

        if(animationIndex !== -1) {
          let animationName = newArray[animationIndex+1]
          let keyframeText = this.props.getStyleSheets(animationName, 'keyframe')

          this.props.alterAnimationState(e.target.value, cssText + '\n \n' + keyframeText, 'animations')

          this.setState({
            originalText: cssText + '\n \n' + keyframeText,
            animaitonName: animationName,
            counter: this.state.counter ++,
          })

        } else {
          this.props.alterAnimationState(e.target.value, cssText, 'animations')

          this.setState({
            originalText: cssText,
            counter: this.state.counter ++,
          })

        }
      } catch (error) {
        window.location.reload()
      }

    } else if(this.state.counter !== 0) {
      try {
        if(this.state.animationName) {
          this.props.alterAnimationState(e.target.value, this.state.originalText, 'animations')
        } else {
          this.props.alterAnimationState(e.target.value, this.state.originalText, 'animations')
        }
      } catch (error) {
        window.location.reload()
      }
    }
  }

  render() {

    console.log(this.state.counter);

    return (
      <div>
        <div className='animations-div'>
          <label id="animations-select">
            <h3 className='animations-label'>Animations</h3>
          </label>
        </div>
        <div>
          <select id="animations" onChange={this.handleChange.bind(this)}>
            <option id="animation-choice" value="play">Play!</option>
            <option id='fadeIn' value="fadeIn">Fade In</option>
            <option id='fadeOut' value="fadeOut">Fade Out</option>
          </select>
        </div>
      </div>
    )
  }
}

export default Animations
