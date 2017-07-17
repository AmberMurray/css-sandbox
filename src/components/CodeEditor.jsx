import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/css'
import 'brace/theme/chrome'
import 'brace/snippets/css'
import 'brace/ext/language_tools'


class CodeEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cssRule: '',
      className: '',
      keyframeRule: '',
      keyframeName: '',
    }

    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.updateStyleSheets = this.updateStyleSheets.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    let className
    if(nextProps.animationClass) {
      className = nextProps.animationClass
    } else if (nextProps.buttonClass) {
      className = nextProps.buttonClass
    } else {
      className = nextProps.formClass
    }
    this.setState({ cssRule: nextProps.text, className: '.' + className, keyframeName: nextProps.animationName })
  }

  onChange (newValue) {
    if(this.state.keyframeName){
      let ruleSplit = newValue.split('@')
      this.setState({ cssRule: ruleSplit[0], keyframeRule: '@' + ruleSplit[1] })
    } else {
      this.setState({ cssRule: newValue})
    }
  }

  updateStyleSheets (newValue, searchParam) {
    let styleSheets = document.styleSheets
    let searchProp = this.props.animationName ? 'name' : 'selectorText'

    console.log('this is newValue:',newValue)
    console.log('this is searchParam:', searchParam)
    console.log('this is keyframerule:', this.state.keyframeRule);
    console.log('this is animaitonName:', this.state.keyframeName)
    console.log('this is searchProp:', searchProp); 

    for(let i = 0; i < styleSheets.length; i++) {
      console.log('first part of the loop', i);
	    if(styleSheets[i].cssRules) {
        for (let j = 0; j < styleSheets[i].cssRules.length; j++ ) {
          if(styleSheets[i].cssRules[j][searchProp] === searchParam) {
            console.log('rule to be deleted:', styleSheets[i].cssRules[j])
            styleSheets[i].deleteRule(j)
            styleSheets[i].insertRule(newValue, 0)
          }
        }
      }
    }
  }

  handleClick(e) {
    try {
      console.log(this.state.keyframeRule);
      if(this.state.keyframeRule) {
        // this.updateStyleSheets(this.state.cssRule, this.state.className)
        this.updateStyleSheets(this.state.cssRule + '\n \n' + this.state.keyframeRule, this.state.keyframeName)
      } else {
        this.updateStyleSheets(this.state.cssRule, this.state.className)
      }
    }
    catch (error) {
      console.log('You suck because ' + error);
    }
  }

  render() {

    return (
      <div>
        <AceEditor
           mode={"css"}
           theme={"chrome"}
           name={"ace_content"}
           onChange={this.onChange}
           editorProps={{$blockScrolling: Infinity}}
           enableBasicAutocompletion={true}
           enableLiveAutocompletion={true}
           enableSnippets={true}
           showGutter={true}
           tabSize={2}
           value={this.state.cssRule + this.state.keyframeRule}
           width={'95%'}
           wrapEnabled={true}
        />
        <div className='submit-div-container'>
          <button className='resource-display-button submit-button' onClick={this.handleClick}><span className='button-text'>Submit</span></button>
        </div>
      </div>
    )
  }
}

export default CodeEditor
